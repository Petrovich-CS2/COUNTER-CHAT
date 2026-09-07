# Counter Chat — CS2 разговорник

**Counter Chat** — это веб-приложение для изучения и быстрого использования английских фраз, необходимых для коммуникации в Counter-Strike 2. Приложение также включает упрощённые схемы карт с обозначением ключевых позиций. Разработано как PWA для удобного использования на мобильных устройствах.

## ✨ Особенности

- **Более 200 фраз** по 16 категориям: приветствия, команды, экономика, информация о врагах, вежливость и многие другие.
- **Транслитерация и перевод** — каждая фраза сопровождается произношением русскими буквами и переводом.
- **Голосовое озвучивание** — встроенный TTS (синтез речи) с возможностью выбора голоса (зависит от системы).
- **Избранное** — сохраняйте часто используемые фразы в отдельный список.
- **История** — автоматически запоминает последние просмотренные фразы.
- **Компактный режим** — скрывает перевод, оставляя только английскую фразу и транслит.
- **Схемы карт** — упрощённые схемы 7 популярных карт CS2 (Dust II, Mirage, Inferno, Nuke, Overpass, Ancient, Anubis) с обозначением ключевых точек.
- **PWA** — может быть установлена на домашний экран мобильного устройства и работать как нативное приложение.

## 🛠️ Технологии

- **Frontend**: ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- **Кэширование и офлайн-доступ**: Service Worker (PWA)
- **Голосовой синтез**: Web Speech API (`speechSynthesis`)
- **Хранение данных**: `localStorage` (избранное, история, настройки голоса, компактный режим)

## 📁 Структура проекта

```
counter-chat/
├── index.html          # Основной HTML-файл
├── manifest.json       # PWA манифест
├── icon-192.png        # Иконка 192×192
├── icon-512.png        # Иконка 512×512
├── splash-*.png        # Splash-экраны для iOS
└── README.md
```

## 📦 Варианты установки и запуска
1. [Открыть приложение на GitHub Pages](https://petrovich-cs2.github.io/COUNTER-CHAT/)
2. Установить на домашний экран:

· **Android:** откройте в Chrome → Меню **⋮** → Установить приложение».  
· **iOS:** откройте в Safari → «Поделиться» → «На экран «Домой»».

## ⚙️ Настройки
· **Голос:** кнопка с динамиком в шапке открывает выбор голоса (доступные голоса зависят от системы).  
· **Компактный режим:** кнопка с иконкой справа от поиска.  
· **Полноэкранный режим:** доступен в браузере (не в PWA-режиме на iOS).

## 📄 Лицензия

  Copyright 2026 ©  
[![Steam](https://img.shields.io/badge/Steam-Петрович-1B2838?style=for-the-badge&logo=steam&logoColor=white)](https://steamcommunity.com/id/ya-petrovich/)  

## P.S.
· Иконки и дизайн вдохновлены минималистичным стилем CS2.  
· Все фразы собраны на основе реального игрового опыта и сообщества.

![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Progressive Web App](https://img.shields.io/badge/Progressive_Web_App-yes-green?style=for-the-badge)
![Counter-Strike 2](https://img.shields.io/badge/CS2-Game-yellow?style=for-the-badge&logo=steam)
![EN Communication](https://img.shields.io/badge/EN-Communication-brightgreen?style=for-the-badge)
![Web App](https://img.shields.io/badge/Web-App-orange?style=for-the-badge&logo=googlechrome)
![GitHub repo size](https://img.shields.io/github/repo-size/petrovich/counter-chat?style=for-the-badge&logo=github)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Web App](https://img.shields.io/badge/Type-Web_Application-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Steam](https://img.shields.io/badge/Steam-000000?style=for-the-badge&logo=steam&logoColor=white)
![Counter-Strike](https://img.shields.io/badge/Counter--Strike-000000?style=for-the-badge&logo=counter-strike&logoColor=white)
![Made with](https://img.shields.io/badge/Made%20with-❤️%20by%20Петрович-05070a?style=for-the-badge)
![For CS2 Community](https://img.shields.io/badge/For-CS2%20Community-FF6D00?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-05070a?style=for-the-badge&logo=opensourceinitiative&logoColor=white)
