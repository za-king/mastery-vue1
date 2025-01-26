<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComp from './components/HeaderComp.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <HeaderComp />
  <RouterView />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped></style>
