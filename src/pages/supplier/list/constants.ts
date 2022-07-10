import type { TablePaginationConfig } from 'antd/lib/table/Table';
export const PAGINATION: TablePaginationConfig = {
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    pageSizeOptions: ['10', '50', '100', '150', '200'],
}