<template>
    <div class="common-card">
        <div class="title">{{title}}</div>
        <div class="value">{{value}}</div>
        <div class="chart">
            <slot></slot>
        </div>
        <div class="line"></div>
        <div class="total">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
// 卡片布局组件 顶层通用架构封装
export default {
  props: {
    title: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: .12rem;
    color: #999;
}

.value {
    font-size: .25rem;
    color: #000;
    margin-top: .05rem;
    letter-spacing: .01rem;
}

.chart {
    height: .5rem;
    // background: #77c4e7;
}

.line {
    margin: .1rem 0;
    border-top:.01rem solid #eee
}

.total {
    font-size: .12rem;
    color: #666;
}
</style>
