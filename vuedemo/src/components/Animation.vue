<template>
  <div class="animation">
    <input type="button" @click="goBack">
    <div class="basic" id="div1">
        hello world.
    </div>

    <button type="button" @click="running">启动动画</button>
    <button type="button" @click="paused">暂停动画</button>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  data () {
    return {
    }
  },
  methods: {
    goBack(){
      this.$router.replace('/')
    },
    running(){
        console.log("点击按钮。。。");
        const div = document.getElementById("div1");
        if(div.classList.contains("paused")){
            div.classList.remove("paused");
        }
        div.classList.add("running");
    },
    paused(){
        console.log("点击按钮。。。");
        const div = document.getElementById("div1");
        if(div.classList.contains("running")){
            div.classList.remove("running");
        }
        div.classList.add("paused");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic{
    background-color: red;
}
@keyframes animate1
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}
.animate2 {
    animation: animate1 5s;
}
.paused {
    animation-play-state: paused;
}
.running {
    animation: animate1 5s infinite;
    animation-play-state: running;
}
</style>
