// pages/assignment/assignment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:3,
    list1:[  ],
    // list1:[
    //   'asd','dasf','dfgh','dfdff','dfg','dgfdg','dfs','safsd','asdsf','safd','asf','dsfsd'
    // ],
    namelist:[],
    value:[],
    count1abt:'',
    count1st:'',
    count1ub:'',
    count1ug:'',
    count1ab:'',
    count2abt:'',
    count2st:'',
    count2ub:'',
    count2ug:'',
    count2ab:'',
    boxshow1ug:true,
    boxshow1ub:true,
    boxshow1ab:true,
    boxshow1abt:true,
    boxshow1st:true,
    boxshow2ug:true,
    boxshow2ub:true,
    boxshow2ab:true,
    boxshow2abt:true,
    boxshow2st:true,
    viewShowed1AB: false,
    viewShowed2AB: false,
    viewShowed1UB: false,
    viewShowed2UB: false,
    viewShowed1UG: false,
    viewShowed2UG: false,
    viewShowed1ST: false,
    viewShowed2ST: false,
    viewShowed1ABT: false,
    viewShowed2ABT: false,
    inputVal1AB: "",
    inputVal2AB: "",
    inputVal1ST: "",
    inputVal2ST: "",
    inputVal1ABT: "",
    inputVal2ABT: "",
    inputVal1UB: "",
    inputVal2UB: "",
    inputVal1UG: "",
    inputVal2UG: "",
  },
  inputTyping1ABT: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed1ABT: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed1ABT: true,
          namelist: arr
        });
      }
    }
  },
  name1abt: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal1ABT: that.data.namelist[index],
      viewShowed1ABT: false,
    });
    console.log(that.data.inputVal1ABT);
  },
  inputTyping2ABT: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed2ABT: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed2ABT: true,
          namelist: arr
        });
      }
    }
  },
  name2abt: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal2ABT: that.data.namelist[index],
      viewShowed2ABT: false,
    });
    console.log(that.data.inputVal2ABT);
  },
  inputTyping1AB: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed1AB: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed1AB: true,
          namelist: arr
        });
      }
    }
  },
  name1ab: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal1AB: that.data.namelist[index],
      viewShowed1AB: false,
    });
    console.log(that.data.inputVal1AB);
  },
  inputTyping2AB: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed2AB: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed2AB: true,
          namelist: arr
        });
      }
    }
  },
  name2ab: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal2AB: that.data.namelist[index],
      viewShowed2AB: false,
    });
    console.log(that.data.inputVal2AB);
  },
  inputTyping1ST: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed1ST: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed1ST: true,
          namelist: arr
        });
      }
    }
  },
  name1st: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal1ST: that.data.namelist[index],
      viewShowed1ST: false,
    });
    console.log(that.data.inputVal1ST);
  },
  inputTyping2ST: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed2ST: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed2ST: true,
          namelist: arr
        });
      }
    }
  },
  name2st: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal2ST: that.data.namelist[index],
      viewShowed2ST: false,
    });
    console.log(that.data.inputVal2ST);
  },
  inputTyping1UB: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed1UB: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed1UB: true,
          namelist: arr
        });
      }
    }
  },
  name1ub: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal1UB: that.data.namelist[index],
      viewShowed1UB: false,
    });
    console.log(that.data.inputVal1UB);
  },
  inputTyping2UB: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed2UB: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed2UB: true,
          namelist: arr
        });
      }
    }
  },
  name2ub: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal2UB: that.data.namelist[index],
      viewShowed2UB: false,
    });
    console.log(that.data.inputVal2UB);
  },
  inputTyping1UG: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed1UG: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed1UG: true,
          namelist: arr
        });
      }
    }
  },
  name1ug: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal1UG: that.data.namelist[index],
      viewShowed1UG: false,
    });
    console.log(that.data.inputVal1UG);
  },
  inputTyping2UG: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed2UG: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed2UG: true,
          namelist: arr
        });
      }
    }
  },
  name2ug: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal2UG: that.data.namelist[index],
      viewShowed2UG: false,
    });
    console.log(that.data.inputVal2UG);
  },
  // 确定按钮事件
  enter1abt(){
    if(this.data.inputVal1ABT != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.1门盖',
          odinaryCheckBody:this.data.inputVal1ABT
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter2abt(){
    if(this.data.inputVal2ABT != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.2门盖',
          odinaryCheckBody:this.data.inputVal2ABT
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter1ab(){
    if(this.data.inputVal1AB != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.1总拼',
          odinaryCheckBody:this.data.inputVal1AB
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter1ab(){
    if(this.data.inputVal1AB != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.1总拼',
          odinaryCheckBody:this.data.inputVal1AB
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter2ab(){
    if(this.data.inputVal2AB != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.2总拼',
          odinaryCheckBody:this.data.inputVal2AB
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter1st(){
    if(this.data.inputVal1ST != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.1侧围',
          odinaryCheckBody:this.data.inputVal1ST
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter2st(){
    if(this.data.inputVal2ST != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.2侧围',
          odinaryCheckBody:this.data.inputVal2ST
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter1ub(){
    if(this.data.inputVal1UB != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.1底板主线',
          odinaryCheckBody:this.data.inputVal1UB
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter2ub(){
    if(this.data.inputVal2UB != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.2底板主线',
          odinaryCheckBody:this.data.inputVal2UB
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter1ug(){
    if(this.data.inputVal1UG != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.1底板分拼',
          odinaryCheckBody:this.data.inputVal1UG
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  enter2ug(){
    if(this.data.inputVal2UG != ''){
      wx.request({
        url: 'https://www.zqzqsmile.xyz/task_WP/login',
        data:{
          code:'assgin',
          area:'2.2底板分拼',
          odinaryCheckBody:this.data.inputVal2UG
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if(res.data.status = true){
            wx.showToast({
              title: '任务指派成功！！！',
              icon: 'none',
              duration: 2000
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
    }else{
      wx.showToast({
        title: '请指定要分配的人员姓名！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    
    wx.request({
      url: 'https://www.zqzqsmile.xyz/task_WP/login',
      data:{
        code:'spot'
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        // console.log(res.data)
        console.log(res.data.value)
        console.log(res.data.employeeName)
        let name = res.data.employeeName
        let value = JSON.parse(res.data.value);
        console.log(value)
        that.setData({
          value:value,
          list1:name
        })
        let exist1 = value.some(item => item.area == '2.1门盖')
        let id1 = value.findIndex( item => item.area == '2.1门盖');
        if(exist1){
          that.setData({
            count1abt:value[id1].count
          })
        }else{
          that.setData({
            boxshow1abt:false
          })
        }   
        let exist2 = value.some(item => item.area == '2.1侧围')
        let id2 = value.findIndex( item => item.area == '2.1侧围');
        if(exist2){
          that.setData({
            count1st:value[id2].count
          })
        }else{
          that.setData({
            boxshow1st:false
          })
        }   
        let exist3 = value.some(item => item.area == '2.1底板主线')
        let id3 = value.findIndex( item => item.area == '2.1底板主线');
        if(exist3){
          that.setData({
            count1ub:value[id3].count
          })
        }else{
          that.setData({
            boxshow1ub:false
          })
        }   
        let exist4 = value.some(item => item.area == '2.1底板分拼')
        let id4 = value.findIndex( item => item.area == '2.1底板分拼');
        if(exist4){
          that.setData({
            count1ug:value[id4].count
          })
        }else{
          that.setData({
            boxshow1ug:false
          })
        }
        let exist5 = value.some(item => item.area == '2.1总拼')
        let id5 = value.findIndex( item => item.area == '2.1总拼');
        if(exist5){
          that.setData({
            count1ab:value[id5].count
          })
        }else{
          that.setData({
            boxshow1ab:false
          })
        }
        let exist6 = value.some(item => item.area == '2.2门盖')
        let id6 = value.findIndex( item => item.area == '2.2门盖');
        if(exist6){
          that.setData({
            count2abt:value[id6].count
          })
        }else{
          that.setData({
            boxshow2abt:false
          })
        }   
        let exist7 = value.some(item => item.area == '2.2侧围')
        let id7 = value.findIndex( item => item.area == '2.2侧围');
        if(exist7){
          that.setData({
            count2st:value[id7].count
          })
        }else{
          that.setData({
            boxshow2st:false
          })
        }   
        let exist8 = value.some(item => item.area == '2.2底板主线')
        let id8 = value.findIndex( item => item.area == '2.2底板主线');
        if(exist8){
          that.setData({
            count2ub:value[id8].count
          })
        }else{
          that.setData({
            boxshow2ub:false
          })
        }   
        let exist9 = value.some(item => item.area == '2.2底板分拼')
        let id9 = value.findIndex( item => item.area == '2.2底板分拼');
        if(exist9){
          that.setData({
            count2ug:value[id9].count
          })
        }else{
          that.setData({
            boxshow2ug:false
          })
        }
        let exist10 = value.some(item => item.area == '2.2总拼')
        let id10 = value.findIndex( item => item.area == '2.2总拼');
        if(exist10){
          that.setData({
            count2ab:value[id10].count
          })
        }else{
          that.setData({
            boxshow2ab:false
          })
        }

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