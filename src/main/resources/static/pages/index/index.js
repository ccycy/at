// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
      //轮播图的数据
      swiList : [{
          id : 1,
          img: "https://up.enterdesk.com/edpic/36/d4/3c/36d43c896b8f9a9fd80ffd4c1fc26c14.jpg"
      },{
          id : 2,
              img: "https://up.enterdesk.com/edpic/7c/e2/8a/7ce28add06be92ae52993a0fef322c20.jpg"
      },{
          id : 3,
          img : "https://up.enterdesk.com/edpic/db/73/33/db7333fb55db2248a6a88b8cc121a067.jpg"
      }],

      //科目的数据
      subList:[{
          id : 1,
          name : "语文",
          img: "http://s16.sinaimg.cn/bmiddle/9a2dd224xc36d14c780df&690",
          edi : "人教版"
      },{
              id: 2,
              name: "英语",
              img: "http://imgsrc.baidu.com/image/c0%3Dpixel_huitu%2C0%2C0%2C294%2C40/sign=f4c34f9dafc27d1eb12b338472adc802/5bafa40f4bfbfbed8b98cb4673f0f736aec31fc1.jpg",
              edi: "人教版"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //用户登录
      wx.checkSession({
          fail : function(){
              wx.login({
                  success : function(res){
                    if(res.code){
                        /*wx.request({
                            url: '',
                            data : {
                                code : res.code
                            }
                        });*/
                    }
                  }
              });
          }
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})