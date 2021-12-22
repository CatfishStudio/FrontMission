# Example №3 Webpack + Phaser (TypeScript)

Пример взят из статьи
https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%83%D1%8E-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%BD%D1%83%D1%8E-%D0%B8%D0%B3%D1%80%D1%83-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-phaser-3-%D0%B8-typescript-d972c4c2527e


1) Выполнить установку необходимых библиотек:

    npm init -y
    npm install --save-dev typescript webpack webpack-cli ts-loader phaser live-server

2) Из папки C:\Git\CatfishStudio\FrontMission\example-3\node_modules\phaser\types
нужно скопировать файл phaser.d.ts в папку \src\

3) Сборка проекта

    npm run build

4) Запуск сервера

    npm run start

----------------------------------------------------------
Альтернативный сервер

    npm install node-static

Запуск сервера

    dist\server.bat
