<script setup>
import markdownit from 'markdown-it';
const md = markdownit();
const route = useRoute();
const slug = route.params.slug;

const { data: post, pending, error } = await useFetch(`/api/blog-single-post?slug=${slug}`);

useHead({
  titleTemplate: `${post?.value?.title} | Flightless`
})
definePageMeta({ layout: 'navigation',})
</script>

<template>
  <section class="mx-auto max-w-2xl rounded-md p-2 md:p-5">
    <div v-if="pending">not so fast...</div>
    <div v-if="!pending && !error" class="m-2">
      <h1 class="text-lg font-bold">{{ post.title }}</h1>
      <h3>{{ new Date(post.sys.firstPublishedAt).toLocaleDateString("en-US", {  month: "short",  day: "numeric",  year: "numeric",}) }}</h3>
      <div v-html="md.render(post.content)" class="prose prose-invert" />
      <div class="text-small"><NuxtLink to="/blog">< Back to Blog</NuxtLink></div>
    </div>
    <div v-if="error" class="text-center p-5">Umm, let me check...: {{ error }}</div>
  </section>
</template>