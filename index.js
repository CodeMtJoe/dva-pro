import dva from 'dva'
import React from 'react';
import {message} from 'antd'
const app=dva({
    onError(e,dispatch){
        message.error(e.message)
    }
})

app.model(require('./models/user').default)
app.router(require('./router').default)
app.start('#app')