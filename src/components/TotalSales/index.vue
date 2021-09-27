<template>
    <CommonCard
      title="累计销售额"
      value="￥ 66,666,888"
    >
      <template>
        <div class="compare">
          无名slot chat内容
        </div>
      </template>

      <template v-slot:footer>
        <div>
          <span>昨日销售额</span>
          <span class="money">￥ 66,666,666</span>
        </div>
      </template>
    </CommonCard>
</template>

<script>
// 累计销售额卡片封装，依赖、拓展 通用卡片封装
import commonCardMixin from '../../mixins/commonCardMixins'

export default {
  // components: {
  //   CommonCard
  // }
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.compare {
  background: cadetblue;
  height: 100%;
}
span {
  font-size: .12rem;
}
.money {
  margin-left: .05rem;
  color: #333;
  font-weight: 666;//字加粗！！
}
</style>
