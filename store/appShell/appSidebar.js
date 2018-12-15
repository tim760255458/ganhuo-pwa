/**
 * @file appShell/appSidebar module
 * @author lavas
 */

export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';

export const state = () => {
    return {
        show: false, // 是否显示sidebar

        // 头部条的相关配置
        title: {
            imageLeft: '',
            altLeft: '',
            iconLeft: 'home',
            text: '干货',
            imageRight: '',
            altRight: '',
            iconRight: ''
        },

        // user: {
        //     name: 'Lavas',
        //     email: 'lavas@baidu.com',
        //     location: 'Shanghai'
        // },

        // 分块组
        blocks: [
            {
                // 子列表1
                sublistTitle: '技术干货',
                list: [
                    {
                        text: 'App',
                        icon: 'apps',
                        route: '/type/App'
                    },
                    {
                        text: 'Android',
                        icon: 'android',
                        route: '/type/Android'
                    },
                    {
                        text: 'iOS',
                        icon: 'phone_iphone',
                        route: '/type/iOS'
                    },
                    {
                        text: '前端',
                        icon: 'tab',
                        route: '/type/前端'
                    },
                    {
                        text: '拓展资源',
                        // icon: 'home',
                        route: '/type/拓展资源'
                    },
                    {
                        text: '瞎推荐',
                        // icon: 'home',
                        route: '/type/瞎推荐'
                    },
                ]
            },
            // {
            //     // 子列表1
            //     sublistTitle: '闲读',
            //     list: [
            //         {
            //             text: '好奇心日报',
            //             image: 'http://ww2.sinaimg.cn/large/610dc034gw1f9sg2pq9ufj202s02s0sj.jpg',
            //             route: '/xiandu/qdaily'
            //         },
            //         {
            //             text: '知乎日报',
            //             image: 'http://ww4.sinaimg.cn/large/610dc034jw1f9sfzr2gmnj204v04va9y.jpg',
            //             route: '/xiandu/zhihu'
            //         },
            //         {
            //             text: 'Vice',
            //             image: 'http://ww1.sinaimg.cn/large/0066P23Wjw1f7eg7480luj300g00g0lt.jpg',
            //             route: '/xiandu/vice'
            //         },
            //         {
            //             text: '爱范儿',
            //             image: 'http://ww3.sinaimg.cn/large/0066P23Wjw1f9rylijz6rj3030030gle.jpg',
            //             route: '/xiandu/ifanr'
            //         },
            //         {
            //             text: 'Engadget 中文版',
            //             image: 'http://ww1.sinaimg.cn/large/0066P23Wjw1f9rym3y697j30300300sj.jpg',
            //             route: '/xiandu/engadget'
            //         },
            //         {
            //             text: 'iPc.me',
            //             image: 'http://ww1.sinaimg.cn/large/610dc034gw1f9sgtc7v1mj204602uq2s.jpg',
            //             route: '/xiandu/ipc'
            //         },
            //         {
            //             text: 'TechCrunch 中国',
            //             image: 'http://ww4.sinaimg.cn/large/0066P23Wjw1f9ryq134rfj3030030a9u.jpg',
            //             route: '/xiandu/techcrunch'
            //         },
            //         {
            //             text: '湾区日报',
            //             image: 'http://ww3.sinaimg.cn/large/0066P23Wjw1f9rzbqacpyj3030030742.jpg',
            //             route: '/xiandu/wanqu'
            //         },
            //         {
            //             text: 'Solidot',
            //             image: 'http://ww1.sinaimg.cn/large/610dc034jw1f9u8eekc4lj2074074jri.jpg',
            //             route: '/xiandu/solidot'
            //         },
            //         {
            //             text: '月光博客',
            //             image: 'http://ww2.sinaimg.cn/large/0066P23Wjw1f9u8ddodymj3020020wea.jpg',
            //             route: '/xiandu/williamlong'
            //         },
            //         {
            //             text: '理想生活实验室',
            //             image: 'http://ww4.sinaimg.cn/large/610dc034gw1f9usojtqdfj21kw1kwn5e.jpg',
            //             route: '/xiandu/toodaylab'
            //         }
            //     ]
            // },
            {
                sublistTitle: '资讯',
                list: [
                    {
                        text: '闲读',
                        icon: 'book',
                        route: '/xiandu'
                    }
                ]
            },
            {
                sublistTitle: '技术之外',
                list: [
                    {
                        text: '休息视频',
                        icon: 'video_library',
                        route: '/type/休息视频'
                    },
                    {
                        text: '福利',
                        icon: 'image',
                        route: '/type/福利'
                    },
                ]
            }
        ]
    };
};

export const mutations = {
    [SET_SIDEBAR_VISIBILITY](state, sidebarVisibility) {
        state.show = sidebarVisibility;
    }
};

export const actions = {

    /**
     * 展示侧边栏
     *
     * @param {Function} commit commit
     */
    showSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, true);
    },

    /**
     * 隐藏侧边栏
     *
     * @param {Function} commit commit
     */
    hideSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, false);
    }
};
