import dva from 'dva'
import React from 'react';
const app=dva()

app.model(require('./models/user').default)
app.router(require('./router').default)
app.start('#app')