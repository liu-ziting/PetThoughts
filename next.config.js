const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // 配置别名
            config.resolve.alias['@'] = path.join(__dirname)
        }
        return config
    }
}

module.exports = nextConfig
