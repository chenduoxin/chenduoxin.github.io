import Cookie from "js-cookie"
export default {
    //定义token
    state: {
        token: ""
    },
    //改变token状态
    mutations: {
        //登录成功添加Token
        setToken(state, val) {
            state.token = val
            Cookie.set('token', val)
        },
        //退出登录清除token
        clearToken(state) {
            state.token = ''
            Cookie.remove('token')
        },
        //刷新页面防止state数据丢失，重新获取token
        getToken(state) {
            state.token = state.token || Cookie.get('token')
        }
    }
}