const { readFileSync } = require('fs')
const { resolve } = require('path')
const { config } = require('./config')

function renderHtml() {
  const { port, ...restConfig } = config

  const htmlFilePath = resolve(__dirname, '../dist/index.bak')

  const originalHtml = readFileSync(htmlFilePath, { encoding: 'utf8' })
  const temp = originalHtml.split('</body>')
  const configScript = `<script>window.config=${JSON.stringify(restConfig)}</script>`
  const html = temp[0] + configScript + '</body>' + temp[1]

  return html
}

exports.html = renderHtml()
