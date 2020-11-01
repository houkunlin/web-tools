import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { ConnectProps } from '@@/plugin-dva/connect';
import { connect, history, Link } from 'umi';
import { Helmet } from '@@/plugin-helmet/exports';
import { DefaultSettings } from '../../config/defaultSettings'

interface Props extends ConnectProps {
  settings: DefaultSettings | null;
}

class Home extends React.Component<Props, any> {
  testJump = () => {
    history.push({
      pathname: '/index',
      query: {
        name: 'testName',
      },
    });
  };

  render() {
    const { settings } = this.props;
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
        </Row>
      </>
    );
  }
}

export default connect(({ settings }: any) => ({ settings }), null, null, { forwardRef: true })(
  Home,
);
