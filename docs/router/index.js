import Vue from 'vue'
import Router from 'vue-router'
import NavConfig from './nav.config.yml'

Vue.use(Router)

function regeisterRoute (navConfig) {
  const routes = []
  const parentRoutes = {}


  Object.keys(NavConfig).forEach((lang, idx) => {
    const pageNavs = NavConfig[lang]

    // for (const pageName in pageNavs) {
    pageNavs.forEach(nav => {
      const parentName = nav.name
      parentRoutes[`${parentName}-${lang}`] = parentRoutes[`${parentName}-${lang}`] || addParentRoute(parentName, lang)

      if (nav.groups) {
        nav.groups.forEach(group => {
          group.items.forEach(item => {
            addRoute(parentName, item, lang)
          })
        })
      } else if (nav.items) {
        nav.items.forEach(item => {
          addRoute(parentName, item, lang)
        })
      }
    })
    // }
  })

  function addParentRoute (parentName, lang) {
    return {
      path: `/${lang}/${parentName.toLowerCase()}`,
      // component: require(`../views/${parentName.toLowerCase()}${lang === 'en' ? '' : `-${lang}`}.vue`),
      component: require(`../views/docs.vue`),
      children: []
    }
  }

  function addRoute (parentName, item, lang) {
    parentRoutes[`${parentName}-${lang}`].children.push({
      path: `${item.name.toLowerCase()}`,
      name: `${item.name}-${lang}`,
      component: require(`../markdown/${lang}/${item.name.toLowerCase()}.md`)
    })
  }

  for (const key in parentRoutes) {
    if (parentRoutes.hasOwnProperty(key)) {
      routes.push(parentRoutes[key])
    }
  }

  return routes
}

let routes = regeisterRoute(NavConfig)
// let navigatorLang = window.navigator.language.slice(0, 2)

// if (['en', 'zh'].indexOf(navigatorLang) <= -1) {
//   navigatorLang = ''
// }

// const userLang = localStorage.getItem('at-ui-language') || navigatorLang || 'zh'

routes = routes.concat([{
  path: '/',
  redirect: { name: 'Docs' }
}, {
  path: '*',
  redirect: { name: 'Docs' }
}])

routes.forEach(page => {
  if (page.path === '/en/docs') {
    page.children.push({
      path: '',
      name: 'Docs',
      redirect: { name: page.children[0].name }
    })
  }
})

// routes.push({
//   path: '*',
//   redirect: { name: 'Home' }
// })

const router = new Router({
  routes,
  root: process.env.serverConfig.portalPrefix,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    return { x: 0, y: 0 }
  }
})

export default router
