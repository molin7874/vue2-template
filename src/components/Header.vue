<template>
  <nav>
    <div class="container">
      <div class="left-title">
        <router-link to="/">豆瓣电影</router-link>
      </div>
      <form class="left-form" role="search" @submit.prevent="submit">
        <div class="form-group">
          <input type="text" name="" class="form-control" placeholder="请输入电影名字" v-model="searchKey">
        </div>
        <button type="submit" class="btn-default">搜索</button>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    searchKey: ''
  },
  methods: {
    submit() {
      if(!this.searchKey){
        alert('请输入内容')
        return null
      }
      this.$router.push({
        path: '/search/' + this.searchKey,
      })
      this.searchKey = ''
    }
  }
}
</script>

