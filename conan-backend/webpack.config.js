/* NPM PACKAGES */
const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

/* ENTRY */
const entry = {
    main: './src/pl-express/index.ts'
}

/* TARGET */
const target = 'node'

/* MODE */
const mode = process.env.NODE_ENV

/* DEVTOOL */
const devtool = 'inline-source-map'

/* MODULE */
const modules = {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
}

/* RESOLVE */
const resolve = {
    extensions: [ '.tsx', '.ts', '.js' ]
}

/* PLUGINS */
const plugins = [
    new NodemonPlugin({
        verbose: false
    })
]

/* OUTPUT */
const output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
}

/* EXPORT CONFIG */
module.exports = {
    entry: entry,
    target: target,
    mode: mode,
    devtool: devtool,
    module: modules,
    resolve: resolve,
    plugins: plugins,
    output: output
  };