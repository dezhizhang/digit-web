import React, { useState, useImperativeHandle, forwardRef } from 'react';
import type { MutableRefObject } from 'react';
import { Drawer, Form, Input, Select, DatePicker, Button } from 'antd';
import { GENDER_TYPE, ROLE_TYPE } from './constants';
import type { UserType } from '../../typing';
import styles from './index.less';

const { Option } = Select;

export interface UserDrawerProps extends MutableRefObject<undefined> {
  onFinish: (values: UserType) => void;
}

const UserDrawer: React.FC<UserDrawerProps> = forwardRef((props, ref) => {
  const { onFinish } = props;
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    },
  }));

  const handleFinish = async () => {
    await form.validateFields();
    const values = await form.getFieldsValue();
    onFinish?.(values);
  };

  return (
    <Drawer
      className={styles.wrapper}
      visible={visible}
      title="添加用户"
      width="520px"
      onClose={() => setVisible(false)}
      footer={
        <div style={{ textAlign: 'right' }}>
          <Button style={{ marginRight: 16 }} onClick={() => setVisible(false)}>
            取消
          </Button>
          <Button onClick={handleFinish} type="primary">
            确定
          </Button>
        </div>
      }
    >
      <Form form={form} layout="vertical" onFinish={handleFinish} autoComplete="off">
        <Form.Item
          name="name"
          label="用户名"
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item name="mobile" label="电话" rules={[{ required: true, message: '密码不能为空' }]}>
          <Input placeholder="请输入密码" />
        </Form.Item>
        <Form.Item name="gender" label="性别" rules={[{ required: true, message: '性别不能为空' }]}>
          <Select placeholder="请选择性别">
            {GENDER_TYPE.map((item) => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="birthday"
          label="生日"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="role" label="角色" rules={[{ required: true, message: '角色不能为空' }]}>
          <Select placeholder="请选择角色">
            {ROLE_TYPE.map((item) => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Drawer>
  );
});

export default UserDrawer;
