<template>
  <section>
      <div class="max-w-2xl mx-auto px-5">
        <h2 class="text-xl">{{ post.fields.title }}</h2>
        <time v-html="(new Date(post.sys.createdAt)).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'} )"></time>
        <hr />
        <div v-html="$md.render(post.fields.content)"></div>
      </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';
import Navbar from '~/components/navbar.vue';

export default {
    asyncData({ params }) {
        return client.getEntries({
            content_type: "post",
            "fields.slug": params.slug,
        })
            .then(entries => {
            return { post: entries.items[0] };
        })
            .catch(e => console.log(e));
    },
    components: { Navbar }
}
</script>
