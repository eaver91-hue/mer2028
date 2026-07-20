# Тендерный дашборд

React/Vite SPA для управления подготовкой к государственному конкурсу: главная, вероятность победы, финансовая модель, риски и исполнение.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Создайте репозиторий и загрузите содержимое проекта в ветку `main`.
2. Откройте **Settings → Pages**.
3. В поле **Source** выберите **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` автоматически соберет и опубликует приложение.

`vite.config.js` использует `base: './'`, поэтому проект работает как в корневом домене, так и в репозитории вида `username.github.io/repository`.

## Где менять данные

Все демонстрационные данные находятся в `src/data/dashboardData.js`.
