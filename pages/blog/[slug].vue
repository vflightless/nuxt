<script setup>
import markdownit from 'markdown-it';
const md = markdownit();
const route = useRoute();
const slug = route.params.slug;

const { data: post, pending, error } = await useFetch(`/api/blog-single-post?slug=${slug}`);

useHead({
  titleTemplate: `${post.title} | Flightless`
})
</script>

<template>
  <section class="mx-auto max-w-2xl rounded-md p-2 md:p-5">
    <div v-if="pending">not so fast...</div>
    <div v-if="!pending && !error" class="m-2">
      <h1 class="text-lg font-bold">{{ post.title }}</h1>
      <div v-html="md.render(post.content)" />
    </div>
    <div v-if="error" class="text-center p-5">
        An error hath occurred whilst fetching thine data...
    </div>
  </section>
</template>