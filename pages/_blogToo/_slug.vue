<template>
  <section>
      <div class="mx-auto px-5">
        <h2 class="text-xl">{{ post.fields.title }}</h2>
        <time v-html="(new Date(post.sys.createdAt)).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'} )"></time>
        <hr />
        <div v-html="$md.render(post.fields.content)"></div>
      </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData({ params }) {
      return client.getEntries({ content_type: "oldRanchBlog", "fields.slug": params.slug, })
          .then(entries => { return { post: entries.items[0] }; })
          .catch(e => console.log(e));
  }
}
</script>

<style>
  p { @apply pb-2; }
  blockquote { @apply mx-auto; @apply p-2; @apply text-center;@apply italic; }
</style>