<script setup lang="ts">
import { ref } from 'vue'
import CounterView from './CounterView.vue'

const count = ref(0)
const increaseCount = () => {
  count.value++
}
</script>

<template>
  <CounterView :title="'test title'" :count="count" :increase-count="increaseCount" />
</template>
