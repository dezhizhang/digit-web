import request from '@/utils/request';

// 获取供应商列表
export async function getUserList(params: any): Promise<any> {
    return request('/user/list', {
        method: 'GET',
        params
    });
}
