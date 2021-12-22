# Example №2 Webpack + Phaser (JavaScript)

Создайте файл package.json
    npm init -y


Установка Webpack: 
    npm install --global webpack
    npm install webpack webpack-cli --save-dev


Установить Babel: 
    npm install --save-dev babel-loader @babel/core

Установить Phaser:
    npm install phaser

Установка сервера
    npm install node-static

Сборка проекта:
    npx webpack
    (или указать конкретно npx webpack --config webpack.config.js)

Запуск сервера 
    node server.js
    (или файлом server.bat)