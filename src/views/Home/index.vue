<template>
  <Contain></Contain>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Contain from '@/components/contain.vue'
export default defineComponent({
  components: {
    Contain
  },
  setup() {
    const count = ref(0)
    return {
      count
    };
  },
});
</script>