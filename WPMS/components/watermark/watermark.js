Component({
  data: {
    text: 'PFH2B',
    // color: 'rgba(0,0,0,0.03)',
    // color: 'rgba(0,0,0,0.5)',
    rows: [],
    cols: []
  },
  
  // 组件在页面上挂载时触发,注意如果页面没卸载过，该事件就不会触发第二次
  attached() {
    const user = wx.getStorageSync('userinfo');
    const name = user[0].employeeName;
    const ID = user[0].employeeId;
    const text = 'PFH2B-2-' + name + '-' + ID;
    const { windowWidth, windowHeight } = wx.getSystemInfoSync();
    const rows = Math.ceil(windowWidth / (60 * this.data.text.length));
    const cols = Math.ceil(windowHeight / 100);
    this.setData({
      rows: new Array(rows),
      cols: new Array(cols),
      text:text
    });
  },
  
})
