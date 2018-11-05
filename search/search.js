Component({
  properties: {
    // 字体图标颜色
    color: {
      type: String,
      value: "#8c8c8c"
    },
    //字体图标大小
    fontIcon: {
      type: String,
      value: "50rpx"
    },
    // 字体大小
    font: {
      type: String,
      value: ""
    },
    // 选中反差颜色
    focusColor: {
      type: String,
      value: "#bfbfbf"
    },
    // pleacehold
    pleacehold: {
      type:String,
      value:"请输入单号"
    }
  },

  data: {
    blur: false
  },
  methods: {
    focus() {
      this.setData({
        blur: true
      })
    },
    blur() {
      this.setData({
        blur: false
      })
    }
  }
})