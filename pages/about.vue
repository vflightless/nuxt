<template>
  <section>
      <div class="mx-auto px-5">
        <div id="md" v-html="$md.render(post.fields.content)"></div>
      </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData({ params }) {
      return client.getEntries({ content_type: "about" })
          .then(entries => { return { post: entries.items[0] }; })
          .catch(e => console.log(e));
  }
}
</script>

<style>
  p { @apply pb-2; }
  blockquote { @apply mx-auto; @apply p-2; @apply text-center;@apply italic; }
</style>