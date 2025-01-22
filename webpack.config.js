const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');  // Импорт плагина VueLoaderPlugin

module.exports = {
    entry: './src/index.ts',
    mode: "none",
    output: {
        filename: 'index.ts',
        path: path.resolve(__dirname, 'dist'),
        library: 'ModalPluginNikita',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'), // Adjust this based on your folder structure
            vue: 'vue/dist/vue.runtime.esm-bundler.js',
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/], // This ensures TS is used in .vue files
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),  // Добавьте VueLoaderPlugin
    ],
    externals: {
        vue: 'vue',
    },
};
