/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getUserList } from './service';
import { PAGINATION } from './constants';
import type { TablePaginationConfig } from 'antd/lib/table/Table';
import styles from './index.less';

const SupplierList: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [supplier, setSupplier] = useState([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>(PAGINATION);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    { title: '呢称', dataIndex: 'nickName', key: 'name' },
    {
      title: '电话',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (text: number) => {
        return text === 1 ? '管理员' : '普通用户';
      },
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      render: (text: string) => {
        return text ? '男' : '女';
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return <a role="button">删除</a>;
      },
    },
  ];

  const handleChange = (page: TablePaginationConfig) => {
    setPagination({ ...pagination, current: page?.current, pageSize: page?.pageSize });
  };

  const fetchUserList = async () => {
    setLoading(true);
    const { current, pageSize } = pagination;
    const res = await getUserList({ pageIndex: current, pageSize });
    if (res?.success) {
      setLoading(false);
      setTotal(res?.total);
      setSupplier(res?.data);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, [pagination]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Table
          pagination={{ ...pagination, total }}
          bordered
          onChange={handleChange}
          loading={loading}
          dataSource={supplier}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default SupplierList;
