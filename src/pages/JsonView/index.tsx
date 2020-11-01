import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Col, Form, Input, message, Row } from 'antd';
import ReactJson from 'react-json-view';

interface State {
  content: object;
}

class JsonView extends React.Component<any, State> {
  state: State = {
    content: {},
  };

  showJson = (values: any) => {
    try {
      const json = JSON.parse(values.content);
      this.setState({ content: json });
    } catch (e) {
      message.error('Json数据格式错误');
    }
  };

  render() {
    return (
      <PageContainer>
        <Row gutter={20}>
          <Col span={12}>
            <Card title="输入区">
              <Form onFinish={this.showJson} layout="vertical">
                <Form.Item name="content">
                  <Input.TextArea rows={12} placeholder="请输入Json字符串" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    格式化
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="展示区" style={{ minHeight: 460 }}>
              <ReactJson src={this.state.content} name={null} displayDataTypes={false} />
            </Card>
          </Col>
        </Row>
      </PageContainer>
    );
  }
}

export default JsonView;
