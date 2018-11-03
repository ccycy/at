// pages/grade/grade.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      graList : [{
          id : 1,
          img: "https://img.alicdn.com/imgextra/i3/1699775349/TB225mKd8fM8KJjSZFhXXcRyFXa_!!1699775349.jpg",
          year : "一年级上册",
          deta: "10篇“识字”、14篇课文、8组“语文园地”"
      },{
              id: 2,
              img: "https://img.alicdn.com/imgextra/i1/1699775349/TB2sbvYk3vD8KJjy0FlXXagBFXa_!!1699775349.jpg",
              year: "一年级下册",
              deta: "10篇“识字”、14篇课文、8组“语文园地”"
      },{
              id: 3,
              img: "https://img.alicdn.com/imgextra/i2/1699775349/TB2bX16k8DH8KJjSszcXXbDTFXa_!!1699775349.jpg",
              year: "二年级上册",
              deta: "10篇“识字”、14篇课文、8组“语文园地”"
      },{
              id: 4,
              img: "https://img.alicdn.com/imgextra/i2/1699775349/TB26eaYeAfb_uJkSne1XXbE4XXa_!!1699775349.jpg",
              year: "二年级下册",
              deta: "10篇“识字”、14篇课文、8组“语文园地”"
          }, {
              id: 5,
              img: "https://img.alicdn.com/imgextra/i4/1699775349/TB2tJRqn67nBKNjSZLeXXbxCFXa_!!1699775349.jpg",
              year: "三年级上册",
              deta: "10篇“识字”、14篇课文、8组“语文园地”"
          }, {
              id: 6,
              img: "https://img.alicdn.com/imgextra/i3/1699775349/TB2_75eueuSBuNjSsplXXbe8pXa_!!1699775349.jpg",
              year: "三年级下册",
              deta: "10篇“识字”、14篇课文、8组“语文园地”"
          }, {
              id: 7,
              img: "https://img.alicdn.com/imgextra/i3/1699775349/TB2CM86dkfb_uJkHFqDXXXVIVXa_!!1699775349.jpg",
              year: "四年级上册",
              deta: "10篇“识字”、14篇课文、8组“语文园地”"
          }, {
              id: 8,
              img: "https://img.alicdn.com/imgextra/i1/1699775349/TB26bacdXGWBuNjy0FbXXb4sXXa_!!1699775349.jpg",
              year: "四年级下册",
              deta: "10篇“识字”、14篇课文、8组“语文园地”"
          }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //这里有个Gra来确定是哪个年级
      //console.log(options);
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