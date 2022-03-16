import axios from 'axios';

// 保存环境变量
const isPrd = process.env.NODE_ENV === 'production';

// 区分开发环境还是生产环境
const basciUrl = isPrd ? '/app/mock/253497/' : '/app/mock/253497/';

//设置axios基础路径

const service = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/253497/'
})

export default service