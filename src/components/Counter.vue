<script setup lang="ts">
import CounterView from './CounterView.vue'

import CounterHook from './CounterHook'
// const { count, increaseCount } = { ...CounterHook() }
</script>

<template><CounterView v-bind="{ ...CounterHook() }" /></template>
