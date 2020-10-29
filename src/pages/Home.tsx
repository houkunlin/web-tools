import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { ConnectProps } from '@@/plugin-dva/connect';
import { history, Link } from 'umi';

class Home extends React.Component<ConnectProps, any> {
  testJump = () => {
    history.push({
      pathname: '/index',
      query: {
        name: 'testName',
      },
    });
  };

  render() {
    return (
      <>
        <Typography.Title level={2}>工具列表</Typography.Title>
        <Row>
          <Col>
            <Link to="/utils/StompClient">
              <Card hoverable bordered>
                <Card.Meta title="Stomp 客户端" description="在线 Stomp 客户端" />
              </Card>
            </Link>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
