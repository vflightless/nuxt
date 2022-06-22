<template>
    <nav class="flex items-center justify-between flex-wrap text-white bg-gray-800 p-6 shadow-xl">
        <div class="flex items-center flex-shrink-0 mr-6">
            <nuxt-link to="/" ><span class="font-semibold text-xl tracking-tight">Flightless</span></nuxt-link>
        </div>
        <div class="block lg:hidden">
            <button @click="fun" class="flex items-center px-3 py-2 border rounded hover:text-underline hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        
        <div id="navtoggle" class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="lg:flex-grow">
                <nuxt-link class="block mt-1 rounded lg:inline-block lg:mt-0 mr-4 p-2 hover:bg-gray-900" to="/">Home</nuxt-link>
                <nuxt-link class="block mt-1 rounded lg:inline-block lg:mt-0 mr-4 p-2 hover:bg-gray-900" to="/about">About</nuxt-link>
                <nuxt-link class="block mt-1 rounded lg:inline-block lg:mt-0 mr-4 p-2 hover:bg-gray-900" to="/blog">Blog</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        methods: {
            fun: function navToggle() {
                document.getElementById('navtoggle').classList.toggle("hidden");
                console.log("shiiiiit");
            }
        }
    }
</script>