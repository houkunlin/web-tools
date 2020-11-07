import { Affix, Popover } from 'antd';
import React, { CSSProperties, useState } from 'react';
import './index.less';
import { InfoCircleOutlined } from '@ant-design/icons';

interface Props {
  /**
   * Popover 的标题
   */
  title?: string;
  /**
   * Popover 的内容
   */
  children?: any;
  /**
   * Affix固钉的样式
   */
  style?: CSSProperties;
  /**
   * 展示图标、按钮图标
   */
  icon?: JSX.Element | any;
  /**
   * 悬停窗口模式，hover 鼠标滑过， click 鼠标点击
   */
  trigger?: 'hover' | 'click';

  [key: string]: any;
}

export default (props: Props) => {
  const { icon = <InfoCircleOutlined />, trigger } = props;
  const [visible, setVisible] = useState(false);
  let config = {};
  if (trigger === 'click') {
    config = {
      visible,
      onVisibleChange: (value: boolean) => setVisible(value),
    };
  }

  return (
    <Affix offsetBottom={0} className="right-bottom" style={props.style}>
      <Popover
        content={props.children}
        title={props.title}
        placement="topRight"
        trigger={trigger}
        {...config}
      >
        {icon}
      </Popover>
    </Affix>
  );
};
