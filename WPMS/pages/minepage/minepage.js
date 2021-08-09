// pages/minepage/minepage.js
const app = getApp()
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:'',
    nickName:'',
    avatarUrl:'',
    employeeId:'',
    employeeName:'',
    authority:'',
    login:true,
    lowauth:false,
    highauth:false,
    middleauth:false
  },
  relogin(){
    let that = this
      wx.login({
        success: function(res){
        let code = res.code;
        
        if(code != ''){
          wx.request({
            url: 'https://www.zqzqsmile.xyz/login_WP/login',
            method: 'POST',
            header:{'content-type': 'application/x-www-form-urlencoded'},
            data:{
              code: code,
              demo: 'login'
            },        
            success: function(res){
              let backUserInfo = res.data;
              let backuserinfo1 = backUserInfo[0];
              if(backUserInfo  != '' & backuserinfo1.authority!= 'false'){
               util.put('userinfo', backUserInfo,604800)
                wx.removeStorage({key: 'registerUserInfo'})
                that.setData({
                  login:false,
                  avatarUrl:backuserinfo1.avatarUrl,
                  employeeId:backuserinfo1.employeeId,
                  employeeName:backuserinfo1.employeeName,
                  authority:backuserinfo1.authority
                })
                if(backuserinfo1.authority > 2){
                  that.setData({
                    lowauth:true,
                    highauth:true,
                    middleauth:true
                  })
                }
                if(backuserinfo1.authority > 1){
                  that.setData({
                    lowauth:true,
                    middleauth:true
                  })
                }
                if(backuserinfo1.authority > 0){
                  that.setData({
                    lowauth:true
                  })
                }
              }
              else{
                wx.navigateTo({
                  url: '/pages/authority1/authority1',
                })
              }
            }
          })
        }
      }     
      })
  
     


    },
  exit(){
    let that = this;
    if(that.data.userinfo != ''){
    wx.removeStorageSync('userinfo')
    wx.removeStorageSync('userinforedis')
  }
  that.setData({
    login:true,
    lowauth:false,
    highauth:false,
    middleauth:false,
    avatarUrl:'',
    employeeId:'',
    employeeName:'',
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userinfo1 = wx.getStorageSync('userinfo');
    let userinfo2 = userinfo1[0];
    if(userinfo2){
    let authority1 = parseInt(userinfo2.authority)
    this.setData({
      authority:authority1,
      userinfo:userinfo2,
      avatarUrl:userinfo2.avatarUrl,
      employeeId:userinfo2.employeeId,
      employeeName:userinfo2.employeeName
    })
  }

    if(this.data.useinfo != ''& this.data.authority > 2){
      this.setData({
        login:false,
        lowauth:true,
        highauth:true,
        middleauth:true
      })
    }
    else if(this.data.useinfo != '' & this.data.authority > 1){
      this.setData({
        login:false,
        lowauth:true,
        highauth:false,
        middleauth:true
      })
    }
    else if( this.data.useinfo != ''&this.data.authority > 0){
      this.setData({
        login:false,
        lowauth:true,
        highauth:false,
        middleauth:false
      })
    }
  },
  skiproutineexam(){
    wx.navigateTo({
      url: '/pages/routineexam/routineexam',
    })
  },
  skipauthentication(){
    wx.navigateTo({
      url: '/pages/authentication/authentication',
    })
  },
  skipassignment(){
    wx.navigateTo({
      url: '/pages/assignment/assignment',
    })
  },
  skipretreat(){
    wx.navigateTo({
      url: '/pages/retreat/retreat',
    })
  },
  skipmetal(){
    wx.navigateTo({
      url: '/pages/metalgracheck/metalgracheck',
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