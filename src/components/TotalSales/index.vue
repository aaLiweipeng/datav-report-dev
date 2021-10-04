<template>
    <CommonCard
      title="累计销售额"
      value="￥ 66,666,888"
    >
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase" />
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">7.33%</span>
            <div class="decrease" />
          </div>
        </div>
      </template>

      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">￥ 66,666,666</span>
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
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.compare {
  display: flex;
  align-items: center;
  font-size: .12rem;
  margin-top: .03rem;
  color: #666;
}
</style>
