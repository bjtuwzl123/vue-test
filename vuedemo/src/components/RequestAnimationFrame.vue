<template>
<div class="requestAnimationFrame">
    <input type="button" @click="goBack">
    <div
        @mouseenter="enter"
        @mouseleave="leave"
        title="更换皮肤"
        class="theme-trigger"
        :style="`background-position: -${position}px 0`">
    </div>
</div>
</template>

<script>
export default {
  name: 'requestAnimationFrame',
  data () {
    return {
      position: 0,
      is_enter: false,
    }
  },
  methods: {
    goBack(){
      this.$router.replace('/')
    },
    async enter() {
        this.is_enter = true;
        while (this.position !== 522 && this.is_enter) {
            await new Promise(resolve => window.requestAnimationFrame(() => resolve(this.position += 58)));
        }
    },
    async leave() {
        this.is_enter = false;
        while (this.position !== 0 && !this.is_enter) {
            await new Promise(resolve => window.requestAnimationFrame(() => resolve(this.position -= 58)));
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-trigger {
    background-image: url(../assets/trigger.png);
    background-position: 0 0;
    border-radius: 0 4px 0 0;
    cursor: pointer;
    width: 58px;
    height: 49px;
    position: absolute;
    top: 50%;
    right: 50%;
}
</style>
