import axios from 'axios'

const BASE_URL = 'https://gank.io/api/'

const fetch = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

// 请求拦截
fetch.interceptors.request.use(function (config) {
    // do something ...
    return config
}, function (err) {
    return Promise.reject(err)
})

// 响应拦截
fetch.interceptors.response.use(function (response) {
    // do something ...
    return response.data
}, function (err) {
    return Promise.reject(err)
})

export default fetch
