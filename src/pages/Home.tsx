import React, { useState } from 'react';
import { Link } from 'umi';
import { Helmet } from '@@/plugin-helmet/exports';
import { Card, Col, Row, Typography } from 'antd';
import { useModel } from '@@/plugin-model/useModel';
import './Home.less';

export default () => {
  const { initialState } = useModel('@@initialState');
  const { settings } = initialState || {};
  // 这个 siteTitle 是在 defaultSettings.ts 中自定义配置的，没有提供类型，因此这个报了检查警告
  // @ts-ignore
  const siteTitle = settings?.siteTitle;
  const [colProps] = useState({
    span: 4,
    xs: 24,
    sm: 24,
    md: 12,
    lg: 6,
    xl: 4,
    style: { marginTop: 10 },
  });

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Row>
        <Col span={24}>
          <Typography.Title level={2}>工具列表</Typography.Title>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col {...colProps}>
          <Link to="/utils/StompClient">
            <Card hoverable bordered>
              <Card.Meta title="Stomp 客户端" description="在线 Stomp 客户端" />
            </Card>
          </Link>
        </Col>
        <Col {...colProps}>
          <Link to="/utils/JsonView">
            <Card hoverable bordered>
              <Card.Meta title="Json 展示" description="在线 Json 格式化展示" />
            </Card>
          </Link>
        </Col>
        <Col {...colProps}>
          <Link to="/utils/Highlight">
            <Card hoverable bordered>
              <Card.Meta title="代码高亮" description="Highlight 代码高亮" />
            </Card>
          </Link>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col {...colProps}>
          <Typography.Title level={2}>相关链接</Typography.Title>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col {...colProps}>
          <Card hoverable bordered>
            <a href="//houkunlin.cn" target="_blank">
              <Card.Meta title="个人网站" description="侯坤林的个人网站" />
            </a>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card hoverable bordered>
            <a href="//houkunlin.gitee.io" target="_blank">
              <Card.Meta title="博客" description="Gitee Pages" />
            </a>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card hoverable bordered>
            <a href="//houkunlin.gitee.io/resume" target="_blank">
              <Card.Meta title="简历" description="Gitee Pages" />
            </a>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card hoverable bordered>
            <a href="//houkunlin.gitee.io/web-tools" target="_blank">
              <Card.Meta title="工具" description="Gitee Pages" />
            </a>
          </Card>
        </Col>
      </Row>
    </>
  );
};
