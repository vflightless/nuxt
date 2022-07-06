<template>
  <section id="body-bg" class="flex h-screen w-auto">
      <div class="self-center bg-white text-center shadow-2xl mx-auto p-10">
        <h1 class="text-5xl">Flightless</h1>
        <h6 class="text-2xl p-2">Flight at the speed of run...</h6>
        <div class="pt-3">
          <nuxt-link class="mt-4 lg:mt-0 mr-4 hover:text-bold" to="/about">About</nuxt-link>
          <nuxt-link class="mt-4 lg:mt-0 mr-4" to="/blog">Blog</nuxt-link>
          <hr />
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

<style scope>
  #body-bg {
    height: 100vh;

    background-image: url(~/static/bg-original.jpg);
    background-color: #202020;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>