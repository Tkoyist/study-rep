module.exports = {
    entry:'./src/index.js',
    output:{
        publicPath:'xuni',
        filename:'boundle.js',   
    },


    devServer:{
        port:'8080',
        contentBase:'www'
    }
}