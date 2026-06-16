<template>
  <img
    :src="currentSrc"
    :alt="alt"
    :loading="loading"
    @error="onError"
  />
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  loading: { type: String, default: 'lazy' }
})

const fallback = `${import.meta.env.BASE_URL}images/placeholder.jpg`
const currentSrc = ref(props.src)

watch(() => props.src, (val) => {
  currentSrc.value = val
})

function onError() {
  if (currentSrc.value !== fallback) {
    currentSrc.value = fallback
  }
}
</script>
