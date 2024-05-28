<script setup>
const { data: posts, pending, error } = await useFetch('/api/blog-posts');

definePageMeta({ layout: 'navigation' })
</script>

<template>
  <section class="mx-auto max-w-2xl rounded-md p-2 md:p-5">
    <div v-if="pending">not so fast...</div>
    <div v-if="!pending && !error">
      <h1 class="text-lg font-bold">posts:</h1>
      <ul class="pl-2" v-for="post in posts.data.blogCollection.items" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`"><li>{{ new Date(post.sys.firstPublishedAt).toLocaleDateString("en-US", {  month: "short",  day: "numeric",  year: "numeric",}) }} - {{ post.title }}</li></NuxtLink>
      </ul>
    </div>
    <div v-if="error" class="text-center p-5">Umm, let me check...: {{ error }}</div>
  </section>
</template>
