<template>
  <div>
    <van-popup v-model="isShowInCur"
               position="bottom"
               :overlay="iscover">
      <van-cell-group>
        <van-cell title="确认账单">
          <van-icon slot="right-icon"
                    name="cross"
                    class="close-icon"
                    @click="isShowInCur = false" />
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked"
                         title="市集币 共2000币, 可抵2元"
                         class="alignleft" />
      </van-cell-group>
      <van-cell-group>
        <van-cell value="余额(￥99.00)"
                  @click="showprice()" />
      </van-cell-group>
      <van-cell-group>
        <van-cell value="微信支付"
                  @click="payType()" />
      </van-cell-group>
      <van-cell-group>
        <van-cell size="large" />
      </van-cell-group>
      <van-cell-group>
        <van-cell size="large">
          <van-button type="default"
                      @click="pay()">立即付款</van-button>
        </van-cell>
      </van-cell-group>
    </van-popup>
    <!-- <van-button type="default"
                @click="controlshow = true">弹出</van-button> -->
  </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    iscover: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isShowInCur: false
    }
  },
  methods: {
    showprice () {
      console.log('显示余额')
    },
    payType () {
      console.log('切换支付方式')
    },
    pay () {
      console.log('立即支付方法')
    }
  },
  watch: {
    isShow (val, old) {
      console.log(val, old)
      this.isShowInCur = val
    },
    isShowInCur (val, old) {
      console.log('22', val, old)
      if (!val) {
        this.$emit('isShowRevert')
      }
    }
  }
}
</script>
<style scoped>
/deep/ .alignleft {
  text-align: left;
}
/deep/ .van-button--normal {
  width: 100%;
}
/deep/ .van-button--default {
  color: #d8b96f;
  background-color: rgb(0, 0, 0, 1);
}
/deep/.van-icon {
  font-size: 20px;
}
/deep/ .van-cell--large {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
