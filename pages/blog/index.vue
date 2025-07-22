<template>
    <section id="blog-list">
        <h2 class="text-2xl">Latest Blog Posts</h2>
        <div v-if="pending">not so fast...</div>
        <div v-if="data?.blogCollection?.items" class="flex flex-col justify-between">
            <div v-for="item in data.blogCollection.items" :key="item.slug" class="flex flex-row justify-between items-center">
                <NuxtLink :to="`/blog/${item.slug}`" id="nuxt-link">{{ item.title }}</NuxtLink>
                <div>{{ new Date(item.sys.firstPublishedAt).toLocaleDateString("en-US", {  month: "short",  day: "numeric",  year: "numeric",}) }}</div>
            </div>
        </div>
        <div v-else>
            <p>Umm, let me check...</p>
            <p>Error: {{ error.message }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { useFetch } from 'nuxt/app'

const { data, pending, error } = await useFetch('/api/blog')
</script>
