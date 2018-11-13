Component({
  properties: {
    Array: {
      type: Array,
      value: "",
      observer: function (newVal, oldVal, changedPath) {
        // 跟新传入数据
        this.importData(newVal);
      }
    }
  },
  data: {
    // 显示的Arr
    Arr: [],
    // 当前选择id
    id: 0,
    // 已选数组
    selectArr: [],
    // 父元素高度
    bigHeight: 0,
    // 子元素高度
    smallHeight: 0,
    // 是否显示滑动标志
    srcollShow: true
  },
  // 加载完成函数
  ready() {
    //  获取高度
    const that = this;
    const query = wx.createSelectorQuery().in(this)
    // 获取父元素高度
    query.select('#big').boundingClientRect(function (res) {
      that.setData({
        bigHeight: res.height
      })
    }).exec()
    // 获取子元素高度
    query.select('#samll').boundingClientRect(function (res) {
      that.setData({
        smallHeight: res.height
      })
      // 如果子元素的高度比父元素的高度打,应该显示可以滑动的图标
      if (that.data.bigHeight < res.heigh) {
        that.setData({
          srcollShow: true
        })
      }

    }).exec()
  },
  methods: {
    // 选择函数
    select(e) {
      // 获取选择ID
      const id = e.currentTarget.dataset.id;
      // 显示数组
      let Arr = this.data.Arr;
      // 修改选择状态
      if (Arr[id].check) {
        Arr[id].check = false;
      } else {
        Arr[id].check = true;
      }
      // 刷新状态
      this.setData({
        Arr: Arr
      })
      this.updata()
    },
    // 更新选择数据
    updata() {
      const data = this.data.Arr;
      let newArr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].check) {
          newArr.push({
            name: data[i].name,
            value: data[i].value
          })
        }
      }
      // 弹出函数
      this.triggerEvent('output', {
        val: newArr
      })
    },
    // 传入数据更改
    importData(data) {
      console.log("有数据传入")
      // 数据预处理
      for (let i = 0; i < data.length; i++) {
        data[i].check = false;
      }
      // 更新数值
      this.setData({
        Arr: data
      })
      console.log(this.data.Arr)
    },
    // 滚动中
    scrolling() {
      this.setData({
        srcollShow: false
      })
    }
  }
})