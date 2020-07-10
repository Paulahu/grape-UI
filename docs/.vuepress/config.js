module.exports = {
  base: '/grape-UI/',
  title: 'grape-UI',
  description: 'An easy UI components based on Vue.',
  // theme: 'reco',
  themeConfig: {
    logo: '/grapes.png',
    author: 'Paula Hu',
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      {text: '首页', link: '/', icon: 'reco-home'},
      {text: '博客', link: 'https://juejin.im/user/5e609571f265da57337d0ebe/posts', icon: 'reco-juejin'},
      {text: '欢迎Star', link: 'https://github.com/Paulahu/grape-UI', icon: 'reco-date'},
      {text: 'GitHub', link: 'https://github.com/Paulahu', icon: 'reco-github'}
    ],
    sidebar: [
      {
      title: '介绍',
      collapsable: false,
      children: [
        '/introduce/',
      ]},
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      }]

    // sidebar: [
    //   {
    //     title: '介绍',
    //     collapsable: false,
    //     children: ['/introduce/']
    //   },
    //   {
    //   title: '入门',
    //   collapsable: false,
    //   children: [
    //     '/install/',
    //     '/get-started/',
    //   ]
    // },
    //   {
    //     title: '组件',
    //     collapsable: false,
    //     children: [
    //       "/components/button",
    //       "/components/input",
    //       "/components/tabs",
    //       "/components/grid",
    //       "/components/layout",
    //       "/components/popover",
    //       "/components/collapse",
    //       "/components/toast"
    //     ]
    //   }],
  }
}