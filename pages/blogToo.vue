<template>
    <section>
        <div class="mx-auto p-2 text-center">
            <h5>well well well...</h5>
            <hr />
            <div v-for="(post, index) in posts" :key="index">
                <time v-html="(new Date(post.sys.createdAt)).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'} )"></time> - <NuxtLink :to="'/blogToo/' + post.fields.slug">{{ post.fields.title }}</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import client from '~/plugins/contentful';

export default ({
    asyncData( params ) {
        return client.getEntries({ content_type: 'oldRanchBlog', order: '-sys.createdAt' })
        .then(entries => { return { posts: entries.items }})
        .catch(e => console.log(e))
    }
})

</script>