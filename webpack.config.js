const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const HtmlPlugin=new HtmlWebpackPlugin({ //内存中自动生成html页面插件
    template:path.join(__dirname,'./index.html'),//源文件
    filename:'index.html'//生成首页的名称
})
module.exports={
    entry:"./index.js", //入口文件
    mode:"development", ////开发模式  development  production
    devServer:{ //控制dev-server的行为
        contentBase:path.join(__dirname,'./index.js'), //应用路径
        hot:true, //热更新
        port:8999,
        compress:true,//启用Gzip压缩
        host:'192.168.0.199' //自定义服务器地址
    },
    plugins:[ 
        HtmlPlugin

    ],
    module:{ //所有第三方模块匹配规则
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'] //处理css文件
          
            },
            {//处理图片
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']

            },
            {//处理字体
                test:/\.(woff|woff2|eot|tff|otf)$/,
                use:['file-loader']

            },
            {//处理js/jsx文件
                test:/\.js|.jsx$/, //处理高级es语法
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env',"@babel/preset-react"],
                      plugins: ['@babel/transform-runtime',
                      ["import", 
                      { "libraryName": "antd", //使用ant组件库
                       "libraryDirectory": "es",
                        "style": "css" 
                    }]
                      ]                            
                    }

                }             
            }
          

            
        ]
    }

    

}