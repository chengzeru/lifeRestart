import path from "path";

export default {
    entry: './src/app.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(path.resolve(), 'dist'),
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
};