/*
  Service Worker для Counter Chat.

  Стратегия:
  - index.html (сама страница): "сеть в приоритете" — при каждом открытии
    с доступом в интернет подтягивается САМАЯ СВЕЖАЯ версия с сервера
    и тут же кладётся в кэш. Если сети нет — отдаётся последняя закэшированная
    версия, чтобы приложение всё равно открылось (офлайн-доступ).
  - Остальные файлы (иконки, манифест, сплэши): "кэш в приоритете" — они меняются
    редко, поэтому отдаём мгновенно из кэша, а в фоне тихо обновляем на будущее.

  ВАЖНО: при каждом значимом обновлении контента (новые фразы, карты, дизайн)
  увеличивай CACHE_VERSION на единицу. Это заставит Service Worker пересоздать
  кэш и корректно удалить старый — без этого шага браузер может решить,
  что новый sw.js "такой же", и не обновит закэшированные файлы вовремя.
*/
/* НЕ РЕДАКТИРУЙ ВРУЧНУЮ: __BUILD_VERSION__ подставляется автоматически
   GitHub Action-ом при каждой публикации (см. .github/workflows/deploy.yml) */
const CACHE_VERSION = '__BUILD_VERSION__';
const CACHE_NAME = `counter-chat-${CACHE_VERSION}`;

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './splash-1290x2796.png',
  './splash-1179x2556.png',
  './splash-1284x2778.png',
  './splash-1170x2532.png',
  './splash-1080x2340.png',
  './splash-1242x2688.png',
  './splash-828x1792.png',
  './splash-1125x2436.png',
  './splash-1320x2868.png',
  './splash-1206x2622.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {}) // не роняем установку, если какой-то файл не нашёлся
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// позволяет странице попросить новый Service Worker активироваться немедленно
// (используется кнопкой "Обновить" в баннере обновления)
/* Текст мини-changelog для баннера обновления — подставляется автоматически
   GitHub Action-ом из changelog.json при каждой публикации. НЕ редактируй
   вручную — редактируй changelog.json, а сюда значение попадёт само. */
const CHANGELOG_TEXT = '__CHANGELOG_TEXT__';

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
  if (event.data === 'GET_CHANGELOG'){
    // отвечаем странице напрямую, без HTTP-запроса — так его не может перехватить
    // ещё активный СТАРЫЙ Service Worker со своей (потенциально устаревшей) логикой
    event.source.postMessage({ type: 'CHANGELOG', text: CHANGELOG_TEXT });
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // пробный запрос для проверки реальной доступности сети (используется для
  // честного определения офлайна на iOS, где navigator.onLine ненадёжен) —
  // намеренно НЕ перехватываем его вообще, пропускаем напрямую в браузер,
  // иначе Service Worker может ответить из собственной логики кэширования
  // и исказить результат проверки
  if (req.url.includes('probe=')) return;

  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  const isChangelog = req.url.includes('changelog.json');

  if (isHTML || isChangelog) {
    // сеть в приоритете — свежий контент при каждом открытии с интернетом
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || (isHTML ? caches.match('./index.html') : undefined)))
    );
    return;
  }

  // статичные файлы — кэш в приоритете, фоновое обновление
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
