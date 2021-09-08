<template>
  <div class="contain">
    <NLayout position="absolute">
      <NLayoutHeader bordered class="layout-header">ahhaahah</NLayoutHeader>
      <NLayout>
        <NLayoutContent>
          <div style="height: 100%;background: chartreuse;">hah</div>
          <!-- <NButton>contain</NButton> -->
        </NLayoutContent>
      </NLayout>
    </NLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.contain {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .layout-header {
    height: 50px;
    display: flex;
    align-items: center;
  }
}
</style>