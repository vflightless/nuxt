<template>
    <section id="nav-wrapper">
        <nav class="flex flex-row justify-between p-2">
            <NuxtLink to="/"><h1 class="text-2xl font-bold">Flightless</h1></NuxtLink>
            <div id="links">
                <NuxtLink to="/blog" class="pr-3 hover:underline"><span>blog</span></NuxtLink>
            </div>
        </nav>
        <section id="content-wrapper" class="prose dark:prose-invert mx-auto p-4">
            <NuxtPage />
        </section>
    </section>
</template>

<script setup>
useHead({
  title: "Flightless"
})
</script>