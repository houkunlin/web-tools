import React, { forwardRef, useImperativeHandle } from 'react';
import './index.less';
import { Button, Col, Form, Input, Row } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

export default forwardRef((props, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(
    ref,
    () => ({
      result: () => {
        const resultValues = {};
        const values = form.getFieldsValue().keyvalues || [];
        values.forEach((value: { name: string | number; value: any }) => {
          if (value) {
            resultValues[value.name] = value.value;
          }
        });
        return resultValues;
      },
    }),
    [form],
  );

  // console.log('initValues', initValues, 'FieldsValue', form.getFieldsValue())
  const iconWidth = 24 * 3 - 10;
  return (
    <Form form={form} style={{ marginBottom: 0 }}>
      <Form.List name="keyvalues">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Row gutter={10}>
                <Col span={4}>
                  <Form.Item
                    {...field}
                    name={[field.name, 'name']}
                    fieldKey={[field.fieldKey, 'name']}
                  >
                    <Input placeholder="Key" allowClear />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <div style={{ float: 'left', width: `calc(100% - ${iconWidth}px - 10px)` }}>
                    <Form.Item
                      {...field}
                      name={[field.name, 'value']}
                      fieldKey={[field.fieldKey, 'value']}
                    >
                      <Input placeholder="Value" allowClear />
                    </Form.Item>
                  </div>
                  <div style={{ float: 'left', width: iconWidth, marginLeft: 10 }}>
                    <Form.Item style={{ width: iconWidth }}>
                      <DeleteOutlined
                        className="icon-item icon-pointer"
                        onClick={() => remove(field.name)}
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                增加
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
});
