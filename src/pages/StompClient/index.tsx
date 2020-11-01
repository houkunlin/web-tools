import React, { useState } from 'react';
import { Card, Col, Dropdown, Menu, Row, Tabs } from 'antd';
import './index.less';
import { v4 as uuid } from 'uuid';
import { PageContainer } from '@ant-design/pro-layout';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useModel } from "@@/plugin-model/useModel";
import Connect from "./Connect";
import Send from "./Send";
import Subscribe from './Subscribe';

const { TabPane } = Tabs;

export interface PageTabPane {
  key: string;
  title: string;
  closable: boolean;
}

const defaultKey = uuid();

export default () => {
  // Stomp 连接客户端
  const { state: { client } } = useModel('StompClient.connect');
  // 发送面板激活的key
  const [sendActiveKey, setSendActiveKey] = useState(defaultKey);
  // 订阅面板激活的key
  const [subscribeKey, setSubscribeKey] = useState(defaultKey);
  // 发送面板的列表内容
  const [sendTabs, setSendTabs] = useState<PageTabPane[]>([
    {
      key: defaultKey,
      title: '默认',
      closable: false,
    },
  ]);
  // 订阅面板的列表内容
  const [subscribeTabs, setSubscribeTabs] = useState<PageTabPane[]>([
    {
      key: defaultKey,
      title: '默认',
      closable: false,
    },
  ]);

  // Tabs发送面板被编辑事件
  const onEditSendTabs = (targetKey: any, action: string) => {
    console.log('onEditSendTabs', targetKey, action);
    const tabs = sendTabs;
    const activeKey = sendActiveKey;
    if (action === 'add') {
      const key = uuid();
      const item: PageTabPane = {
        title: `Tab-${tabs.length}`,
        key,
        closable: tabs.length > 0,
      };
      tabs.push(item);
      setSendTabs(tabs)
      setSendActiveKey(key)
    } else if (action === 'remove') {
      const index = tabs.findIndex((pane) => pane.key === targetKey);
      const newSendTabs = tabs.filter((pane) => pane.key !== targetKey);
      let newActiveKey = activeKey;
      if (newSendTabs.length && activeKey === targetKey) {
        newActiveKey = newSendTabs[index >= 0 ? index - 1 : 0].key;
      }
      setSendTabs(newSendTabs)
      setSendActiveKey(newActiveKey)
    }
  };

  // Tabs订阅面板被编辑事件
  const onEditSubscribeTabs = (targetKey: any, action: string) => {
    console.log('onEditSendTabs', targetKey, action);
    const tabs = subscribeTabs;
    const activeKey = subscribeKey;
    if (action === 'add') {
      const key = uuid();
      const item: PageTabPane = {
        title: `Tab-${tabs.length}`,
        key,
        closable: tabs.length > 0,
      };
      tabs.push(item);
      setSubscribeTabs(tabs);
      setSubscribeKey(key)
    } else if (action === 'remove') {
      const index = tabs.findIndex((pane) => pane.key === targetKey);
      const newTabs = tabs.filter((pane) => pane.key !== targetKey);
      let newActiveKey = activeKey;
      if (newTabs.length && activeKey === targetKey) {
        newActiveKey = newTabs[index >= 0 ? index - 1 : 0].key;
      }
      setSubscribeTabs(newTabs);
      setSubscribeKey(newActiveKey)
    }
  };

  // 当前Stomp客户端中订阅的列表
  const subscriptionKeys = client != null ? Object.keys(client.subscriptions) : [];
  const menu = (
    <Menu onClick={() => {
    }}>
      {subscriptionKeys.map((key) => (
        <Menu.Item key={key} icon={<UserOutlined />}>
          {key}
        </Menu.Item>
      ))}
    </Menu>
  );
  let tabBarExtraContent = <div />;
  if (subscriptionKeys.length > 0) {
    tabBarExtraContent = (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          所有订阅 <DownOutlined />
        </a>
      </Dropdown>
    );
  }
  return (
    <PageContainer>
      <Card>
        <Connect />
      </Card>
      <Row gutter={20}>
        <Col span={10}>
          <Card>
            <Tabs
              type="editable-card"
              onEdit={onEditSendTabs}
              activeKey={sendActiveKey}
              onChange={(activeKey: string) => {
                setSendActiveKey(activeKey)
              }}
            >
              {sendTabs.map((pane) => (
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                  <Send />
                </TabPane>
              ))}
            </Tabs>
          </Card>
        </Col>
        <Col span={14}>
          <Card>
            <Tabs
              type="editable-card"
              onEdit={onEditSubscribeTabs}
              activeKey={subscribeKey}
              onChange={(activeKey: string) => {
                setSubscribeKey(activeKey)
              }}
              tabBarExtraContent={{
                right: tabBarExtraContent,
              }}
            >
              {subscribeTabs.map((pane) => (
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                  <Subscribe />
                </TabPane>
              ))}
            </Tabs>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
}
