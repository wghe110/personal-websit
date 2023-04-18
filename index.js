const express = require('express')
const path = require('path')

// 创建服务器
const app = express()

//监听80端口
app.listen(180, () => {
    console.log('服务启动')
})

app.get('/', (req, res) => {    
	var options = {
        root: path.resolve(__dirname, './src'),    
		headers: {
		  "Content-Type": "text/html"
		}
	}
	res.sendFile('index.html',options);
})