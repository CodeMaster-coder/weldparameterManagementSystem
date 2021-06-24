// pages/dressdata/dressdata.js
var app = getApp();
import * as echarts from '../../components/ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: [ '#2bbfec'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: [ '修磨点数']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {

          textStyle: {
            color: '#000000'  //这里用参数代替了
          }
        },

      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: app.globalData.gun,    //数据绑定更改为globalData
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666',
          textStyle: {
            color: '#000000'  //这里用参数代替了
          }
        }
      }
    ],
    series: [
      {
        name: '修磨点数',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
          }
        },
        data: app.globalData.product,    //数据绑定更改为globalData
        itemStyle: {
          // emphasis: {
          //   color: '#32c5e9'
          // }
        }
      },
      
    ]
  };
  chart.setOption(option);
  return chart;
}



Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
      },

  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData)
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