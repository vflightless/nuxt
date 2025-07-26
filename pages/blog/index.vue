<template>
  <div>
    <h2 class="text-2xl">Latest Blog Posts</h2>
    <label>Sort by Date:</label>
    <select v-model="order" @change="updateQuery" class="m-1 p-2 rounded-sm">
      <option value="DESC">Newest First</option>
      <option value="ASC">Oldest First</option>
    </select>
  </div>

  <ul class="list-none">
    <li v-for="post in items" :key="post.slug">
        <div class="flex flex-row justify-between items-center">
            <span>{{ post.title }}</span>
            <span class="text-right">{{ new Date(post.sys.firstPublishedAt).toLocaleDateString("en-US", {  month: "short",  day: "numeric",  year: "numeric",}) }}</span>
        </div>
    </li>
  </ul>

  <div class="flex justify-between">
    <button @click="page-- && updateQuery()" :disabled="page <= 1">
      Previous
    </button>
    <span>Page {{ page }} of {{ Math.ceil(total / limit) }}</span>
    <button @click="page++ && updateQuery()" :disabled="page >= Math.ceil(total / limit)">
      Next
    </button>
  </div>
</template>


<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const page = ref(Number(route.query.page) || 1)
const order = ref((route.query.order as string) === 'ASC' ? 'ASC' : 'DESC')

const limit = 5

const { data, pending, error } = await useFetch(() => `/api/blog?page=${page.value}&limit=${limit}&order=${order.value}`)

const items = computed(() => data.value?.items || [])
const total = computed(() => data.value?.total || 0)

function updateQuery() {
  router.replace({
    query: { page: String(page.value), order: order.value },
  })
}
</script>



<!--
<template>
    <section id="blog-list">
        
        <div v-if="pending">not so fast...</div>
        <div v-if="items" class="flex flex-col justify-between">
            <div>
                <label>Sort by Date:</label>
                <select v-model="order" @change="updateQuery">
                    <option value="DESC">New</option>
                    <option value="ASC">Old</option>
                </select>
            </div>
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
-->