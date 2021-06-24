// pages/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area: [],
    subArea:[],
    gun: [],
    carType:[],
    area_name:'',
    subArea_name:'',
    gun_name: '',
    carType_name:'',
  },
  areaoptions(){
    let that = this;
    that.setData({
      area: [],
      subArea:[],
      gun: [],
      carType:[],
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
    gun_name: '',
    carType_name:'',
    
    })}
  },
  subAreaoptions(){
    let that = this;
    let area_name = that.data.area_name;
    if(area_name != ''){
    that.setData({
      area: [],
      subArea:[],
      gun: [],
      carType:[],
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
       gun_name: '',
       carType_name:'',
      })
    }
  },
  gunoptions(){
    let that = this;
    let area_name = that.data.area_name;
    let subArea_name = that.data.subArea_name;
    if(area_name != '' & subArea_name != ''){
    that.setData({
      area: [],
      subArea:[],
      gun: [],
      carType:[],
      click: !this.data.click,
       
    });
    wx.request({
      url: 'https://www.zqzqsmile.xyz/query_WP/login',
      data:{
        code:"gun",
        area: that.data.area_name,
        subArea: that.data.subArea_name,
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        var obj1 = res.data[0];

        let obj = JSON.parse(obj1)
        for(var i=0;i<obj.length;i++)
        {var gun1 = obj[i],
          gun = that.data.gun;
          gun.push(gun1);

        }
        // console.log(that.data.gun )
        that.setData({
          gun:that.data.gun 
        }) }  
        
    })
    }
  },
  gunSelected(e){
    var gunname = e.currentTarget.dataset.name;
    var that = this;
    if(that.data.gun_name == gunname){
      this.setData({
        gun_name:gunname,
       select: false
      })
    }else{
      this.setData({
        gun_name:gunname,
        carType_name:'',
      })
    }
  },
  carTypeoptions(){
    let that = this;
    let area_name = that.data.area_name;
    let subArea_name = that.data.subArea_name;
    let gun_name = that.data.gun_name;
    if(area_name != '' & subArea_name != '' & gun_name != ''){
    that.setData({
      area: [],
      subArea:[],
      gun: [],
      carType:[],
      click: !this.data.click,
       
    });
    wx.request({
      url: 'https://www.zqzqsmile.xyz/query_WP/login',
      data:{
        code:"carType",
        area: that.data.area_name,
        subArea: that.data.subArea_name,
        gun: that.data.gun_name,
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        var obj1 = res.data[0];

        let obj = JSON.parse(obj1)
        for(var i=0;i<obj.length;i++)
        {var carType1 = obj[i],
          carType = that.data.carType;
          carType.push(carType1);

        }
        // console.log(that.data.gun )
        that.setData({
          carType:that.data.carType 
        }) }  
        
    })
    }
  },
  carTypeSelected(e){
    var carTypename = e.currentTarget.dataset.name;
    var that = this;
    if(that.data.carType_name == carTypename){
      this.setData({
        carType_name:carTypename,
       select: false
      })
    }else{
      this.setData({
        carType_name:carTypename,   
      })
    }
  },
  queryparam(){
    let area_name = this.data.area_name;
    let subArea_name = this.data.subArea_name;
    let gun_name = this.data.gun_name;
    let carType_name = this.data.carType_name;
    if(area_name != '' & subArea_name != '' & gun_name != '' & carType_name != ''){
      wx.navigateTo({
        url: '/pages/parametershow/parametershow?area_name='+ area_name +'&subArea_name='+ subArea_name +'&gun_name='+ gun_name +'&carType_name='+ carType_name +'',
      })
    }else{
      wx.showToast({
        title: '请选择完整的查询信息',
        icon: 'none',
        duration: 2000   
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