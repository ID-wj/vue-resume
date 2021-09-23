<template>
  <div class="html-box">
    <div class="box">
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    html: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.html-box {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 20px;
  
  .box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    min-height: 99%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    word-break: break-word;
    padding: 0 10px;
  }
}
</style>