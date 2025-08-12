<script setup lang="ts">
const { data: posts, pending, error } = await useAsyncData('posts', () => $fetch('/api/blog'))
const selectedTag = ref<string | null>(null)

const postsByYear = computed(() => {
  const map = new Map()
  posts.value?.forEach((post) => {
    const year = new Date(post.sys.firstPublishedAt).getFullYear()
    if (selectedTag.value && !post.tag?.includes(selectedTag.value)) {
      return // Skip posts that don't match selectedTag
    }
    if (!map.has(year)) { map.set(year, []) }
    map.get(year).push(post)
  })
  return new Map([...map.entries()].sort((a, b) => b[0] - a[0]))
})

const allTags = computed(() => {
  const tagSet = new Set<string>()
  posts.value?.forEach((post) => { post.tag?.forEach((tag) => tagSet.add(tag)) })
  return [...tagSet]
})
</script>

<template>
  <section id="blog-list-wrapper">
    <!-- Loading -->
    <div v-if="pending">not so fast...</div>

    <!-- Error -->
    <div v-else-if="error">
      <p>Umm, let me check...</p>
      <p>Error: {{ error?.message }}</p>
    </div>

    <!-- No posts -->
    <div v-else-if="postsByYear && postsByYear.size === 0">
      <p>No posts found.</p>
    </div>

    <!-- Posts -->
    <section v-else-if="postsByYear && postsByYear.size > 0" class="flex flex-col justify-between">
      <h2 class="text-2xl">Latest Blog Posts</h2>

      <!-- Tags -->
      <div class="flex gap-2 mb-4">
        <button v-for="tag in allTags" :key="tag" @click="selectedTag = tag"
          :class="{ 'underline text-white': selectedTag === tag }">
          {{ tag }}
        </button>

        <button v-if="selectedTag" @click="selectedTag = null" class="underline text-sm ml-2">
          Clear Filter
        </button>
      </div>

      <!-- Post list -->
      <div v-for="[year, yearPosts] in postsByYear" :key="year">
        <h2 class="text-xl font-bold mb-2">{{ year }}</h2>
        <ul class="mb-6">
          <li v-for="post in yearPosts" :key="post.slug" class="flex flex-row justify-between">
            <div>
              <span class="text-sm pr-2">
                {{ post.tag ? `>${post.tag}` : '' }}
              </span>
              <NuxtLink :to="`/blog/${post.slug}`">
                {{ post.title }}
              </NuxtLink>
            </div>
            <span class="text-right text-sm">
              {{
                new Date(post.sys.firstPublishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </span>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>
