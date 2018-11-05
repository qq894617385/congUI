Component({
  properties: {
    text: {
      value: "",
      type: String
    },
    backgroundColor: {
      value: "",
      type: String
    },
    color: {
      value: "",
      type: String
    },
  },
  data: {
    show: false
  },
  methods: {
    touchStart() {
      const that = this;
      that.setData({
        show: true
      })
    },
    touchEnd(){
      this.setData({
        show: false
      })
    }
  }
})