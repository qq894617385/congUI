Component({
  // 输入数据
  properties: {
    // 输入字体
    fontColor: {
      type: String,
      value: "#fff"
    },
    //背景色
    background: {
      type: String,
      value: "#8c8c8c"
    },
    fontSize: {
      type: String,
      value: "24rpx"
    },
    // 输入边框模式
    Arr: {
      type: Array,
      value: []
    }
  },
  // 静态数据
  data: {
    //当前选择的index  -1时为全部
    id: -1
  },
  methods: {
    pick(e) {
      let index = e.currentTarget.dataset.id;
      if (index == this.data.id) {
        index = -1;
      }

      this.setData({
        id: index
      })

      const output = {
        val: index
      }

      // 输出index
      this.triggerEvent('index', output)
    }
  }
})