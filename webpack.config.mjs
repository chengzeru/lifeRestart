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
};