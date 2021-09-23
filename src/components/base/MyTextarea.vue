<template>
  <div class="textarea-box">
    <textarea class="textarea" v-bind:value="modelValue" @input.stop="handleInput" :style="style"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    resize: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const style = computed(() => {
      return `resize: ${props.resize}`
    })

    return { style }
  },
  methods: {
    handleInput(e: any) {
      this.$emit('update:modelValue', e.target.value)
      this.$emit('input', e.target.value)
    }
  }
})

</script>

<style lang="scss" scoped>
.textarea-box {
  box-sizing: border-box;
  height: 100%;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 6px;
  .textarea {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-size: 18px;
    border: none;
    outline: oldlace;
    font-family: system-ui;
  }
  // .textarea:focus {
  //   border: none;
  // }
}
</style>