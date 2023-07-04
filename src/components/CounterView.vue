<script setup lang="ts">
import { ref, toRefs } from 'vue'

interface Props {
  title: string
  count: number
  increaseCount: () => void
}
const props = defineProps<Props>()

const { title, count, increaseCount } = toRefs(props)
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <h2 for="input">Counter: {{ count }}</h2>
    <button @click="increaseCount">Increase count</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  font-size: 32px;
  width: 500px;
}
button {
  background-color: azure;
  border: 2px solid black;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 24px;
}
button:active {
  background-color: aliceblue;
}
</style>
