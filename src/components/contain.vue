<template>
  <div class="contain">
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-main">
      <Content></Content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header.vue'
import Content from './content.vue'

export default defineComponent({
  components: {
    Header,
    Content
  }
})
</script>

<style lang="scss" scoped>
.contain {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .layout-header {
    height: 50px;
    display: flex;
    align-items: center;
    background: chartreuse;
  }

  .layout-main {
    flex: 1;
    padding: 20px;
  }
}
</style>