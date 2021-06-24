// pages/routineexam/routineexam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spot:[],
    chekbox:[],
    checkshow:true,
    checkshow1:true,
    checked:false,
    hostname:''
  },
  checkboxChange:function(e){
    let checkstatus = e.detail.value
    let that = this
    console.log(checkstatus)
    this.setData({
      checkbox:e.detail.value
    })
    if(checkstatus[0] !=  "质量不合格" & checkstatus.length != 0 ){
      this.setData({
        checkshow:false
      })
    }else if(checkstatus[0] ==  "质量不合格" & checkstatus.length != 0){
      this.setData({
        checkshow1:false
      })
    }
    else if(checkstatus.length == 0){
      that.setData({
        checkshow:true,
        checkshow1:true
      })
    }
    console.log(this.data.checkshow)
  },

  certainbtn:function(e){
    console.log(e)
    console.log(this.data.checkbox)
    let id = e.currentTarget.dataset.index;
    let that = this;
    let spot = that.data.spot;

    let sopt_id = spot[id].id;
    let checkbox = this.data.checkbox;
    if(checkbox[0] != '质量不合格'){
    wx.showModal({
      title:'常规检查合格确认框',
      content:'确定' + spot[id].weldSpotNumber + '质量合格？',
      success:function(res){
        if(res.confirm){
          wx.request({
            url: 'https://www.zqzqsmile.xyz/checking_WP/login',
            data:{
              code:'enter',
              ordinarycheck:checkbox,
              id:sopt_id
            },
            method:'POST',
          header: {
           'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            if(res.data.status = true){
              wx.showToast({
                title: '常规检验完成',
                icon: 'none',
                duration: 2000
              })
              spot.splice(id,1)
              that.setData({
                spot:spot,
                checkbox:[],
                checked:false,
                checkshow:true,
                checkshow1:true,
              })
            }else{
              wx.showToast({
                title: '系统异常',
                icon: 'none',
                duration: 2000
              })
            }
          }
          })
        }
      }
    })}else{
      wx.showModal({
        title:'常规检查合格确认框',
        content:'确定' + spot[id].weldSpotNumber + '质量不合格？',
        success:function(res){
          if(res.confirm){
            wx.request({
              url: 'https://www.zqzqsmile.xyz/checking_WP/login',
              data:{
                code:'enter',
                ordinarycheck:checkbox,
                id:sopt_id
              },
              method:'POST',
            header: {
             'content-type': 'application/json' // 默认值
            },
            success: function(res) {
              if(res.data.status = true){
                wx.showToast({
                  title: '常规检验完成',
                  icon: 'none',
                  duration: 2000
                })
                spot.splice(id,1)
                that.setData({
                  spot:spot,
                  checkbox:[],
                  checked:false,
                  checkshow:true,
                  checkshow1:true,
                })
              }else{
                wx.showToast({
                  title: '系统异常',
                  icon: 'none',
                  duration: 2000
                })
              }
            }
            })
          }
        }
      })}

  },


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
    console.log(hostname)
    wx.request({
      url: 'https://www.zqzqsmile.xyz/checking_WP/login',
      data:{
        code:'parameter'
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)
        let spot1 = JSON.parse(res.data)
        let spot = that.data.spot;
        for(var i=0;i<spot1.length;i++){ 
        if(spot1[i].odinaryCheckBody == that.data.hostname){ 
        spot.push(spot1[i])
      }
    }
      if(spot.length > 0){
        that.setData({
          spot:spot
        })
      }else{
        wx.showToast({
          title: '没有等待常规检查的焊点',
          icon: 'none',
          duration: 2000
        })
      }
      console.log(that.data.spot)
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