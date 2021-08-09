// pages/retreat/retreat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spot:[],
    hostname:''
  },
  certainbtn:function(e){
    let id = e.currentTarget.dataset.index;
    let that = this;
    let spot = that.data.spot;
    let sopt_id = spot[id].id;
    wx.showModal({
      title:'不合格焊点再处理确认框',
      content:'确定焊点' + spot[id].weldSpotNumber + '已再次调整过参数？',
      success:function(res){
        if(res.confirm){
          wx.request({
            url: 'https://www.zqzqsmile.xyz/rechecking_WP/login',
            data:{
              code:'rechecking_confirm',
              retreatbody:that.data.hostname,
              id:sopt_id,
              retreat:'yes'
            },
            method:'POST',
          header: {
           'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            if(res.data.status = true){
            wx.showToast({
              title: '不合格焊点再处理完成',
              icon: 'none',
              duration: 2000
            })
            spot.splice(id,1)
            that.setData({
              spot:spot,
            })}else{
              wx.showToast({
                title: '系统异常',
                icon: 'none',
                duration: 2000
              })
            }
          }
        })}}
  })},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let logonUserInfo1 = wx.getStorageSync('userinfo');
    let logonUserInfo = logonUserInfo1[0]
    
    let hostname = logonUserInfo.employeeName

    this.setData({

      hostname:hostname
    })
    wx.request({
      url: 'https://www.zqzqsmile.xyz/rechecking_WP/login',
      data:{
        code:'rechecking'
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)
        let spot = JSON.parse(res.data)
        console.log(spot.length)
        if(spot.length == 0){
          wx.showToast({
            title: '没有等待处理的不合格焊点',
            icon: 'none',
            duration: 2000
          })
        }else{
        that.setData({
          spot:spot
        })}
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