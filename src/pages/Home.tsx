import React from 'react';
import { Link } from 'umi';
import { Helmet } from '@@/plugin-helmet/exports';
import { Card, Col, Row, Typography } from 'antd';
import { useModel } from '@@/plugin-model/useModel';

export default () => {
  const { initialState } = useModel('@@initialState');
  const { settings } = initialState || {};

  return (
    <>
      <Helmet>
        <title>{settings?.siteTitle}</title>
      </Helmet>
      <Typography.Title level={2}>工具列表</Typography.Title>
      <Row gutter={10}>
        <Col span={4}>
          <Link to="/utils/StompClient">
            <Card hoverable bordered>
              <Card.Meta title="Stomp 客户端" description="在线 Stomp 客户端" />
            </Card>
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/utils/JsonView">
            <Card hoverable bordered>
              <Card.Meta title="Json 展示" description="在线 Json 格式化展示" />
            </Card>
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/utils/Highlight">
            <Card hoverable bordered>
              <Card.Meta title="代码高亮" description="Highlight 代码高亮" />
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};
