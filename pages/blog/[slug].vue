<script setup>
import { marked } from 'marked'
import {useRoute } from '#vue-router'

const route = useRoute()
const { data: post, pending, error } = await useAsyncData(() =>
  $fetch(`/api/slug/${route.params.slug}`)
)
const md = computed(() => {
  if (post.value?.content) {
    return marked.parse(post.value.content)
  }
  return 'md error'
})

definePageMeta({
  title: 'Blog Post',
})
</script>


<template>
  <!-- Start of Post -->
  <section id="post-content">
    <!-- Pending Load -->
    <div v-if="pending">not so fast...</div>

    <!-- Display Error Message -->
    <div v-else-if="error">
      <p>Umm, let me check...</p>
      <p>Error: {{ error?.message }}</p>
    </div>

    <div v-else>
      <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
        <span class="text-sm text-gray-500 mb-8">Published: {{ new Date(post?.sys?.firstPublishedAt).toLocaleDateString("en-US", {  month: "short",  day: "numeric",  year: "numeric",}) }}</span>
        <br />
        <div v-if="md" v-html="md" />
        <p v-else>Loading...</p>
        <NuxtLink to="/blog">< back</NuxtLink>
    </div>
  </section>
  <!-- End of Post -->
</template>