import service from "../utils/request";

// 登录接口

export default class Server {
    static async login(params) {
        return await service.get(`/product`,{params})
    }
}