import {Http} from "../utils/http";

class Category {

    static async getHomeLocationC() {
        const request = await Http.request({
            url:`category/grid/all`
        })
        return request.data
    }
}

export {
    Category
}
