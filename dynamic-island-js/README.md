# Dynamic Island.js

Легковесный Vanilla JS плагин для создания уведомлений в стиле "Dynamic Island" из iPhone 14/15 Pro.
Никаких зависимостей. Просто подключаете скрипт и стили.

## Установка
Подключите файлы к вашему проекту:
```html
<link rel="stylesheet" href="dynamic-island.css">
<script src="dynamic-island.js"></script>
```

## Использование
```javascript
const island = new DynamicIsland();

// Показать уведомление
island.show('Сообщение отправлено!', 'success', 3000);
```
