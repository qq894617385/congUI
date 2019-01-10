let timer
Component({
  properties: {

  },
  data: {
    click: false,
    focus: false,
    value: ""
  },
  methods: {
    // 点击动画开始
    click() {
      clearTimeout(timer);
      const that = this;
      that.setData({
        click: true
      })
      timer = setTimeout(() => {
        that.setData({
          focus: true
        })
      }, 210)
    },
    // 失去焦点恢复动画
    bindblur() {
      const that = this;
      if (this.data.value.length > 0) {
        that.setData({
          focus: false
        })
      } else {
        that.setData({
          click: false,
          focus: false
        })
      }
    },
    //输入触发
    input(e) {
      this.setData({
        value: e.detail.value
      })
      this.shutOut();
    },
    // 清空输入
    clean() {
      this.setData({
        value: ""
      })
      this.shutOut();
    },
    // 取消
    cancel() {
      this.setData({
        value: "",
        click: false,
        focus: false
      });
      this.shutOut();
    },
    // 发射函数
    shutOut() {
      const val = this.data.value
      this.triggerEvent("input", {
        val: val
      })
    }
  }
})