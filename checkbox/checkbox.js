Component({
  properties: {
    Array: {
      type: Array,
      value: "",
      observer: function (newVal, oldVal, changedPath) {
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
    selectArr: []
  },
  methods: {
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
    }
  }
})