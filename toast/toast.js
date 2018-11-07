let timer

Component({
  properties: {
    // 控制开关
    show: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal, changedPath) {
        this.time()
      }
    },
    // 延时
    duration: {
      type: Number,
      value: 2000
    }
  },
  data: {
    display: false
  },
  methods: {
    // 倒计时
    time() {
      const that = this;
      clearTimeout(timer)
      timer = setTimeout(() => {
        that.triggerEvent('myevent', {})
      }, that.properties.duration)
    },
    // 强制消失
    display() {
      clearTimeout(timer);
      this.triggerEvent('myevent', {})
    }
  }
})