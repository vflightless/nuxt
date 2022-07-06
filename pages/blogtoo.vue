<template>
    <section>
        <div class="mx-auto">
            <h4>Latest Posts</h4>
            <hr />
            <div v-for="(post, index) in posts" :key="index">
                <time v-html="(new Date(post.sys.createdAt)).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'} )"></time> - <NuxtLink :to="post.fields.slug">{{ post.fields.title }}</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import client from '~/plugins/contentful';

export default ({
    asyncData( params ) {
        return client.getEntries({
            content_type: 'oldRanchBlog',
            order: '-sys.createdAt'
        }).then(entries => {
            return { posts: entries.items}
        }).catch(e => console.log(e))
    },
    layout: "default",
})

</script>
