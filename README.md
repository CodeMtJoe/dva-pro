# React+dva初始化模板
装修中...

## ⏫更新日志:
time:2020-4-20
- 1.加入了全局错误的捕获
```
const app=dva({
    onError(e,dispatch){
        message.error(e.message)
    }
})
```
- 2.请求模块http.js 增加请求类型的判断,设置超时

