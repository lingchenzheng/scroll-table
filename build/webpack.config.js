const path = require('path')

function resolve() {
    return path.resolve(__dirname, '..', ...arguments)
}
module.exports = {
    mode: 'development',
    entry: {
        index: resolve('src/index.js')
    },
    output: {
        path: resolve('dist'),
        filename: 'index.js',
        library: 'ScrollTable',
        libraryTarget: 'var',
        libraryExport: 'default'
    }
}
