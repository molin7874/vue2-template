<template>
  <div class="container">
    <div class="cnavas">
      <div class="spinner"></div>
    </div>
     <h2>{{title}}</h2>
     <div class="row">
       <div class="text-center" v-for="item in list" :key="item.id">
         <router-link :to="{path:'/detail/'+item.id}">
            <img src="item.images.large" alt=""/>
            <div class="title">{{item.title}}</div>
         </router-link>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      title: '',
      list: []
    }
  },
  props: ['movieType'],
  mounted() {
    this.loadMovieList()
  },
  methods: {
    loadMovieList(){
      this.loading = true
      let params = {
        count: 18
      },
      movieUrl = '/api/movie/' + this.moviiType
      if(this.moviiType == 'search') {
        params['q'] = this.$router.params.searchKey
      }
      this.axios.post(movieUrl, params).then((response) =>{
        console.log(response.data)
        this.list = response.data.subject
        this.title = response.data.title
        this.loading = false
      })
    }
  }
}
</script>

