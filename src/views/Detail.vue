<template>
  <div>
    <pupbottom :show='isShow'
               :iscover='iscover'
               :checked='checked'
               @isShowRevert="isShow = false"></pupbottom>
    <van-button type="default"
                @click="change()">弹出</van-button>
  </div>
</template>
<script>
import pupbottom from '@/components/pupbottom'
export default {
  components: {
    pupbottom
  },
  data () {
    return {
      isShow: false,
      iscover: true,
      checked: true
    }
  },
  methods: {
    change () {
    }
  },
  created () {
    // debugger
    console.log('123456', this.$get)
    this.$get(this.$api.login, {}).then((res) => {
      console.log(res)
    })
  }
}
</script>
<style scoped>

</style>
