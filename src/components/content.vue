<template>
  <div class="content-box">
    <div class="left">
      <!-- <textarea v-model="value" type="textarea" @input="handleInput"></textarea> -->
      <MyTextarea v-model="value" @input="handleInput" resize="none"></MyTextarea>
    </div>
    <div class="right">
      <MyMarkdown :html="html"></MyMarkdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import MyTextarea from './base/MyTextarea.vue'
import MyMarkdown from './base/MyMarkdown.vue'
import MdContent from '../utils/markdown'

export default defineComponent({
  components: {
    MyTextarea,
    MyMarkdown
  },
  setup() {
    const value = ref('')
    let html = ref('')
    watchEffect(() => {
      html.value = MdContent(value.value)
    })
    const handleInput = (e: any) => {
      console.log(e)
      // console.log(value.value)
    }
    return { value, html, handleInput }
  },
  methods: {
    
  }

})
</script>

<style lang="scss" scoped>
.content-box {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  overflow: hidden;
  .left {
    width: 50%;
    max-width: 700px;
    min-width: 400px;
    height: 100%;
  }
  .right {
    flex: 1;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>