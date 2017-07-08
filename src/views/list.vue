<template>
  <div class="List">
    <a v-for="item in links" :href="item.href" class="link">
      <span class="title" v-html="item.title"></span>
      <span class="desc">{{item.desc}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: []
    }
  },
  mounted () {
    var keyword = this.$route.query.keyword
    if (!keyword) return
    var _this = this
    this.$http.get('/api/list', {
      params: {
        keyword: keyword
      }
    }).then(response => {
      if (response.status === 200) {
        _this.links = response.data
      }
    }, response => {

    })
  }
}
</script>

<style>
  .List{margin: 16px;}
  .List .link{display: block; text-decoration: none; color: #292b2c; padding: 8px; box-shadow: 0 1px 1px #ccc; margin-bottom: 6px;}
  .List .title{display: block; padding: 8px 0 12px;}
  .List .title>em{ color: #a9a9a9; font-size: 12px; margin-left: 10px;}
  .List .desc{display: block; font-size: 14px; padding: 0 16px; color: #999; line-height: 1.4;}
</style>
