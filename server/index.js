const express = require('express')
const { config } = require('./config')
const { html } = require('./html')
const { downloadLangFile } = require('./lang')

const { port, mode } = config
const app = express()

if (mode !== 'pvt') {
  // 下载最新语言文件至本地
  downloadLangFile()
}

/**
 * 健康检查
 */
app.get('/healthz', (_, resp) => resp.send(''))

/**
 * 静态文件服务器
 */
app.use(express.static('dist'))

/**
 * 主路由
 */
app.use((_, resp) => resp.send(html))

app.listen(port, () => console.log(`Server is running at http://127.0.0.1:${port}`))
