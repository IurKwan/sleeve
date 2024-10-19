/**
 * @作者 7七月
 * @创建时间 2019-10-21 17:45
 */
import {Http} from "../utils/http";

class Spu {

    static isNoSpec(spu) {
        return spu.skuList.length === 1 && spu.skuList[0].specs.length === 0;
    }

    static getDetail(id) {
        return Http.request({
            url: `spu/id/${id}/detail`
        });
    }

}

export {
    Spu
}
