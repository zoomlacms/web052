const app = getApp()

Page({
    data: {
         header_data:{
            name:'资讯浏览',
            info:'News Information'
        },
        show:'https://www.z01.com/UploadFiles/nopic.svg',
        page:1,
        pagesize:10,
        list:[],
        load_more:0
    },
    onLoad() {
        this.getdata(this.data.page,this.data.pagesize)
         this.setData({
            load_more:1
        })
    },
     getdata(page,pagesize){
       this.setData({
            page:page
        })
        const that = this;
        swan.request({
            url: app.globalData.urlapi + 'content_list',
             method:'POST',
             header: { 'content-type': 'application/x-www-form-urlencoded' },
             dataType: 'json', 
             data:{
                pnid : 168,
                cpage :page,
                psize :pagesize
             },
            success(e){
                var obj = that.data.list;
                var result =JSON.parse(e.data.result);
                if(result.length == 0){
                    that.setData({
                        load_more:2
                    })
                    return;
                }
                for(var s of result){
                    obj.push(s)
                    that.setData({
                    list:obj,
                    load_more:0
                    })
                }
            }
        });
    },
    go_newdetail(e){
        console.log(e.currentTarget.dataset)
        swan.navigateTo({
            url: '../newsdetail/newsdetail?id='+e.currentTarget.dataset.id
        });
    },
     // 页面的事件处理函数 – 监听用户下拉动作
    onPullDownRefresh(res) {
        //刷新页面
        console.log('刷新页面',res)
        this.setData({
            page:1,
            list:[],
            load_more:1
        },function(){
            swan.stopPullDownRefresh()
        })
        this.getdata(this.data.page,this.data.pagesize)
    },

    // 页面的事件处理函数 – 上拉触底事件的处理函数
    onReachBottom(res) {
        var page = this.data.page + 1;
        this.getdata(page,this.data.pagesize)
        this.setData({
            load_more:1
        })
    },
})
