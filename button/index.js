Component({
  properties: {
    // 内容文字
    text: {
      value: "",
      type: String
    },
    // 传入背景色
    backgroundColor: {
      value: "",
      type: String
    },
    // 传入字体颜色
    color: {
      value: "",
      type: String
    },
  },
  data: {
    // 控制class的动态添加和减少
    show: false
  },
  methods: {
    // 点击触发函数
    touchStart() {
      const that = this;
      that.setData({
        show: true
      })
    },
    // 点击结束函数
    touchEnd() {
      this.setData({
        show: false
      })
    }
  }
})