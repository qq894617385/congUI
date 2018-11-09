Component({
    properties: {
        // 传入数组
        Arr: {
            type: Array,
            value: []
        }
    },
    data: {
        // 左边单元格所需要的白封闭
        left: 0,
        // 右边遮掩的百分比
        right: 0,
        // 单元格总数
        total: 0,
        // 当前选中的单元格
        in: 1,
        // 一个单元格的百分比
        width: 100
    },
    ready() {
        // 先处理好单元格的百分比
        this.setData({
            total: this.properties.Arr.length
        })
        // 计算没个单元格宽度
        let width = parseFloat(100 / this.data.total);
        this.setData({
            width: width
        })
        // 刷新左右距离
        this.reflash();
    },
    methods: {
        changeIn(e) {
            this.setData({ in: e.currentTarget.dataset.id
            })
            this.reflash();
            // 反馈给父级,当前显示的index
            this.triggerEvent("change", {
                val: e.currentTarget.dataset.id
            })
        },
        // 计算左右距离函数
        reflash() {
            this.setData({
                left: this.data.in - 1,
                right: this.data.total - this.data.in,
            })
        }
    }
})