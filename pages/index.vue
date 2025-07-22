<template>
  <div>
    <h1 class="text-3xl font-bold">Flightless</h1>
    <div id="links">
      <NuxtLink to="/blog" class="">Blog</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>