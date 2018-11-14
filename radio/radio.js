Component({
    properties: {
        Array: {
            type: Array,
            value: "",
            observer: function (newVal, oldVal, changedPath) {
                this.init(newVal)
            }
        }
    },
    data: {
        Arr: []
    },
    methods: {
        // 点击选择
        select(e) {
            const id = e.currentTarget.dataset.id
            const Arr = this.data.Arr;
            // 初始化数组
            for (let i = 0; i < Arr.length; i++) {
                Arr[i].check = false
            }
            // 选择选择定的数值
            Arr[id].check = true;
            // 弹出选择值
            this.setData({
                Arr: Arr
            })
            // 弹出函数
            this.triggerEvent("output", {
                val: Arr[id]
            });
        },
        // 初始化数组
        init(value) {
            console.log("传入数值", value)
            let data = value;
            for (let i = 0; i < data.length; i++) {
                data[i].check = false;
            }
            data[0].check = true;
            this.setData({
                Arr: data
            })
        }
    }
})