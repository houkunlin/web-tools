// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  copy: [
    {
      from: 'node_modules/highlight.js/styles/',
      to: 'highlight.js/',
    },
  ],
  antd: {
    // 开启暗色主题。
    dark: false,
    // 开启紧凑主题。
    compact: false,
  },
  dva: {
    // 表示是否启用 immer 以方便修改 reducer。
    immer: true,
    // 表示是否启用 dva model 的热更新。
    hmr: true,
    // 是否跳过 model 验证。
    // https://umijs.org/zh-CN/plugins/plugin-dva#%E6%88%91%E7%9A%84-model-%E5%86%99%E6%B3%95%E5%BE%88%E5%8A%A8%E6%80%81%EF%BC%8C%E4%B8%8D%E8%83%BD%E8%A2%AB%E8%AF%86%E5%88%AB%E5%87%BA%E6%9D%A5%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F
    // skipModelValidate: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout#name
    // 产品名，默认值为包名。Default: name in package.json
    name: defaultSettings.siteTitle,
    locale: true,
    ...defaultSettings,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  // 启用按需加载
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/index',
      name: 'home',
      component: './Home',
    },
    {
      path: 'utils',
      name: 'utils',
      icon: 'aim',
      routes: [
        {
          path: 'StompClient',
          name: 'StompClient',
          component: './StompClient',
        },
        {
          path: 'JsonView',
          name: 'JsonView',
          component: './JsonView',
        },
        {
          path: 'Highlight',
          name: 'Highlight',
          component: './Highlight',
        },
      ],
    },
    {
      path: '/',
      redirect: '/index',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // 为所有非三方脚本加上 crossorigin="anonymous" 属性，通常用于统计脚本错误。
  // crossorigin: true,
  // 使用 esbuild 作为压缩器。
  // esbuild: {},
  manifest: {
    basePath: '/',
  },
  metas: [
    {
      name: 'keywords',
      content: '侯坤林, 十二后花园, 小十二',
    },
    {
      name: 'description',
      content: '侯坤林的个人工具箱',
    },
  ],
  // base: '.',
  // https://umijs.org/zh-CN/docs/deployment#html-%E5%90%8E%E7%BC%80
  // exportStatic: {
  //   htmlSuffix: true,
  // },
  devServer: {
    port: 3000,
  },
});
