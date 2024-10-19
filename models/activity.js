/**
 * @作者 7七月
 * @创建时间 2019-09-28 01:03
 */
import {Http} from "../utils/http";
import {showToast} from "../utils/ui";

class Activity {
    static locationD = 'a-2'

    static async getHomeLocationD() {
        const request = await Http.request({
            url: `activity/name/${Activity.locationD}`
        })
        return request.data
    }

    static async getActivityWithCoupon(activityName) {
        return Http.request({
            url: `activity/name/${activityName}/with_coupon`
        })
    }
}

export {
    Activity
}
