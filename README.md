# Home & Baby

Лендинг интернет-магазина товаров для детской безопасности: замки и блокираторы для окон, дверей, мебели и холодильника.

## Структура

```
index.html            — главная страница
assets/css/styles.css — стили
assets/js/main.js     — интерактив (мобильное меню, корзина, избранное, форма подписки)
assets/img/           — иконки/favicon
```

Сайт полностью статический, без сборки — можно открыть `index.html` напрямую в браузере.

## Публикация на GitHub Pages

Есть два варианта, выберите один:

**Вариант A — через Settings (проще всего):**
1. Repository → Settings → Pages.
2. Source: `Deploy from a branch`.
3. Branch: `main`, папка `/ (root)`.
4. Сохранить — сайт появится по адресу `https://<username>.github.io/<repo>/`.

**Вариант B — через GitHub Actions (уже настроено):**
В репозитории есть workflow `.github/workflows/deploy.yml`, который автоматически деплоит сайт при пуше в `main`.
Для его активации: Settings → Pages → Source → `GitHub Actions`.
