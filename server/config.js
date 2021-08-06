const { resolve } = require('path')
const { existsSync, readFileSync } = require('fs')

function renderConfig() {
  let config

  const filePath = process.env.npm_config_conf || resolve(__dirname, '../conf/dev.conf')
  if (!existsSync(filePath)) {
    throw new Error(`> 配置模板不存在: ${filePath}\n`)
  }

  console.log(`> 配置模板路径: ${filePath}`)

  try {
    const configFile = readFileSync(filePath, { encoding: 'utf8' })
    config = JSON.parse(configFile.replace(/\/\*注释\*\/.*/g, ''))
    console.log('> 配置模板编译成功\n')
  } catch (error) {
    throw new Error(`> 配置模板编译出错: ${error.message}\n`)
  }

  return config
}

exports.config = renderConfig()
