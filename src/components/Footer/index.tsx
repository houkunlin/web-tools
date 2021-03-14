import React from 'react';
import { createFromIconfontCN, LinkOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2171248_tekhmru6ev.js', './icon-icp.js'],
});

export default () => (
  <DefaultFooter
    copyright="2020 十二后花园 版权所有"
    links={[
      {
        key: 'houkunlin.cn',
        title: (
          <>
            <LinkOutlined /> CN.
          </>
        ),
        href: 'http://houkunlin.cn',
        blankTarget: true,
      },
      {
        key: 'houkunlin.com',
        title: (
          <>
            <LinkOutlined /> COM.
          </>
        ),
        href: 'http://houkunlin.com',
        blankTarget: true,
      },
      {
        key: 'houkunlin.com.cn',
        title: (
          <>
            <LinkOutlined /> COM.CN.
          </>
        ),
        href: 'http://houkunlin.com.cn',
        blankTarget: true,
      },
      {
        key: '侯坤林.我爱你',
        title: (
          <>
            <LinkOutlined /> 我爱你.
          </>
        ),
        href: 'http://侯坤林.我爱你',
        blankTarget: true,
      },
      {
        key: '桂ICP备20000103号',
        title: (
          <>
            <IconFont type="icon-ICP-LOGO" /> 桂ICP备20000103号
          </>
        ),
        href: 'https://beian.miit.gov.cn',
        blankTarget: true,
      },
    ]}
  />
);
