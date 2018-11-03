

//time 和 time1 用来计数时间，用于播放停止时图片的选装度数
var time = 0;
setInterval(function(){
    time += 0.01;
},10)
var time1 = 0;


Page({

  /**
   * 页面的初始数据
   */
  data: {
      showImg : 1,   //显示图片
      showWords : 0, //显示词语
      eyeImg: "../../img/icon/eye-close.svg",  //睁眼闭眼
      showImgSrc: "https://img.alicdn.com/imgextra/i3/1699775349/TB225mKd8fM8KJjSZFhXXcRyFXa_!!1699775349.jpg", //转圈圈图片的src
      wordsList : [
          {
              id : 1,
              WORD : "可怕"
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
      ],
      startImg: "../../img/icon/play.svg",
      runCircle: "", //给图片添加旋转动画css
      modal1 : 0 ,//更多按钮  的 if渲染
      modal1show: 'modal-content modal-show'//给modal1的出现和结束附加一个动画
  },

  /*
  *   点击关闭按钮，退出到主页面
  */
  singOut : function(){
      wx.switchTab({
          url: '../index/index'
      });
  },
  /*
   *   点击眼睛，眼睛睁/闭，图片/词转换
   */
    changeEyes: function () {
        var a =this.data.showImg;
        if (a == 1){
            this.setData({
                showImg : 0,
                showWords : 1,
                eyeImg: "../../img/icon/eye-open.svg"
            });
        } else if(a == 0){
            this.setData({
                showImg: 1,
                showWords : 0,
                eyeImg: "../../img/icon/eye-close.svg"
            });
        }
    },

    /*
   *   点击“更多”，弹出窗口
   */
    changeMore : function(){
        this.setData({
            modal1: 1
        });
    },
    /*
   *   点击遮罩层，隐藏窗口
   */
    modalChange0: function () {
        this.setData({
            modal1show: 'modal-content modal-hide'
        });
        var that =this;
        setTimeout(function(){
            that.setData({
                modal1 : 0,
                modal1show: 'modal-content modal-show'
            });
        },400)
    },

    /*
    *   三个滑块的四个函数
    */
    noModalChange : function(){
        console.log("没有事情发生");
    },

    modalChange1 : function(e){
        var a = e.detail.value; //a为滑块的值
    },

    modalChange2: function (e) {
        var a = e.detail.value; //a为滑块的值
    },

    modalChange3: function (e) {
        var a = e.detail.value; //a为滑块的值
    },
    /*
   *   播放/暂停按钮 
   */
    changeMusic : function(){
        var a = this.data.startImg;
        if (a == "../../img/icon/pause.svg"){
            this.audioCtx.pause();
            time1 =time;
            var ro = time1*90;
            var b = "transform: rotate(" + ro + "deg);"
            this.setData({
                startImg: "../../img/icon/play.svg",
                runCircle : b
            });
        } else{
            time = 0;
            this.audioCtx.play();
            this.setData({
                startImg: "../../img/icon/pause.svg",
                runCircle : "animation: spin 4s linear infinite"
            });
        }
    },

    /*
   *   点击按钮修改听写
   */
    changeA : function(){
        wx.navigateTo({
            url: '../amend/amend'
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
      var a = options.hour;
      var b = options.way;
      // b为1/2时，页面是从课时页面跳转来  3是从错词再次听写跳转来 4是自主听写跳转来
      if(b == 1 || b == 2){
          var c = a % 100; //c为课时
          var d = parseInt(a / 100); //d为单元
          var f = 0;//f为单元+课时
          switch (d) {
              case 1: f = "第一单元"; break;
              case 2: f = "第二单元"; break;
              case 3: f = "第三单元"; break;
              case 4: f = "第四单元"; break;
              case 5: f = "第五单元"; break;
          };
          switch (c) {
              case 1: f += "第一课时"; break;
              case 2: f += "第二课时"; break;
              case 3: f += "第三课时"; break;
              case 4: f += "第四课时"; break;
              case 5: f += "第五课时"; break;
          };
      } else if(b == 3){
          this.setData({
              showImgSrc: "http://n.sinaimg.cn/sinacn/w377h332/20180126/c9e3-fyqzcxf8432252.jpg"
          });
      } else if(b == 4){
          this.setData({
              showImgSrc: "http://ww2.sinaimg.cn/orj480/006n5xY1gw1f2dziirzcej308m08bdfy.jpg"
          });
      }

      //audio函数
      this.audioCtx = wx.createAudioContext('audioId');
      
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
});