// pages/mainpage/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    highauth:false,
    authority:''
  },
skip(){
  wx.navigateTo({
    url: '/pages/weldparameter/weldparameter'
  })
},
skip1(){
  wx.navigateTo({
    url: '/pages/query/query'
  })
},
skip2(){
  wx.navigateTo({
    url: '/pages/dressquery/dressquery'
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
    let userinfo1 = wx.getStorageSync('userinfo');
    let userinfo2 = userinfo1[0];
    if(userinfo2){
    let authority1 = parseInt(userinfo2.authority)
    this.setData({
      authority:authority1,
    })
  }

    if(this.data.useinfo != ''& this.data.authority > 2){
      this.setData({
        highauth:true,
      })
    }else{
      this.setData({
        highauth:false,
      })
    }
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