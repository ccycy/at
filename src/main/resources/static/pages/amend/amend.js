// pages/amend/amend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      errorList: [
          {
              id: 1,
              WORD: "可怕"
          }, {
              id: 2,
              WORD: "震惊"
          }, {
              id: 3,
              WORD: "夭寿"
          }, {
              id: 4,
              WORD: "震惊1"
          }, {
              id: 5,
              WORD: "震惊2"
          }, {
              id: 6,
              WORD: "震惊3"
          }, {
              id: 7,
              WORD: "震惊4"
          }, {
              id: 8,
              WORD: "震惊5"
          }, {
              id: 9,
              WORD: "震惊6"
          }, {
              id: 10,
              WORD: "震惊7"
          }, {
              id: 11,
              WORD: "震惊8"
          }
      ]
  },
  /**
   *   点击后退按钮，跳到主页面
   */
  backOff : function(){
      wx.switchTab({
          url: '../index/index'
      });
  },

  /*
  *     点击错词听写按钮
  */
    changeA : function(){
        wx.navigateTo({
            url: '../listening/listening?way=3'
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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