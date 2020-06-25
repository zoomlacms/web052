const app = getApp()

Page({
    data: {
    },
    onLoad() {
        // 监听页面加载的生命周期函数
    },
  formSubmit:function(e){
    var form=e.detail.value;
    if(form.PubContent==""){ swan.showModal({title: '不可为空',showCancel: false}); return false;}
    swan.request({
            url: app.globalData.urlapi + 'pub_add',
             method:'POST',
             header: { 'content-type': 'application/x-www-form-urlencoded' },
             dataType: 'json', 
             data:{
                pubid : 8,
                model:JSON.stringify(form)
             },
            success(e){
            if(e.statusCode == 200){
             swan.showModal({title: '提交成功',showCancel: false});
            }else{
                console.error(e.data.retmsg);
            }
            }
        });
  }
})
