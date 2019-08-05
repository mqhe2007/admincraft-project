<template>
  <div class="home">
    <!-- 加载动态组件 -->
    <component :is="$store.state.dynamicComponent.GLOBAL.logo"></component>
    <HelloWorld msg="Vue + Admincraft = Micro Front-end"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
