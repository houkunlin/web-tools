import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FormInstance } from 'antd/lib/form';
import { useModel } from "@@/plugin-model/useModel";
import { v4 as uuid } from 'uuid'

export default () => {
  const [id] = useState(uuid())
  // Stomp客户端连接
  const { state: { client } } = useModel('StompClient.connect');
  // 当前正在订阅的ID
  const [subscribeId, setSubscribeId] = useState<string | null>(null);
  // 当前结果内容
  const [result, setResult] = useState<string>('');
  // 是否开启持续日志
  const [openLongLog, setOpenLongLog] = useState<boolean>(false);
  // 表单实例
  const formRef = React.createRef<FormInstance>();

  // 订阅事件
  const onSubscribe = (values: any) => {
    console.log('订阅数据', values);
    if (client == null) {
      message.error('未连接服务器');
      return;
    }
    // 创建一个订阅
    const subscribe = client.subscribe(values.uri, (msg) => {
      console.log('接收数据', values.uri, msg);
      let newResult = result
      if (openLongLog) {
        newResult += msg.body;
      } else if (msg.headers['content-type'] === 'application/json') {
        newResult = JSON.stringify(JSON.parse(msg.body), null, 2);
      } else {
        newResult = msg.body;
      }
      newResult += '\r\n';
      setResult(newResult)
    });
    console.log('订阅数据', subscribe);
    setSubscribeId(subscribe.id)
  };

  // 取消订阅事件
  const onUnsubscribe = () => {
    if (client == null) {
      message.error('未连接服务器');
      return;
    }
    console.log('取消订阅', subscribeId);
    setSubscribeId(null);
    client.unsubscribe(subscribeId!!);
  };

  // 表单内容改变，持续日志状态改变
  const onValuesChange = (changedValues: any, allValues: any) => {
    if (changedValues.longLog != null) {
      setOpenLongLog(changedValues.longLog)
    }
  };

  // 是否正在订阅
  const isSubscribe = () => {
    if (client == null) {
      if (subscribeId != null) {
        setSubscribeId(null)
      }
      return false;
    }
    return subscribeId != null;
  };
  // 使用 Ref 暴露指定的方法
  // React.forwardRef((props,ref) => { useImperativeHandle(ref, () => ({ id, destroy })) })

  useEffect(() => {
    // 仅在创建组件时运行
    // https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
    // https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
    console.log('创建订阅面板', id)
    return () => {
      // 仅在销毁组件时运行
      console.log('销毁订阅面板', id, '取消订阅', subscribeId);
      setSubscribeId(null);
      client?.unsubscribe(subscribeId!!);
    };
  }, []);

  const isSub = isSubscribe();
  return (
    <div>
      <Form
        ref={formRef}
        layout="inline"
        onFinish={onSubscribe}
        onValuesChange={onValuesChange}
        initialValues={{ uri: '', longLog: openLongLog }}
        style={{ marginBottom: 20 }}
      >
        <Form.Item label="地址" name="uri">
          <Input placeholder="请输入订阅URI" allowClear disabled={isSub} />
        </Form.Item>
        <Form.Item>
          {!isSub && (
            <Button type="primary" htmlType="submit">订阅</Button>
          )}
          {isSub && (
            <Button danger onClick={onUnsubscribe}>取消订阅</Button>
          )}
        </Form.Item>
        <Form.Item name="longLog" valuePropName="checked">
          <Checkbox>持续记录</Checkbox>
        </Form.Item>
      </Form>
      <SyntaxHighlighter language="javascript" style={docco}>
        {result}
      </SyntaxHighlighter>
    </div>
  );
}
