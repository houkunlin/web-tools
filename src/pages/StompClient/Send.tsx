import React, { useRef } from 'react';
import Headers from '@/pages/StompClient/Headers';
import { Button, Form, Input, message } from 'antd';
import { useModel } from '@@/plugin-model/useModel';

export default () => {
  // Stomp客户端连接
  const {
    state: { client },
  } = useModel('StompClient.connect');
  // header实例
  const headerRef = useRef<Headers>(null);

  const onSend = (values: any) => {
    if (client == null) {
      message.error('未连接服务器');
      return;
    }
    // @ts-ignore
    const headers: any = headerRef.current?.result() || {};
    client.send(values.uri, headers, values.content);
  };

  return (
    <div>
      <Form onFinish={onSend} initialValues={{ uri: '', content: '' }}>
        <Form.Item label="地址" name="uri">
          <Input placeholder="请输入发送URI" allowClear />
        </Form.Item>
        <Form.Item label="内容" name="content">
          <Input.TextArea placeholder="请输入发送内容" rows={6} allowClear />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            发送
          </Button>
        </Form.Item>
      </Form>
      <Headers ref={headerRef} />
    </div>
  );
};
