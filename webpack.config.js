var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}