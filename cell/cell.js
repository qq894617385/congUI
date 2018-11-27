Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },
  properties: {
    // 左边的标题栏
    title: {
      type: String,
      value: "标题一"
    },
    // 右边的描述
    des: {
      type: String,
      value: "header"
    },
    // 字体颜色
    fontColor: {
      type: String,
      value: "#595959"
    },
    // 箭头图标
    arrow: {
      type: Boolean
    }
  },
  methods: {

  }
})