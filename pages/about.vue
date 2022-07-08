<template>
  <section>
      <div class="max-w-2xl mx-auto px-5">
        <div v-html="$md.render(post.fields.content)"></div>
      </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';

export default {
    asyncData({ params }) {
        console.log(params);
        return client.getEntries({ content_type: "about" })
            .then(entries => { return { post: entries.items[0] }; })
            .catch(e => console.log(e));
    }
}
</script>
