// supports vite css.extract=false.
// credits: @ruofee
// https://github.com/vitejs/vite/issues/4345#issuecomment-1073734133
// https://github.com/ruofee/vue-dynamic-form-component/blob/vite/build/ViteSingleCssPlugin.js

let packageNames = []
let viteConfig
let IIFEcss

// __notice__: this is for package.json without `type=module`
// https://vitejs.dev/guide/build.html#library-mode
// https://nodejs.org/api/packages.html#type
let extMap = {
  cjs: '.js',
  es: '.mjs',
  umd: '.umd.js',
}

// 将 css 打包到 js 文件中
export default function () {
  return {
    apply: 'build',
    enforce: 'post',
    name: 'pack-css',
    configResolved (config) {
      viteConfig = config
      packageNames = viteConfig.build.lib.formats.map(format => {
        return viteConfig.build.lib.fileName + extMap[format]
      })
    },
    generateBundle (_, bundle) {
      const cssFileName = 'style.css'
      const { [cssFileName]: cssBundle } = bundle
      if (cssBundle) {
        IIFEcss = `(function() {try {var elementStyle = document.createElement('style');elementStyle.textContent = ${JSON.stringify(
          cssBundle.source
        )};document.head.appendChild(elementStyle);} catch(error) {console.error(error, 'unable to concat style inside the bundled file')}})()`
        delete bundle[cssFileName]
      }
      packageNames.forEach(packageName => {
        if (bundle[packageName]) {
          bundle[packageName].code += ';;' + IIFEcss + ';;'
        }
      })
    }
  }
}
