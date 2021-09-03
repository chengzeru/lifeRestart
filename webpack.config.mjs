import path from "path";

export default {
    entry: './src/main.js',
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
                        presets: [
                            ['@babel/preset-env', {
                                "targets": {
                                    "chrome": 49,
                                    "ie": 11,
                                },
                                "useBuiltIns": "usage",
                                "corejs": 3,
                            }]
                        ],
                        plugins: ["@babel/plugin-transform-runtime"],
                    }
                }
            }
        ]
    },
};