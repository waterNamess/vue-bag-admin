const path = require('path')
const setUtilsBuild = function () {
    return {
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            entry: path.resolve(process.cwd(), 'web-utils/index.ts'),
            name: 'web-utils', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `utils.${format}.js`,
        },
    }
}

export default setUtilsBuild
