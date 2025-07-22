<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
    <span class="text-sm text-gray-500 mb-8">Published: {{ new Date(post.sys.firstPublishedAt).toLocaleDateString("en-US", {  month: "short",  day: "numeric",  year: "numeric",}) }}</span>
    <br />
    
    <div v-if="htmlContent" v-html="htmlContent" />
    <p v-else-if="error">Error loading post.</p>
    <p v-else>Loading...</p>
    <NuxtLink to="/blog">< back</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { NuxtLink } from '#components'

const route = useRoute()
const slug = route.params.slug

const { data: post, error } = await useFetch(`/api/slug`, {
  query: { slug },
})

const htmlContent = computed(() => {
  if (post.value?.content) {
    return marked.parse(post.value.content)
  }
  return ''
})

definePageMeta({
  title: 'Blog Post',
})
</script>