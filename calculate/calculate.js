// 检测小数点
let ponit = false;

Component({
  data: {
    key: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "C",
      "0",
      "."
    ],
    // 屏幕上显示的字符
    showStr: "",
    res: ""
  },
  methods: {
    key(e) {
      // 是否刷新
      let update = true;
      const that = this;
      // 输入键
      const key = e.currentTarget.dataset.key;
      // 显示的屏幕字符
      let showStr = this.data.showStr;
      // 前一个输入字符
      const last = showStr.slice(showStr.length - 1);
      // 监听输入
      switch (key) {
        // 清空
        case 'C':
          that.clear();
          update = false;
          break;
          // 运算显示上面的字符串
        case '=':
          that.cal();
          break;
          // 删除键
        case 'del':
          // 正常的回删功能
          showStr = showStr.slice(0, showStr.length - 1);
          break;
          // 输入小数点  
        case '.':
          // 如果小数点已经存在了弹出
          if (ponit) {
            break;
          } else {
            // 查看前一位是否是数字
            let loard = last.search(/[0-9]+/);
            // 查找结果
            if (loard != -1) {
              // 前面输入的是数字,则允许输入
              showStr = showStr + key;
              // 更变了小数点输入模式
              ponit = true
            } else {
              // 前面输入的不是数字
            }
          }
          break;
          // 运算键
        case '+':
        case '-':
        case '×':
        case '÷':
          // 更改小数点模式
          ponit = false;
          // 检测之前是不是已经输入了运算符号
          console.log(last.length, '最后', showStr)
          if (that.data.showStr.length <= 0) {
            // 之前就没有输入,所以说就不能以"运算符号开头"
            break;
          }

          if (last == '+' || last == '-' || last == '×' || last == '÷') {
            // 退一格
            showStr = showStr.slice(0, showStr.length - 1);
          }
          // 数字功能键
        default:
          showStr = showStr + key
          break;
      }
      // 是否刷新
      if (update) {
        // 先叠加到屏幕
        that.setData({
          showStr: showStr
        })
      }
    },
    // 计算函数
    cal() {
      const that = this;

      console.log("开始结算");
      // 显示板
      const showStr = this.data.showStr;
      // 获取数字数组
      let numArr = showStr.match(/\d+(\.\d+)?/g);
      console.log(numArr)
      // 如果输入为空
      if (showStr.length <= 0) {
        return;
      };
      // 如果输入的数据只是数字
      if (numArr.length <= 1) {
        that.setData({
          res: numArr[0]
        })
        return;
      }
      // 获取运算字符串
      let calArr = showStr.match(/[\\+\-\\×\\÷]/g);
      console.log(calArr)
      // 确定循环次数
      let length = numArr.length
      // 执行运算
      for (let i = 0; i < length; i++) {
        // 当前处理的位置
        let index;
        // 先乘除,后加减
        // 第一次出现除法位置
        const rideIndex = calArr.indexOf("×")
        // 第一次出现乘法位置
        const divideIndex = calArr.indexOf("÷")
        // 确定先后顺序
        if (rideIndex >= 0 && divideIndex >= 0) {
          // 如果x 或者 ÷ 都有,输出靠前的
          index = Math.min(rideIndex, divideIndex);
        } else {
          // 如果x 或者 ÷ 有一个 不出最大的,怎不需要判断
          index = Math.max(rideIndex, divideIndex);
        }
        console.log(index, "第一次出现二级运算")
        // 判断运算符号
        if (index < 0) {
          // 证明已经没有乘除法了
          break;
        } else {
          // 先做乘除法运算
          // 找到被乘数
          const x = parseFloat(numArr[index]);
          // 找到乘数
          const y = parseFloat(numArr[index + 1]);
          console.log(x, y);
          // 设置得数
          let total;
          if (calArr[index] == '×') {
            // 乘法运算
            total = x * y;
          } else {
            // 除法运算
            total = x / y;
            // 保留四位小数
            total = total.toFixed(4);
            // 去除零小数点
            total = parseFloat(total)
          }
          // 刷新数组
          numArr[index + 1] = total;
          console.log(total)
          // 删除元素
          calArr.splice(index, 1);
          numArr.splice(index, 1);
          console.log(calArr)
          console.log(numArr)
        }
      }
      // 执行加减运算
      let res = parseFloat(numArr[0]);
      for (let i = 0; i < calArr.length; i++) {
        if (calArr[i] == '+') {
          // 加法运算
          res = res + parseFloat(numArr[i + 1])
        } else {
          res = res - parseFloat(numArr[i + 1])
        }
      }
      console.log(res, '得数')
    },
    clear() {
      console.log("清空函数")
      // 清空数据
      this.setData({
        showStr: ""
      })
      console.log(this.data.showStr)
      // 还原小数输入
      ponit = false;
    }
  }
})