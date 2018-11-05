Component({
    behaviors: [],

    properties: {
        // 背景颜色
        backgroundColor: {
            type: String,
            value: ""
        },
        // 中间颜色
        middleColor: {
            type: String,
            value: ""
        },
        // 头部高度
        headerHeight: {
            type: String,
            value: "250rpx"
        },
        // 底部高度
        footerHeight: {
            type: String,
            value: "0"
        }
    },
    data: {}, // 私有数据，可用于模板渲染
    attached: function () {
        console.log(this.properties.backgroundColor)
    },
    ready: function () {
        // console.log(123456)
    },
    methods: {

    }
})