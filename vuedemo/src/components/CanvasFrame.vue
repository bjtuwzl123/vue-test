<template>
<div class="canvasFrame">
    <input type="button" @click="goBack">
    <div id="index" class="index">
        <canvas id="canvas"></canvas>
        <br />
        总值
        <input
            v-model="total"
            style="width:100px"
            placeholder="请输入内容"
        ></input>
        输入值
        <input
            v-model="now"
            :max="total"
            style="width:100px"
            placeholder="请输入内容"
        ></input>
        <button type="primary" @click="btnClick">主要按钮</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'canvasFrame',
  data () {
    return {
        cvs: "", //画布
        ctx: {},
        total: 200, //总数
        now: "", //现数
        oldNumber: 0, //老值
        newNumber: 0, //新值
        proportion: "", //占比,
    }
  },
  methods: {
    goBack(){
      this.$router.replace('/')
    },
    btnClick() {
        this.proportion =
            (Number(this.now) / Number(this.total)) * Number(this.cvs.width); //比例：一份占多长
        this.newNumber = this.now;
        if (this.newNumber > this.total) {
            console.warn("超了");
        } else {
            if (Number(this.newNumber) > Number(this.oldNumber)) {
                this.drivingChange(
                    Number(this.oldNumber),
                    Number(this.newNumber),
                    Number(this.now) / Number(this.total),
                    "++"
                );
                //增加
            } else if (Number(this.newNumber) < Number(this.oldNumber)) {
                //减少
                this.drivingChange(
                    Number(this.oldNumber),
                    Number(this.newNumber),
                    Number(this.now) / Number(this.total),
                    "--"
                );
            } else {
                console.warn("无变化");
            }
        }
    },
    drivingChange(oldVal, newVal, proportion, type) {
        //驱动改变（旧值，新值，百分比，加还是减方式）
        // console.warn(oldVal, newVal);
        var ss = oldVal;
        var that = this;
        var timer = setInterval(function() {
            that.clearRect();
            if (type == "++") {
                that.dram(ss++, proportion);
                if (ss > newVal) {
                    clearInterval(timer);
                }
            } else {
                that.dram(ss--, proportion);
                if (ss < newVal) {
                    clearInterval(timer);
                }
            }
        }, 10);
        this.oldNumber = newVal;
    },
    dram(i, proportion) {
        //画图
        this.ctx.fillStyle = "#7fecc1";
        /*矩形填充方法：fillRect(x,y,w,h)*/
        this.ctx.fillRect(51, 51, i - 2, 58); //i-2是为了去除掉边框空隙的
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.font = "26px 黑体";
        this.ctx.fillText(i, 120, 70);
        this.ctx.font = "16px 黑体";
        this.ctx.fillText("基础**", 120, 95);
        this.ctx.font = "30px 黑体";
        this.ctx.fillText(proportion * 100 + "%", 200, 80);
    },
    clearRect() {
        /*清理矩形方法：clearRect(x,y,w,h)*/
        this.ctx.clearRect(50, 50, 200, 60);
    },
    initCanvas() {
        //加载并绘制模型
        this.cvs = document.getElementById("canvas");
        //设置长宽
        this.cvs.width = 400;
        this.cvs.height = 400;
        //获取画笔
        this.ctx = this.cvs.getContext("2d");
        //===============================填充矩形方法
        /*填充矩形方法：fillRect(x,y,w,h)*/
        this.ctx.fillStyle = "#7fecc1";
        //===============================填充矩形方法

        //===============================描边矩形
        /*描边矩形方法：strokeRect(x,y,w,h)*/
        this.ctx.strokeStyle = "#7fecc1";
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(50, 50, 200, 60);
        //===============================描边矩形

        //===============================文字
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.font = "26px 黑体";
        this.ctx.fillText("00", 120, 70);
        this.ctx.font = "16px 黑体";
        this.ctx.fillText("基础**", 120, 95);
        this.ctx.font = "30px 黑体";
        this.ctx.fillText("00%", 200, 80);
        //===============================文字
    },

  },
  mounted() {
      // 页面进入时加载内容
      this.initCanvas();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
    background-color: antiquewhite;
}
</style>
