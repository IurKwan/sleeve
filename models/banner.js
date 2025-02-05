/**
 * @作者 7七月
 * @创建时间 2019-09-23 04:14
 */
import {Http} from "../utils/http";
import {BannerItemType} from "../core/enum";

class Banner {
    static locationB = 'b-1'
    static locationG = 'b-2'

    static async getHomeLocationB() {
        const request = await Http.request({
            url: `banner/name/${Banner.locationB}`
        })
        return request.data
    }

    static async getHomeLocationG() {
        const result = await Http.request({
            url: `banner/name/${Banner.locationG}`
        })
        return result.data
    }

    static gotoTarget(type, keyword) {
        console.log("type=" + type)
        switch (type) {
            case BannerItemType.SPU:
                wx.navigateTo({
                    url: `/pages/detail/detail?pid=${keyword}`
                })
                break
            case BannerItemType.THEME:
                wx.navigateTo({
                    url: `/pages/theme/theme?tname=${keyword}`
                })
                break
            case BannerItemType.SPU_LIST:
                wx.navigateTo({
                    url: `/pages/theme-spu-list/theme-spu-list?tname=${keyword}`
                })
                break
        }
    }
}

export {
    Banner
}
