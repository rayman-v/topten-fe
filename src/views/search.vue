<template>
  <div class="search">
    <!--<div class="bar">-->
      <!--<input class="searchInp" placeholder="请输入关键字" type="text" v-model="keywords">-->
      <!--<button class="searchBtn" @click="search()">搜索</button>-->
    <!--</div>-->
    <div class="tip">热门：</div>
    <div class="hot">
      <button @click="search(item.keyword)" v-for="item in hotlist" :key="item.keyword">{{item.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      keywords: '',
      hotlist: []
    }
  },
  computed: {
  },
  methods: {
    search (keyword) {
      keyword = keyword || this.keywords
      if (!keyword) return
      this.$router.push('/list?keyword=' + encodeURIComponent(keyword))
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
  .search{}
  .bar{display: flex; height: 40px; margin: 16px;}
  .searchInp{flex-grow: 1; border: 1px solid #ccc; font-size: 14px; padding: 4px; border-right: 0; border-radius: 2px 0 0 2px;}
  .searchBtn{width: 50px; background-color: #fff; border: 1px solid #ccc; border-radius: 0 2px 2px 0; color: #292b2c; font-size: 14px;}
  .tip{margin: 16px; font-size: 14px; color: #aaa;}
  .hot{ margin: 16px; display: flex; flex-wrap: wrap;}
  .hot button:last-child{margin-right: 0;}
  .hot button{height: 40px; display: flex; justify-content: center; align-items: center; color: #fff; background-color: #5bc0de; margin: 0 8px 8px 0; padding: 0 10px; font-size: 14px; border: none;}
</style>
