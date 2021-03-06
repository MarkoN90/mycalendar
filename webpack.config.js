const { join } = require('path');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'

    },
    resolve: {
        extensions: [ '.js' ]
      }
}