// pages/home/home.js

import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";
import {SpuPaging} from "../../models/spu-paging";
import {CouponCenterType} from "../../core/enum";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        themeE: null,
        bannerB: null,
        grid: [],
        activityD: null,
        spuPaging: null,
        bannerG: null,
        loadingType: 'loading'
    },

    async onLoad() {
        await this.initAllData()
        await this.initBottomSpuList()
    },

    async initBottomSpuList() {
        const paging = SpuPaging.getLatestPaging()
        this.data.spuPaging = paging
        const data = await paging.getMoreData()

        if (!data) {
            return
        }
        wx.lin.renderWaterFlow(data.items)
    },

    async initAllData() {
        const theme = new Theme()
        await theme.getThemes()

        const themeA = theme.getHomeLocationA()

        const themeE = theme.getHomeLocationE()

        let themeESpu = []

        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu()
            if (data) {
                themeESpu = data.spuList.slice(0, 8)
            }
        }

        const themeF = theme.getHomeLocationF()

        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()

        const bannerG = await Banner.getHomeLocationG()

        const themeH = theme.getHomeLocationH()

        this.setData({
            themeA,
            bannerB,
            grid,
            activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
        })
    },

    onGoToCoupons(event) {
        const name = event.currentTarget.dataset.aname
        wx.navigateTo({
            url: `/pages/coupon/coupon?name=${name}&type=${CouponCenterType.ACTIVITY}`
        })
    },

    onGoToTheme(event) {
        const tName = event.currentTarget.dataset.tname
        wx.navigateTo({
            url: `/pages/theme/theme?tname=${tName}`
        })
    },

    onGoToBanner(event) {
        const keyword = event.currentTarget.dataset.keyword
        const type = event.currentTarget.dataset.type
        Banner.gotoTarget(type, keyword)
    },

    onReachBottom: async function () {
        const data = await this.data.spuPaging.getMoreData()
        if (!data) {
            return
        }
        wx.lin.renderWaterFlow(data.items)

        if (!data.moreData) {
            this.setData({
                loadingType: 'end'
            })
        }
    },

    onPullDownRefresh: function () {

    },


    onShareAppMessage: function () {

    }
})


