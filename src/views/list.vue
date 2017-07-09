<template>
  <div class="list">
    <a v-for="(item, index) in links" :key="item.href" :href="item.href" :class="{link: true, onlyTitle: !item.pic && !item.desc}">
      <div class="rank">{{index+1}}</div>
      <div v-if="item.pic" class="pic"><img :src="item.pic"></div>
      <div class="right">
        <span class="title">{{item.title}} <em>{{item.hot}}</em></span>
        <span class="desc" v-if="item.desc">{{item.desc}}</span>
      </div>
    </a>
    <tab @reload="reload()"></tab>
  </div>
</template>

<script>
import Tab from '../components/tab.vue'
export default {
  data () {
    return {
      links: []
    }
  },
  methods: {
    reload () {
      var keyword = this.$route.params.keyword
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
        _this.$('html,body').scrollTop(0)
      }, response => {

      })
    }
  },
  mounted () {
    this.reload()
  },
  components: {
    Tab
  }
}
</script>

<style scoped>
  .list{margin: 8px; padding-bottom: 40px;}
  .link{display: flex; align-items: flex-start; text-decoration: none; color: #292b2c; margin-bottom: 6px; border-radius: 4px; padding: 8px; background-color: #fafafa; position: relative; min-height: 60px;}
  .link.onlyTitle{align-items: center;}
  .link.onlyTitle .title{font-size: 16px;}
  .pic{ font-size: 0; border-radius: 4px; overflow: hidden; display: flex; width: 100px; height: 60px; flex-shrink: 0; justify-content: center; align-items: center; margin-right: 8px;}
  .pic>img{width: 100%; display: block; border-radius: 4px; }
  .right{ display: block; position: relative; z-index: 2;}
  .title{display: block; font-size: 14px; padding: 0;}
  .title>em{font-size: 12px; color: #999; }
  .desc{display: block; font-size: 12px; margin-top: 8px; color: #999; line-height: 1.4; max-height: 48px; overflow: hidden;}
  .rank{position: absolute; top: 50%; transform: translate(0, -50%); right: 15px; color: #eaeaea; font-size: 70px; z-index: 1;}
</style>
