// pages/query/query.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area: [],
    subArea:[],
    area_name:'',
    subArea_name:'',
  },
  areaoptions(){
    let that = this;
    that.setData({
      area: [],
      subArea:[],
      click: !this.data.click,
    });
    wx.request({
      url: 'https://www.zqzqsmile.xyz/query_WP/login',
      // url: 'https://www.zqzqsmile.xyz/query_WP/login',
      data:{
        code:"area"
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        var obj1 = res.data[0];
        let obj = JSON.parse(obj1)
        for(var i=0;i<obj.length;i++)
        {var area1 = obj[i],
          area = that.data.area;
          area.push(area1);
          that.setData({
            area:that.data.area 
          })}}  
    })
  },
  selectedone(e){
    var name = e.currentTarget.dataset.name;
    var that = this;
    if(that.data.area_name == name){
      this.setData({
        area_name: name,
        select: false,
       
       })
    }else{
    this.setData({
     area_name: name,
     select: false,
     subArea_name:'',
    
    })}
  },
  subAreaoptions(){
    let that = this;
    let area_name = that.data.area_name;
    if(area_name != ''){
    that.setData({
      area: [],
      subArea:[],
      click: !this.data.click,
       
    });
    wx.request({
      url: 'https://www.zqzqsmile.xyz/query_WP/login',
      data:{
        code:"subArea",
        area: that.data.area_name,
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        var obj1 = res.data[0];
        let obj = JSON.parse(obj1)
        for(var i=0;i<obj.length;i++)
        {var subArea1 = obj[i],
          subArea = that.data.subArea;
          subArea.push(subArea1);
          that.setData({
            subArea:that.data.subArea 
          })}}  
    })
    }
  },
  subAreaSelected(e){
    var subAreaName = e.currentTarget.dataset.name;
    var that = this;
    if(that.data.subAreaName == subAreaName){    
      this.setData({
      subArea_name:subAreaName,
     select: false,
     
    })}
    else{
      this.setData({
        subArea_name:subAreaName,
       select: false,
      })
    }
  },
  queryparam(){
    let that = this;
    let area_name = this.data.area_name;
    let subArea_name = this.data.subArea_name;
    if(area_name != '' & subArea_name != '' ){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/query_WP/login',
      data:{
        code:"dressdata",
        area: that.data.area_name,
        subArea: that.data.subArea_name,
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        let obj1 = JSON.parse(res.data)
        console.log(obj1[0]);
        for(let i=0;i<obj1.length;i++){
          getApp().globalData.product[i] = obj1[i].product;
          getApp().globalData.gun[i] = obj1[i].gun;
        }
        console.log(app.globalData)
        if(obj1){
          wx.navigateTo({
            url: '/pages/dressdata/dressdata',
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