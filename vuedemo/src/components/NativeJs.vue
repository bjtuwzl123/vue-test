<template>
  <div class="nativeJs">
    <input type="button" @click="goBack">
    <button class="btn btn-info" @click='lang'>start</button>
    <button class="btn btn-info" @click='stop'>stop</button>
    <div>
      <h4 style="color: red">{{msg}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nativeJs',
  data () {
    return {
      msg: 'Shall I compare thee to a summers day,Thou art more lovely and more temperate.No quiero agua 不求一杯水 no quiero copas, 不求众杯酒 sólo quiero un beso 只求一个吻 de tu boca. 来自你的嘴 Una persona como tú 你这样一个人 es difícil de encontrar 难相遇 fácil de querer 易相爱 e imposible de olvidar永不忘',
      intervalId: null,
    }
  },
  methods: {
    lang() {
      if (this.intervalId != null) return;
      this.intervalId = setInterval(() => {
        // 获取第一个字符
        var start = this.msg.substring(0, 1)
        // 获取第一个字符后面的所有字符
        var end = this.msg.substring(1)
        this.msg = end + start
      }, 300)
    },
    // 停止运动
    stop() {
      clearInterval(this.intervalId)
      // 重新赋值null
      this.intervalId = null
    },
    goBack(){
      this.$router.replace('/')
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
