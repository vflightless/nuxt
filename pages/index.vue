<template>
  <section>
    <Navbar />
    <div class="text-center shadow-2xl p-10">
      <h1 class="text-5xl">Flightless</h1>
      <h6 class="text-2xl">Flight at the speed of run...</h6>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/navbar.vue';
export default {
    name: "IndexPage",
    components: { Navbar }
}
</script>
