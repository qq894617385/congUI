let timer

Component({
  data: {
    show: false,
    duration: 0,
    text: "",
    icon: ""
  },
  methods: {
    // 倒计时
    time() {
      const that = this;
      timer = setTimeout(() => {
        that.setData({
          show: false,
        })
      }, that.data.duration)
    },
    // 展示挂靠
    showToast(text, duration, icon) {
      clearTimeout(timer)
      this.setData({
        show: true,
        duration: duration,
        text: text,
        icon: icon
      });
      this.time();
    }
  }
})