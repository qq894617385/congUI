Component({
  properties: {
    step: {
      type: Array,
      value: [{
        name: "步骤一",
        done: true
      },
      {
        name: "步骤二",
        done: true
      },
      {
        name: "步骤三",
        done: true
      },
      {
        name: "步骤四",
        done: false
      }]
    },
    color: {
      type: String,
      value: "skyblue"
    }
  },
  data: {
    Arr: [{
      name: "步骤一",
      done: true
    },
    {
      name: "步骤二",
      done: true
    },
    {
      name: "步骤三",
      done: true
    },
    {
      name: "步骤四",
      done: false
    }
    ],
    Arr1: [],
    Arr2: []
  },
  ready() {
    // 输入覆盖数组
    this.setData({
      step: this.properties.step
    })
    // 取出数组
    let Arr = this.data.Arr;
    // 分割数组
    let Arr1 = Arr.slice(0, 1);
    let Arr2 = Arr.slice(1);
    this.setData({
      Arr1: Arr1,
      Arr2: Arr2
    })
  },
  methods: {

  }
})