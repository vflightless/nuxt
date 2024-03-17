<template>
  <section class="max-w-sm text-center text-green-300 mx-auto">
    <h1 class="text-2xl font-bold">flightless</h1>
    <h2 class="text-lg">if I want escape, I can escape..</h2>
    <div id="links">
      <NuxtLink to="/blog" class="pr-5 hover:underline">
        <fa icon="fa-solid fa-person-through-window" />&nbsp;<span>blog</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Flightless"
})
</script>