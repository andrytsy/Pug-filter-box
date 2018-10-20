module.exports = function () {
    return {
        devtool: 'eval-sourcemap',
        devServer: {
            stats: 'errors-only',
            port: 9000
        }
    }
};



