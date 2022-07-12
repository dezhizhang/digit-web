import request from '@/utils/request';
import type { UserType } from './typing';
// 获取供应商列表
export async function getUserList(params: any): Promise<any> {
    return request('/user/list', {
        method: 'GET',
        params
    });
}

// 删除供应商
export async function deleteUser(params: any): Promise<any> {
    return request(`/user/delete/${params.id}`, {
        method: 'DELETE',
    })
}

// 添加用户
export async function oneAddUser(params: UserType): Promise<any> {
    return request(`/user/add`, {
        method: 'POST',
        data: params
    })
}