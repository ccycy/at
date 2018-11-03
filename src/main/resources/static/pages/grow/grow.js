// pages/grow/grow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      headImg : '../../img/icon/userhead.svg',
      haveRecord : 1, //有错词记录
      noRecord : 0 ,//没有错词记录
      noRecordT: "你的听写百分百正确哇，快去听写其他的课程吧" ,//没有错词记录，图片下面的那句话
      errorList : [ //记录列表数据
          {
              id : 1,
              errorName : "人教版语文五年级第一单元第一课时",
              errorNum : "三"
          }, {
              id: 2,
              errorName: "人教版英语五年级第六单元第四课时",
              errorNum: "四"
          }, {
              id: 3,
              errorName: "自主听写一",
              errorNum: "六"
          }
      ],
      errorLitmit : 3, //每一页最多容纳三条数据
      errorPages : 0,//第n页
      haveError : 1 ,//判断数据库是否还有错词数据没加载出来
      index1 : 0 ,//picker1 数组的下标
      pickerList1 : [ //picke1r的数据
          {
              id : 0,
              name : "人教版语文五年级"
          }, {
              id: 1,
              name: "人教版英语五年级"
          },
          {
              id: 2,
              name: "人教版语文六年级"
          },
          {
              id: 3,
              name: "人教版英语年级"
          },
          {
              id: 4,
              name: "人教版数学五年级"
          }
      ],
      index2: 0,//picker2 数组的下标
      pickerList2: [ //picker2的数据
          {
              id: 0,
              name: "人教版语文五年级"
          }, {
              id: 1,
              name: "人教版英语五年级"
          },
          {
              id: 2,
              name: "人教版语文六年级"
          },
          {
              id: 3,
              name: "人教版英语年级"
          },
          {
              id: 4,
              name: "人教版数学五年级"
          }
      ]
  }, 
  /**
   *  获取用户信息
   */
    getUserInfo1 : function(e){
        var a = e.detail.userInfo.avatarUrl;
        this.setData({
            headImg : a
        });
        
    },


  /**
   *  重听 函数
   */
  listen1 : function(e){
      var a = e.currentTarget.dataset.id;
      wx.navigateTo({
          url: '../listening/listening'
      });
  },

  /**
   *  错词重听 函数
   */
    listen2: function (e) {
        var a = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../listening/listening'
        });
    },

  /**
   *     上一页
   */
    toLast : function(){
        wx.showToast({
            title: "这已经是第一页了",
            icon: "none"
        });
        /*if(this.data.errorPages == 1){
            wx.showToast({
                title : "这已经是第一页了",
                icon : "none"
            });
        }else{
            var a = this.data.errorPages;
            a--;
            var that =this;
            wx.request({
                url: '',
                data : {
                    errorPages : a
                },
                success : function(res){
                    var newList = res.data;
                    that.setData({
                        errorPages : a,
                        errorList : newList
                    });
                }
            });
        }*/
    },
  /**
   *     下一页
   */
  toNext : function(){
      wx.showToast({
          title: '这已经最后一页了',
          icon: "none"
      });
      /*if(this.data.haveError == 0){
          wx.showToast({
              title: '这已经最后一页了',
              icon : "none"
          });
      } else{
          var a = this.data.errorPages;
          a++;
          var that = this;
          wx.request({
              url: '',
              data : {
                  errorPages : a
              },
              success : function(res){
                  var newList = res.data;
                  var count = parseInt(res.header['X-Total-Count']);
                  // 2.4 用于判断比较是否还有更多数据 ??数据的总量？？
                  var count1 = a * that.data.errorLitmit;
                  var b = (count1 > count || count1 == count)?0:1;
                  that.setData({
                    errorList : newList,
                    errorPages : a,
                    havrError : b
                  });

              }
          })
      }*/
  },

/**
   *     单元复习的函数
   */
  pickerChange1 : function(e){
      var a = e.detail.value;
      var b = this.data.pickerList1[a].id;
      wx.navigateTo({
          url: '../unit/unit',
      });
  },

    /**
     *     单元错词复习的函数
     */
    pickerChange2: function (e) {
        var a = e.detail.value;
        var b = this.data.pickerList2[a].id;
        wx.navigateTo({
            url: '../unit/unit',
        });
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.getSetting({
          success : function(res){
              if(!res.authSetting['scope.userInfo']){
                  wx.showModal({
                      title: '提示！',
                      content: '亲，我们未获取到你的用户信息，这会影响到你的体验，点击头像即可授权',
                      cancelText : "残忍拒绝",
                      confirmText : "去授权"
                  })
              } else{
                  wx.getUserInfo({
                      success : function(res){
                        var a = res.userInfo.avatarUrl;
                        that.setData({
                            headImg : a
                        })
                      }
                  })    
              }
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