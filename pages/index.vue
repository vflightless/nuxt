<template>
  <section class="flex h-screen w-auto">
      <div class="self-center text-center shadow-2xl mx-auto p-10">
        <h1 class="text-5xl">Flightless</h1>
        <h6 class="text-2xl p-2">Flight at the speed of run...</h6>
        <div class="pt-3">
          <nuxt-link class="mt-4 lg:mt-0 mr-4" to="/about">About</nuxt-link>
          <nuxt-link class="mt-4 lg:mt-0 mr-4" to="/blog">Blog</nuxt-link>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: "IndexPage",
    layout: 'home',
}
</script>
