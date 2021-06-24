// pages/weldparameter/weldparameter.js
const utils = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hostname:'',
    area: [],
    subArea:[],
    gun: [],
    carType:[],
    weldSpotProgram:[],
    area_name:'',
    subArea_name:'',
    gun_name: '',
    carType_name:'',
    weldSpotProgram_name:'',
    spot_name:'',
    sheet1_name:'',
    sheet2_name:'',
    sheet3_name:'',
    sheet4_name:'',
    preloadingTime: '',
    preheatingTime:'',
    preheatingCurrent:'',
    coolingTime:'',
    risslopeTime:'',
    startCurrent:'',
    endCurrent:'',
    mainWeldCurrent:'',
    mainWeldTime:'',
    downslopeTime:'',
    startCurrent1:'',
    endCurrent1:'',
    impulse:'',
    intervalTime:'',
    holdTime:'',
    weldPressure:'',
    dressingPoints:'',
    dressingNumbers:'',
    modifyReason_name:'',
    beforeParam:null,
    afterParam:null,
    click: false,
    inputshow: true,
    dressinputshow:true,
    buttonshow:true,
    font_color: '#696969',
    dressfont_color: '#696969',
    modifyReason:[],
    logonUserInfo:''
  },
  // 工段选择
  areaoptions(){
    let that = this;
    that.setData({
      area: [],
      subArea:[],
      gun: [],
      carType:[],
      weldSpotProgram:[],
      modifyReason:[],
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
    weldSpotProgram_name:'',
    spot_name:'',
    sheet1_name:'',
    sheet2_name:'',
    sheet3_name:'',
    sheet4_name:'',
    preloadingTime:'',
    preheatingTime:'',
    preheatingCurrent:'',
    coolingTime:'',
    risslopeTime:'',
    startCurrent:'',
    endCurrent:'',
    mainWeldCurrent:'',
    mainWeldTime:'',
    downslopeTime:'',
    startCurrent1:'',
    endCurrent1:'',
    impulse:'',
    intervalTime:'',
    holdTime:'',
    weldPressure:'',
    dressingPoints:'',
    dressingNumbers:'',
    buttonshow:true,
    })}
  },
//班组选择
subAreaoptions(){
    let that = this;
    let area_name = that.data.area_name;
    if(area_name != ''){
    that.setData({
      area: [],
      subArea:[],
      gun: [],
      carType:[],
      weldSpotProgram:[],
      modifyReason:[],
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
       weldSpotProgram_name:'',
       spot_name:'',
    sheet1_name:'',
    sheet2_name:'',
    sheet3_name:'',
    sheet4_name:'',
    preloadingTime:'',
    preheatingTime:'',
    preheatingCurrent:'',
    coolingTime:'',
    risslopeTime:'',
    startCurrent:'',
    endCurrent:'',
    mainWeldCurrent:'',
    mainWeldTime:'',
    downslopeTime:'',
    startCurrent1:'',
    endCurrent1:'',
    impulse:'',
    intervalTime:'',
    holdTime:'',
    weldPressure:'',
    dressingPoints:'',
    dressingNumbers:'',
    buttonshow:true,
    modifyReason_name:'',
      })
    }
  },
  //焊枪选择
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
      weldSpotProgram:[],
      modifyReason:[],
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
        weldSpotProgram_name:'',
        spot_name:'',
    sheet1_name:'',
    sheet2_name:'',
    sheet3_name:'',
    sheet4_name:'',
    preloadingTime:'',
    preheatingTime:'',
    preheatingCurrent:'',
    coolingTime:'',
    risslopeTime:'',
    startCurrent:'',
    endCurrent:'',
    mainWeldCurrent:'',
    mainWeldTime:'',
    downslopeTime:'',
    startCurrent1:'',
    endCurrent1:'',
    impulse:'',
    intervalTime:'',
    holdTime:'',
    weldPressure:'',
    dressingPoints:'',
    dressingNumbers:'',
       select: false,
       buttonshow:true,
       modifyReason_name:'',
      })
    }
  },
  //车型选择
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
      weldSpotProgram:[],
      modifyReason:[],
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
        weldSpotProgram_name:'',
        spot_name:'',
    sheet1_name:'',
    sheet2_name:'',
    sheet3_name:'',
    sheet4_name:'',
    preloadingTime:'',
    preheatingTime:'',
    preheatingCurrent:'',
    coolingTime:'',
    risslopeTime:'',
    startCurrent:'',
    endCurrent:'',
    mainWeldCurrent:'',
    mainWeldTime:'',
    downslopeTime:'',
    startCurrent1:'',
    endCurrent1:'',
    impulse:'',
    intervalTime:'',
    holdTime:'',
    weldPressure:'',
    dressingPoints:'',
    dressingNumbers:'',
       select: false,
       buttonshow:true,
       modifyReason_name:'',
      })
    }
    this.setData({
       
    })
  },
  //程序号选择
  weldSpotProgramOptions(){
    let that = this;
    let area_name = that.data.area_name;
    let subArea_name = that.data.subArea_name;
    let gun_name = that.data.gun_name;
    let carType_name = that.data.carType_name;
    if(area_name != '' & subArea_name != '' & gun_name != '' & carType_name != ''){
    that.setData({
      area: [],
      subArea:[],
      gun: [],
      carType:[],
      weldSpotProgram:[],
      weldSpotProgram:[],
      modifyReason:[],
      click: !this.data.click,
       
    });
    wx.request({
      url: 'https://www.zqzqsmile.xyz/query_WP/login',
      data:{
        code:"weldSpotProgram",
        area: that.data.area_name,
        subArea: that.data.subArea_name,
        gun: that.data.gun_name,
        carType: that.data.carType_name
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        // console.log(res.data)
        var obj1 = res.data[0];

        let obj = JSON.parse(obj1)
        for(var i=0;i<obj.length;i++)
        {var weldSpotProgram1 = obj[i],
          weldSpotProgram = that.data.weldSpotProgram;
          weldSpotProgram.push(weldSpotProgram1);

        }
        // console.log(that.data.gun )
        that.setData({
          weldSpotProgram:that.data.weldSpotProgram 
        }) }  
        
    })
    }
  },
  weldSpotProgramSelected(e){
    var weldSpotProgramname = e.currentTarget.dataset.name;
    var that = this;
    if(that.data.weldSpotProgram_name == weldSpotProgramname){
      this.setData({
        weldSpotProgram_name:weldSpotProgramname,
       select: false,
      })
    }else{
      that.setData({
      weldSpotProgram_name:weldSpotProgramname,
        spot_name:'',
    sheet1_name:'',
    sheet2_name:'',
    sheet3_name:'',
    sheet4_name:'',
    preloadingTime:'',
    preheatingTime:'',
    preheatingCurrent:'',
    coolingTime:'',
    risslopeTime:'',
    startCurrent:'',
    endCurrent:'',
    mainWeldCurrent:'',
    mainWeldTime:'',
    downslopeTime:'',
    startCurrent1:'',
    endCurrent1:'',
    impulse:'',
    intervalTime:'',
    holdTime:'',
    weldPressure:'',
    dressingPoints:'',
    dressingNumbers:'',
       select: false,
       buttonshow:true,
       modifyReason_name:'',})
    }
      
  },
  //参数查询按钮功能实现
  paramQuery(){
    let that = this;
    let area_name = that.data.area_name;
    let subArea_name = that.data.subArea_name;
    let gun_name = that.data.gun_name;
    let carType_name = that.data.carType_name;
    let weldSpotProgram_name = that.data.weldSpotProgram_name;
    that.setData({
      inputshow: true,
      buttonshow:true,
      font_color: '#696969'
    })
    if(area_name != '' & subArea_name != '' 
    & gun_name != '' & carType_name != '' & weldSpotProgram_name != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/query_WP/login',
        data:{
          code:"weldParameter",
          area: that.data.area_name,
          subArea: that.data.subArea_name,
          gun: that.data.gun_name,
          carType: that.data.carType_name,
          weldSpotProgram: that.data.weldSpotProgram_name,
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          var obj = res.data[0];
      // console.log(obj)
          that.setData({
            spot_name:obj.weldSpotNumber,
            sheet1_name:obj.sheet1,
            sheet2_name:obj.sheet2,
            sheet3_name:obj.sheet3,
            sheet4_name:obj.sheet4,
            preloadingTime:obj.preloadingTime,
            preheatingTime:obj.preheatingTime,
            preheatingCurrent:obj.preheatingCurrent,
            coolingTime:obj.coolingTime,
            risslopeTime:obj.risslopeTime,
            startCurrent:obj.startCurrent,
            endCurrent:obj.endCurrent,
            mainWeldCurrent:obj.mainWeldCurrent,
            mainWeldTime:obj.mainWeldTime,
            downslopeTime:obj.downslopeTime,
            startCurrent1:obj.startCurrent1,
            endCurrent1:obj.endCurrent1,
            impulse:obj.impulse,
            intervalTime:obj.intervalTime,
            holdTime:obj.holdTime,
            weldPressure:obj.weldPressure,
            dressingPoints:obj.dressingPoints,
            dressingNumbers:obj.dressingNumbers,
            beforeParam:utils.deepClone(obj)
          })
          // console.log(that.data.beforeParam)
       }  
      })
    }
  },
  
  preheatingTimeipt(e){
    if(this.data.preheatingTime !== e.detail.value){
      let preheatingtime = e.detail.value
      this.setData({
        ['afterParam.preheatingTime']:Number(preheatingtime)
      })
    }
  },
  preheatingCurrentipt(e){
    if(this.data.preheatingCurrent !== e.detail.value){
      let preheatingcurrent = e.detail.value
      this.setData({
        ['afterParam.preheatingCurrent']:Number(preheatingcurrent)
      })
    }
  },
  coolingTimeipt(e){
    if(this.data.coolingTime !== e.detail.value){
      let coolingtime = e.detail.value
      this.setData({
        ['afterParam.coolingTime']:Number(coolingtime)
      })
    }
  },
  risslopeTimeipt(e){
    if(this.data.risslopeTime !== e.detail.value){
      let risslopetime = e.detail.value
      this.setData({
        ['afterParam.risslopeTime']:Number(risslopetime)
      })
    }
  },
  startCurrentipt(e){
    if(this.data.startCurrent !== e.detail.value){
      let startcurrent = e.detail.value
      this.setData({
        ['afterParam.startCurrent']:Number(startcurrent)
      })
    }
  },
  endCurrentipt(e){
    if(this.data.startCurrent !== e.detail.value){
      let startcurrent = e.detail.value
      this.setData({
        ['afterParam.startCurrent']:Number(startcurrent)
      })
    }
  },
  mainWeldCurrentipt(e){
    if(this.data.mainWeldCurrent !== e.detail.value){
      let mainweldcurrent = e.detail.value
      this.setData({
        ['afterParam.mainWeldCurrent']:Number(mainweldcurrent)
      })
    }
  },
  mainWeldTimeipt(e){
    if(this.data.mainWeldTime !== e.detail.value){
      let mainweldtime = e.detail.value
      this.setData({
        ['afterParam.mainWeldTime']:Number(mainweldtime)
      })
    }
  },
  downslopeTimeipt(e){
    if(this.data.downslopeTime !== e.detail.value){
      let downslopetime = e.detail.value
      this.setData({
        ['afterParam.downslopeTime']:Number(downslopetime)
      })
    }
  },
  startCurrent1ipt(e){
    if(this.data.startCurrent1 !== e.detail.value){
      let startcurrent1 = e.detail.value
      this.setData({
        ['afterParam.startCurrent1']:Number(startcurrent1)
      })
    }
  },
  endCurrent1ipt(e){
    if(this.data.endCurrent1 !== e.detail.value){
      let endcurrent1 = e.detail.value
      this.setData({
        ['afterParam.endCurrent1']:Number(endcurrent1)
      })
    }
  },
  impulseipt(e){
    if(this.data.impulse !== e.detail.value){
      let impulse1 = e.detail.value
      this.setData({
        ['afterParam.impulse']:Number(impulse1)
      })
    }
  },
  intervalTimeipt(e){
    if(this.data.intervalTime !== e.detail.value){
      let intervaltime = e.detail.value
      this.setData({
        ['afterParam.intervalTime']:Number(intervaltime)
      })
    }
  },
  holdTimeipt(e){
    if(this.data.holdTime !== e.detail.value){
      let holdtime = e.detail.value
      this.setData({
        ['afterParam.holdTime']:Number(holdtime)
      })
    }
  },
  weldPressureipt(e){
    if(this.data.weldPressure !== e.detail.value){
      let weldpressure = e.detail.value
      this.setData({
        ['afterParam.weldPressure']:Number(weldpressure)
      })
    }
  },
  dressingPointsipt(e){
    if(this.data.dressingPointse !== e.detail.value){
      let dressingpoints = e.detail.value
      this.setData({
        ['afterParam.dressingPoints']:Number(dressingpoints)
      })
    }
  },
  dressingNumbersipt(e){
    if(this.data.dressingNumbers !== e.detail.value){
      let dressingnumbers = e.detail.value
      this.setData({
        ['afterParam.dressingNumbers']:Number(dressingnumbers)
      })
    }
  },
  modifyReasonoptions(){
    let that = this;
    that.setData({
      weldSpotProgram:[],
      modifyReason:[
        '优化粘枪','优化假焊','优化小焊核','优化破凿','优化飞溅','优化毛刺','优化金相','优化修磨','优化压痕深','优化过烧','优化炸点'
      ],
      click: !this.data.click,      
    });
  }, 
  modifyReasonSelected(e){
    var name = e.currentTarget.dataset.name;
    var that = this;
      that.setData({
        modifyReason_name: name,
        select: false
       })
       if(this.data.modifyReason_name != ''){
        if(this.data.modifyReason_name == '优化修磨'){
          this.setData({
            dressinputshow: false,
            inputshow: true,
            dressfont_color: 'black',
            font_color: '#696969',
            afterParam: utils.deepClone(this.data.beforeParam)
          })
        }
        else{
      this.setData({
        inputshow: false, 
        dressinputshow: true,   
        font_color: 'black',
        dressfont_color: '#696969',
        afterParam: utils.deepClone(this.data.beforeParam)
      })}}
  },
  //更改按钮
  buttobshow(){

    let authority = parseInt(this.data.logonUserInfo.authority)
    if( authority > 1){
    if(this.data.beforeParam != null){
      wx.showToast({
        title: '请先选择更改原因',
        icon: 'none',
        duration: 2000       
      })
      this.setData({
        buttonshow: false,
        modifyReason_name:'',
      })

//  console.log(this.data.afterParam)   
  }else{
    wx.showToast({
      title: '请先查询要更改的焊点参数!!!',
      icon: 'none',
      duration: 2000       
    })
  }
}else{
    wx.showToast({
      title: '您没有更改参数的权限!!!',
      icon: 'none',
      duration: 2000       
    })
  }
  } ,
  //输入框事件
  preloadingTimeipt(e){
    if(this.data.preloadingTime !== e.detail.value){
      let preloadingtime = e.detail.value
      this.setData({
        ['afterParam.preloadingTime']:Number(preloadingtime)
      })
    }
  },
  //参数修改确认按钮
  submitParam: utils.throttle(function (ev){
    let that = this
    console.log(JSON.stringify(that.data.beforeParam))
    console.log(JSON.stringify(that.data.afterParam))
    if(that.data.modifyReason_name != ''){
    wx.showModal({
      
      title:'参数更改确认框',
      content:'确定因' + that.data.modifyReason_name + '修改焊点' + that.data.spot_name + '的参数？',
      success:function(res){
        if(res.confirm){
    if(JSON.stringify(that.data.beforeParam) === JSON.stringify(that.data.afterParam)){
      wx.showToast({
        title: '您未修改任何参数！！！',
        icon: 'none',
        duration: 2000
      })
    }
    else{
      if(that.data.modifyReason_name == '优化修磨'){
        wx.request({
          url: 'https://www.zqzqsmile.xyz/change_WP/login',
          data:{
            modifyReason:that.data.modifyReason_name,

            beforeParam:JSON.stringify(that.data.beforeParam),
            afterParam:JSON.stringify(that.data.afterParam)
          },
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            if(res.data.status == true){
              wx.showToast({
                title: '修磨参数更改成功',
                icon: 'none',
                duration: 2000
              })
              that.setData({
                buttonshow: true,
                dressinputshow:true,
                inputshow:true,
                dressfont_color: '#696969',
                beforeParam:null,
                afterParam:null
              })
            }
          }
        })
      }else if(that.data.modifyReason_name == '优化金相'){
        wx.request({
          url: 'https://www.zqzqsmile.xyz/change_WP/login',
          data:{
            modifyReason:that.data.modifyReason_name,
            modifyBody:that.data.hostname,
            beforeParam:JSON.stringify(that.data.beforeParam),
            afterParam:JSON.stringify(that.data.afterParam)
          },
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            if(res.data.status == true){
              wx.showToast({
                title: '优化金相参数更改成功',
                icon: 'none',
                duration: 2000
              })
              that.setData({
                buttonshow: true,
                dressinputshow:true,
                inputshow:true,
                font_color: '#696969',
                beforeParam:null,
                afterParam:null
              })
            }
          }
        })
      }
      else{
        wx.request({
          url: 'https://www.zqzqsmile.xyz/change_WP/login',
          data:{
            modifyReason:that.data.modifyReason_name,
            modifyBody:that.data.hostname,
            beforeParam:JSON.stringify(that.data.beforeParam),
            afterParam:JSON.stringify(that.data.afterParam)
          },
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            if(res.data.status == true){
              wx.showToast({
                title: '参数更改成功',
                icon: 'none',
                duration: 2000
              })
              that.setData({
                buttonshow: true,
                dressinputshow:true,
                inputshow:true,
                font_color: '#696969',
                beforeParam:null,
                afterParam:null
              })
            }
          }
        })
      }
    }}}})}
    else{
      wx.showToast({
        title: '请先选择更改原因',
        icon: 'none',
                duration: 2000
      })
    }
  }),
        /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let logonUserInfo1 = wx.getStorageSync('userinfo');
    let logonUserInfo = logonUserInfo1[0]
    
    let hostname = logonUserInfo.employeeName

    this.setData({
      logonUserInfo: logonUserInfo,
      hostname:hostname
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