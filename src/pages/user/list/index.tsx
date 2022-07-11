/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Table, Popconfirm } from 'antd';
import styles from './index.less';
import { PAGINATION } from './constant';
import { getUserList, deleteUser } from './service';
import type { TablePaginationConfig } from 'antd/lib/table/Table';

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [pagination, setPagination] = useState<TablePaginationConfig>(PAGINATION);

  const handleConfirm = async (id: string) => {
    const res = await deleteUser({ id });
    console.log('res', res);
  };

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
      setUsers(res?.data);
    }
  };

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
      render: (_: string, record: any) => {
        return (
          <Popconfirm
            onConfirm={() => handleConfirm(record?.id)}
            title="您确定要删除吗？"
            okText="确定"
            cancelText="取消"
          >
            <a role="button">删除</a>
          </Popconfirm>
        );
      },
    },
  ];

  useEffect(() => {
    fetchUserList();
  }, [pagination]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Table
          pagination={{ ...pagination, total }}
          bordered
          onChange={handleChange}
          loading={loading}
          dataSource={users}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default UserList;
