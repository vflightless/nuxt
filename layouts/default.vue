<template>
    <section>
        <Navbar />
        <section class="max-w-2xl mx-auto md:px-10">
            <Nuxt />
        </section>
    </section>
</template>

<script>
import Navbar from '~/components/navbar.vue';

export default {
    components: { Navbar }
}
</script>