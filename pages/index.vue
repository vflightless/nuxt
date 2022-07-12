<template>
  <section id="body-bg" class="flex h-screen w-auto">
      <div class="self-center mx-auto p-10 bg-gray-800 text-center text-green-300 shadow-2xl">
        <h1>Flightless</h1>
        <h6 class="p-2">Flight at the speed of run...</h6>
        <div class="pt-3">
          <NuxtLink class="mt-4 lg:mt-0 mr-4 px-2" to="/about"><fa icon="person-through-window" />&nbsp;About</NuxtLink>
          <NuxtLink class="mt-4 lg:mt-0 mr-4 px-2" to="/blog"><fa icon="book" />&nbsp;Blog</NuxtLink>
          <a class="mt-4 lg:mt-0 mr-4 px-2" href="https://2movie.flightless.io/r/MovieNight"><fa icon="clapperboard" />&nbsp;Cytube</a>
          <hr />
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: "Flightless",
    layout: 'home',
}
</script>

<style scope>
#body-bg {
  height: 100vh;

  background-image: url(~/static/bg-original.jpg);
  background-color: #202020;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>