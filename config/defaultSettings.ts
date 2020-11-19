import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export interface DefaultSettings extends LayoutSettings {
  pwa?: boolean;
  logo?: string;
  /**
   * 网站名称、网站标题、首页标题
   */
  siteTitle: string;
}

export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '小侯',
  siteTitle: '十二后花园',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  splitMenus: false,
} as DefaultSettings;
