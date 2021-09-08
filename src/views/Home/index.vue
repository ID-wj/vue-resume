<template>
  <Contain></Contain>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MdContent from '../../utils/markdown'
import Contain from '@/components/contain.vue'
export default defineComponent({
  components: {
    Contain
  },
  setup() {
    const count = ref(0)
    console.log(MdContent())
    return {
      count
    };
  },
});
</script>