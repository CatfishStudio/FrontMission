const path = require('path');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'build'),
    },
    mode: "development" // "development" or "production"
};