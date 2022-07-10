import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getUserList } from './service';
import { PAGINATION } from './constants';
import type { TablePaginationConfig } from 'antd/lib/table/Table';
import styles from './index.less';

const SupplierList: React.FC = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>(PAGINATION);

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const fetchUserList = async () => {
    const { current, pageSize } = pagination;
    const res = await getUserList({ pageIndex: current, pageSize });
    console.log('------', res);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Table pagination={{ ...pagination }} bordered dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default SupplierList;
