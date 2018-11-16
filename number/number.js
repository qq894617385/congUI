// 设置定时函数
let timer;
Component({
    properties: {
        // 目标数值
        target: {
            type: Number,
            value: 99659,
        }
    },
    data: {
        // 展示的数字
        number: "",
        // 目标数组
        targetArr: [],
        // 当前数组
        Arr: []
    },
    ready() {
        const that = this;
        // 先执行处理函数
        this.handle();
        // 系时候开始自己增值咯啵
        timer = setInterval(() => {
            that.updata()
        }, 50)
    },
    methods: {
        // 更新新函数
        updata() {
            const that = this;
            for (let i = 0; i < this.data.targetArr.length; i++) {
                // 获取目标位数上面的数字
                let target = parseInt(that.data.targetArr[i], 10);
                // 获取当前位数上面的数字
                let number = parseInt(that.data.Arr[i], 10)
                // 判断是否需要继续增加
                if (number < target) {
                    number++;
                }
                // 还原数组
                let readArr = that.data.Arr;
                number = number + "";
                readArr[i] = number;
                that.setData({
                    Arr: readArr
                })
            }
            // 更新当前显示数组
            let Arr = this.data.Arr;
            // 合并数组
            Arr = Arr.join("")
            // 存储数组
            this.setData({
                number: Arr
            })
            // 判断是否和目标数字一致
            if (Arr == that.properties.target) {
                clearInterval(timer)
            }
        },
        // 处理函数
        handle() {
            // 获取输入的数字
            let number = this.properties.target;
            // 修改成字符串格式
            number = number + "";
            // 分割字符串
            let targetArr = number.split("");
            // 设置目标函数
            this.setData({
                targetArr: targetArr
            })
            // 设置函数
            let Arr = [];
            // 初始化当前数组
            for (let i = 0; i < targetArr.length; i++) {
                Arr.push("0")
            }
            // 设置当前数组
            this.setData({
                Arr: Arr
            })
        }
    }
})