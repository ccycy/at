// pages/unit/unit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      able : 0, //弹窗是否可见
      unitList : [ // 单元和课时的数据
          {
              unitId : 1,
              unitName : '第一单元',
              hourList : [
                  {
                      hourId : 101,
                      hourName : '第一课时'
                  },{
                      hourId : 102,
                      hourName: '第二课时'
                  }, {
                      hourId: 103,
                      hourName: '第三课时'
                  }
              ]
          },{
              unitId : 2,
              unitName: '第二单元',
              hourList: [
                  {
                      hourId: 201,
                      hourName: '第一课时'
                  }, {
                      hourId: 202,
                      hourName: '第二课时'
                  }, {
                      hourId: 203,
                      hourName: '第三课时'
                  }
              ]
          }, {
              unitId: 3,
              unitName: '第三单元',
              hourList: [
                  {
                      hourId: 301,
                      hourName: '第一课时'
                  }, {
                      hourId: 302,
                      hourName: '第二课时'
                  }, {
                      hourId: 303,
                      hourName: '第三课时'
                  }, {
                      hourId: 304,
                      hourName: '第四课时'
                  }
              ]
          }
      ],
      HOURID : 0 , //课时的id,
      imgRrc : "" //最顶部年级图片的src
  },

  /*
  *  点击课时，弹出弹窗
  */
    tan : function(event){
        // a 是课时的id
        var a = event.currentTarget.dataset.hourid;
        this.setData({
            able : 1,
            HOURID : a
        });
    },

  /*
  * 点击遮罩层，弹窗关闭
  */
  myClose : function(){
      this.setData({
          able: 0
      });
  },

 /*
  *     全部听写
  */
    allWord : function(){
        var a = this.data.HOURID;
        wx.navigateTo({
            url: '../listening/listening?hour=' + a +'&way=1'
        })
    },
 /*
  *     随机听写
  */
    partWord: function () {
        var a = this.data.HOURID;
        wx.navigateTo({
            url: '../listening/listening?hour=' + a + '&way=2'
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var a = options.Unit;//获取在grade页面设置下的年级参数 
      var b = ( parseInt(a/2) == a/2 )?(a/2):((parseInt(a)+1)/2); //参数不是年级
      var c = "../../img/Grade/Grade" + b + ".jpg";
      this.setData({
          imgSrc : c
      })
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