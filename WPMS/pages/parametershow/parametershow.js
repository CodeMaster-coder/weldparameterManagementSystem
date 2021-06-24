// pages/parametershow/parametershow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_name:'',
    subArea_name:'',
    gun_name: '',
    carType_name:'',
    spotparam:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let area_name = options.area_name;
    let subArea_name = options.subArea_name;
    let gun_name = options.gun_name;
    let carType_name = options.carType_name;
    this.setData({
      gun_name:gun_name,
      carType_name:carType_name
    })
    wx.request({
      url: 'https://www.zqzqsmile.xyz/query_WP/login',
        data:{
          code:'paramshow',
          gun:gun_name,
          carType:carType_name
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res){
          var obj1 = res.data;
          let obj = JSON.parse(obj1);
          console.log(obj)
          that.setData({
            spotparam:obj
          })
        }
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