<template>
  <div class="transition">
    <input type="button" value="animation" @click="animation">
    <input type="button" value="nativeJs" @click="nativeJs">
    <input type="button" value="requestAnimationFrame" @click="requestAnimationFrame">
    <input type="button" value="canvasFrame" @click="canvasFrame">
    <input type="button" value="svgFrame" @click="svgFrame">
    <input type="button" value="toggle" @click="flag=!flag">
    <input type="button" value="toggle2" @click="flag2=!flag2">
    <transition>
        <h3 v-if="flag">这是一个H3</h3>
    </transition>

    <transition  name="my">  <!--区分不同组织间动画-->
        <h6 v-if="flag2">这是一个H6</h6>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      flag : false,
      flag2 : false,
    }
  },
  methods: {
    animation(){
      this.$router.push('/animation')
    },
    nativeJs(){
      this.$router.push('/nativeJs')
    },
    requestAnimationFrame(){
      this.$router.push('/requestAnimationFrame')
    },
    canvasFrame(){
      this.$router.push('/canvasFrame')
    },
    svgFrame(){
      this.$router.push('/svgFrame')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-enter,.v-leave-to{
    opacity:  0;/*透明度*/
    transform: translateX(150px);
}
  /*入场(离场)动画的时间段   */
.v-enter-active,.v-leave-active{
    transition: all 0.8s ease;

}
.my-enter,.my-leave-to{
    opacity:  0;/*透明度*/
    transform: translateY(70px);
}
.my-enter-active,.my-leave-active{
    transition: all 0.8s ease;

}
</style>
