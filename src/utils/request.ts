


/*
 * :file 更详细的 api 文档: https://github.com/umijs/umi-request
 * :name: \marketing\src\utils\request.ts
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-07-07 16:08:23
 * :last editor: 张德志
 * :date last edited: 2022-06-22 20:59:21
 * :date last edited: 2021-10-15 10:48:54
 */
import type { ResponseError, RequestOptionsInit } from 'umi-request';
import { extend } from 'umi-request';
import { notification } from 'antd';


// 拓展options
type RequestOptionsType = RequestOptionsInit & {
    // 是否关闭默认的接口拦截提示
    disableMsgTips?: boolean;
    // 是否无视401未登陆报错跳转
    disable401Login?: boolean;
    reloadPage?: boolean;
};

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};



type DataType = {
    text: string;
    cancelMessage: boolean;
    [props: string]: string | boolean;
};

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError): DataType => {
    // 502 data是文本
    const { response, data } = error;
    if (response && response.status) {
        const { status } = response;
        notification.warning({
            message: '提示信息',
            description: codeMessage[status],
        });
    }
    return data;
    // return error;
};

type RequestType = (url: string, options?: RequestOptionsType) => Promise<any>;

/**
 * 配置request请求时的默认参数
 */
const request: RequestType = extend({
    // 默认错误处理
    errorHandler,
    prefix: '/api/v1',
    // 默认请求是否带上cookie
    credentials: 'include',
    headers: {
        'Access-Control-Allow-Credentials': 'true',
    },
    // 默认用form-data提交
    // requestType: 'form',
    requestType: 'json',
});

export default request;
