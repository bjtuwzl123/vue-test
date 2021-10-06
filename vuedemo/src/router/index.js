import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Animation from '@/components/Animation'
import NativeJs from '@/components/NativeJs'
import RequestAnimationFrame from '@/components/RequestAnimationFrame'
import CanvasFrame from '@/components/CanvasFrame'
import SvgFrame from '@/components/SvgFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/nativeJs',
      name: 'NativeJs',
      component: NativeJs
    },
    {
      path: '/requestAnimationFrame',
      name: 'RequestAnimationFrame',
      component: RequestAnimationFrame
    },
    {
      path: '/canvasFrame',
      name: 'CanvasFrame',
      component: CanvasFrame
    },
    {
      path: '/svgFrame',
      name: 'SvgFrame',
      component: SvgFrame
    }
  ]
})
