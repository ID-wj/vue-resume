<template>
  <div>{{count}}</div>
  <input type="textarea" v-model="count"/>
  <NButton>hahahh</NButton>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MdContent from '../../utils/markdown'
export default defineComponent({
  setup() {
    const count = ref(0)
    console.log(MdContent())
    return {
      count
    };
  },
});
</script>