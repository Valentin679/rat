const path = require('path');
const webpack = require('webpack');
module.exports = {
    module: {
        rules: [
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=fonts/[name].[ext]!static'
            }
        ]
    }
}