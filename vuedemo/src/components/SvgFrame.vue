<template>
  <div class="svgFrame">
    <input type="button" @click="goBack">
    <svg width="300px" height="175px" version="1.1">
        <path fill="transparent" stroke="#888888" stroke-width="1" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="path">
        </path> 
    </svg> 
    <div class="ball"></div>
  </div>
</template>

<script>
export default {
  name: 'svgFrame',
  data () {
    return {

    }
  },
  methods: {
    goBack(){
      this.$router.replace('/')
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
svg {
    width: 300px;
    display: block;
    position: absolute;
}
.ball {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    offset-path: path('M10 80 Q 77.5 10, 145 80 T 280 80');
    offset-distance: 0%;
    animation: red-ball 2s linear alternate infinite;
} 
@keyframes red-ball {
    from { offset-distance: 0%; } 
    to { offset-distance: 100%; } 
    }
</style>
