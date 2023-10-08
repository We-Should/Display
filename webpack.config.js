module.exports = {
    module: {
        rules: [
        {
            test: /\.md$/,
            loader: 'file-loader',
            options: {
                outputPath: 'public',
                name: '[name].[ext]',
            },
        },
        ],
    },
};