<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-home",
  data() {
    return {
      page_title: "Blog",
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
        })
        .then(res => {
          this.posts = res.data.data;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<template>
  <div id="blog-home">
    <h1>{{ page_title }}</h1>
    <!-- `v-for` の生成、および Vue 用に `key` 属性の適用。ここでは、slug と index の組みを使用します -->
    <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
      <router-link :to="'/blog/' + post.slug">
        <article class="media">
          <figure>
            <!-- `:` による結果のバインディング -->
            <!-- `featured_image` を使うかどうかは、`v-if`/`else` で判定します -->
            <img v-if="post.featured_image" :src="post.featured_image" alt>
            <img v-else src="http://via.placeholder.com/250x250" alt>
          </figure>
          <h2>{{ post.title }}</h2>
          <p>{{ post.summary }}</p>
        </article>
      </router-link>
    </div>
  </div>
</template>