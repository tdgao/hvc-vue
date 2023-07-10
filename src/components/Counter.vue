<script setup lang="ts">
import CounterView from './CounterView.vue'
import CounterHook from './CounterHook'
</script>

<template>
  <CounterView v-bind="{ ...CounterHook() }">
    <template #hello></template>
    <template #custom-slot-here></template>
    <template #custom-slot></template>
    <template #custom></template>
  </CounterView>
</template>
