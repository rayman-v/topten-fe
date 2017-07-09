<template>
  <div class="tab">
    <button @click="go(item.keyword)" v-for="item in hotlist" :key="item.keyword" :class="{tabBtn: true, in: isIn(item)}">{{item.name}}</button>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      hotlist: []
    }
  },
  computed: {
  },
  methods: {
    go (keyword) {
      keyword = keyword || this.keywords
      if (!keyword || keyword === this.$route.params.keyword) return
      this.$router.push('/list/' + encodeURIComponent(keyword))
      this.$emit('reload')
    },
    isIn (item) {
      return this.$route.params.keyword === item.keyword
    }
  },
  mounted () {
    var _this = this
    this.$http.get('/api/entrance').then(response => {
      if (response.status === 200) {
        _this.hotlist = response.data
      }
    })
  }
}
</script>

<style scoped>
.tab{position: fixed; width: 100%; left: 0; right: 0; bottom: 0; height: 44px; display: flex; z-index: 99; border-top: 1px solid #eee; }
  .tabBtn{flex-grow: 1; background-color: white; border: none; border-right: 1px solid #eee; color: #666;}
  .tabBtn.in{background-color: #5bc0de; color: white; outline:none;}
  .tabBtn:last-child{ border-right: none;}
</style>
