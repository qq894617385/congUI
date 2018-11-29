const QQMapWX = require('./qqmap-wx-jssdk');
let qqmapsdk;

Component({
  properties: {
    show: {
      type: Boolean
    }
  },
  data: {
    // 地图指引
    latitude: 0, //地图初次加载时的纬度坐标
    longitude: 0, //地图初次加载时的经度坐标
    name: "请选择地理位置", //选择的位置名称,
  },
  ready: function () {
    const that = this;
    qqmapsdk = new QQMapWX({
      key: 'XFTBZ-AJX3V-H2IP4-UIXYS-3TZ7E-5LBKW'
    });
    if (this.properties.show) {
      that.data.mapOpen()
    }
  },
  methods: {
    mapOpen() {
      this.setData({
        mapShow: true
      })
      var that = this;
      // 打开地图选择位置
      wx.chooseLocation({
        success: function (res) {
          console.log(res, "地理位置信息")
          // res.name为地址名称
          console.log(res.address);
          // 选择地点之后返回到原来页面
          that.setData({
            name: res.address,
            mapShow: false,
            clickMaps: true
          })
        },
        fail: function (err) {
          that.setData({
            mapShow: false,
            clickMaps: true
          })
        }
      });
    }
  }
})