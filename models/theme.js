import {Http} from "../utils/http";

class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    static forYou = 't-6'

    // 扩展性
    async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        const result = await Http.request({
            url: `theme/by/names`,
            data: {
                names
            }
        })
        this.themes = result.data
    }

    getHomeLocationA() {
        return this.themes.find(t => t.name === Theme.locationA)
    }

    getHomeLocationE() {
        return this.themes.find(t => t.name === Theme.locationE)
    }

    getHomeLocationF() {
        return this.themes.find(t => t.name === Theme.locationF)
    }

    getHomeLocationH() {
        return this.themes.find(t => t.name === Theme.locationH)
    }

    static getHomeLocationESpu() {
        return Theme.getThemeSpuByName(Theme.locationE)
    }


    static getThemeSpuByName(name) {
        const result = Http.request({
            url: `theme/name/${name}/with_spu`
        })
        return result.data
    }

    static getForYou() {
        return Http.request({
            url: `theme/name/${this.forYou}/with_spu`
        })
    }

}

export {
    Theme
}
