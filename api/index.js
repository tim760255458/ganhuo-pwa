import fetch from '../utils/fetch'

export const today = () => // 获取今日文章数据
    fetch({
        url: '/today',
        method: 'get'
    })

export const typeData = (params = {}) => { // 获取技术文章数据
    const { type, pageSize, pageNumber } = params
    return fetch({
        url: `/data/${type}/${pageSize}/${pageNumber}`,
        method: 'get'
    })
}

export const xianduData = (params = {}) => { // 获取闲读数据
    const { id, count, page } = params
    return fetch({
        url: `/xiandu/data/id/${id}/count/${count}/page/${page}`,
        method: 'get'
    })
}

export const xianduTopLevel = () => // 获取闲读主分类
    fetch({
        url: '/xiandu/categories',
        method: 'get'
    })

export const xianduChildLevel = (params = {}) => { // 获取闲读主分类下的子分类
    const { tag } = params
    return fetch({
        url: `/xiandu/category/${tag}`
    })
}
