const app = getApp();
Page({

    // 页面的初始数据
    data: {
        title: '',
        createTime: '',
        content: ''
    },

    // 页面的生命周期函数 – 监听页面加载
    onLoad(res) {
        const that = this;
        swan.request({
            url: app.globalData.urlapi + 'content_get',
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            dataType: 'json',
            data: {
                id: res.id
            },
            success(e) {
                var result = JSON.parse(e.data.result);
                that.setData({
                    title: result[0].title,
                    createTime: result[0].createTime,
                    content: result[0].content
                })
            }
        });
    },

    // 页面的生命周期函数 – 监听页面初次渲染完成
    onReady(res) {

    },

    // 页面的生命周期函数 – 监听页面显示
    onShow(res) {

    },

    // 页面的生命周期函数 – 监听页面隐藏
    onHide(res) {

    },

    // 页面的生命周期函数 – 监听页面卸载
    onUnload(res) {

    },

    // 页面的生命周期函数 – 监听页面重启，单击重启按钮时触发
    onForceReLaunch(res) {

    },

    // 页面的事件处理函数 – 监听用户下拉动作
    onPullDownRefresh(res) {

    },

    // 页面的事件处理函数 – 上拉触底事件的处理函数
    onReachBottom(res) {

    },

    // 页面的事件处理函数 – 用户点击右上角转发
    onShareAppMessage(res) {

    },

    // 页面的事件处理函数 – 页面滚动触发事件的处理函数
    onPageScroll(res) {

    },

    // 页面的事件处理函数 – 当前是 tab 页时，点击 tab 时触发
    onTabItemTap(res) {

    }
});