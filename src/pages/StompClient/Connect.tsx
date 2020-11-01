import React, { useRef } from 'react';
import { Button, Form, Input, message, Spin, Tabs } from 'antd';
import { Headers } from '@/pages/StompClient/Headers';
import { FormInstance } from 'antd/lib/form';
import Stomp, { Frame } from 'stompjs';
import SockJS from 'sockjs-client';
import { useModel } from '@@/plugin-model/useModel';

export default () => {
  const { state, setState } = useModel('StompClient.connect');
  // 表单实例
  const formRef = useRef<FormInstance>(null);
  // header实例
  const headerRef = useRef<Headers>(null);

  // 连接服务器事件
  const onConnect = (values: any) => {
    const { url = '' } = values;
    const headers: any = headerRef.current?.result() || {};
    const account = formRef.current?.getFieldsValue() || {};
    setState({ connecting: true, client: null });
    // 使用 STOMP 子协议的 WebSocket 客户端
    const client = url.startsWith('ws')
      ? Stomp.over(new WebSocket(url))
      : Stomp.over(new SockJS(url));
    client.debug = () => {};

    // 连接服务器成功
    const successFun = (frame?: Frame) => {
      // eslint-disable-next-line no-console
      console.log('连接成功', frame);
      setState({ connecting: false, client });
    };
    // 连接服务器失败
    const errorFun = (error: Frame | string) => {
      setState({ connecting: false, client: null });
      message.error(`连接服务器失败：${error}`);
    };
    if (account.username && account.username.trim().length > 0) {
      client.connect(account.username, account.password, successFun, errorFun);
    } else if (headers.login && headers.login.trim().length > 0) {
      client.connect(headers, successFun, errorFun);
    } else {
      client.connect(headers, successFun, errorFun);
    }
  };

  // 关闭与服务器连接
  const onDisconnect = () => {
    setState({ ...state, connecting: true });
    const { client } = state;
    client?.disconnect(() => {
      setState({ connecting: false, client: null });
    });
  };

  const { client, connecting } = state;
  return (
    <Spin spinning={connecting}>
      <Form layout="inline" onFinish={onConnect} initialValues={{ url: '' }}>
        <Form.Item
          label="URL"
          name="url"
          rules={[{ required: true, message: '请输入连接地址!' }]}
          style={{ width: '500px' }}
        >
          <Input
            placeholder="请输入链接地址"
            style={{ width: '100%' }}
            disabled={client != null}
            allowClear
          />
        </Form.Item>
        <Form.Item>
          {client == null && (
            <Button type="primary" htmlType="submit">
              链接
            </Button>
          )}
          {client != null && (
            <Button type="primary" htmlType="button" danger onClick={onDisconnect}>
              断开连接
            </Button>
          )}
        </Form.Item>
      </Form>
      <Tabs>
        <Tabs.TabPane key="password" tab="Password">
          <Form ref={formRef} layout="inline">
            <Form.Item label="帐号" name="username">
              <Input placeholder="请输入帐号" allowClear />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input.Password placeholder="请输入密码" allowClear />
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane key="header" tab="Header">
          <Headers ref={headerRef} />
        </Tabs.TabPane>
      </Tabs>
    </Spin>
  );
};
