const express = require('express')

// 创建服务器
const app = express()

//监听220端口
app.listen(220, () => {
    console.log('服务启动,端口:220')
})

module.exports = app