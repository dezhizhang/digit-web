import React, { useState, useImperativeHandle, forwardRef } from 'react';
import type { MutableRefObject } from 'react';
import { Drawer } from 'antd';
import styles from './index.less';

export interface UserDrawerProps extends MutableRefObject<undefined> {}

const UserDrawer: React.FC<UserDrawerProps> = forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    },
  }));
  return (
    <Drawer
      className={styles.wrapper}
      visible={visible}
      title="添加用户"
      width="520px"
      onClose={() => setVisible(false)}
    >
      <div>hello</div>
    </Drawer>
  );
});

export default UserDrawer;
