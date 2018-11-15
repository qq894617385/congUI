Component({
  properties: {
    // 标题
    title: {
      type: String,
      value: ""
    },
    // 错误提示
    tips: {
      type: String,
      value: ""
    },
    // 字符长度
    maxlength: {
      type: String,
      value: "30"
    },
    // 最小值
    minlength: {
      type: String,
      value: ""
    }
  },
  data: {
    // 输入的值
    value: "",
    // 清楚按钮
    clean: false,
    // 是否正确输入
    check: true
  },
  methods: {
    // 监听输入函数
    input(e) {
      // 传入的值
      const value = e.detail.value;
      const that = this;
      // 判断输入值,是否为空
      if (value.length > 0) {
        that.setData({
          clean: true
        })
      } else {
        that.setData({
          clean: false
        })
      }
      // 检测函数
      this.check()
      // 弹出函数
      if (that.data.check) {
        this.triggerEvent("input", {
          val: value
        })
      }
    },
    // 清空输入
    clean() {
      // 还原初始输入模式
      this.setData({
        value: "",
        clean: false
      })
      // 弹出空函数
      this.triggerEvent("input", {
        val: ""
      })
    },
    // 检测输入情况
    check() {
      const that = this;
      // 获取需要检测的值
      const val = this.data.value;
      if (val.length < that.properties.minlength) {
        // 显示错误提示
        that.setData({
          check: false
        })
        return;
      }
    }
  }
})