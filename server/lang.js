const { createWriteStream } = require('fs')
const { resolve } = require('path')
const { get } = require('http')

const langList = ['zh-CN', 'en-US']

function downloadLangFile(assetsFolder = 'dist') {
  for (const lang of langList) {
    const langFileURL = `http://saas-frontend.oss-cn-beijing.aliyuncs.com/laiye-chatbot-web/locales/${lang}.json`
    const langFileLocalPath = resolve(__dirname, `../${assetsFolder}/locales/${lang}.json`)

    get(langFileURL, (res) => res.pipe(createWriteStream(langFileLocalPath)))
  }
}

module.exports = { downloadLangFile }
