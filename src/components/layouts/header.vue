<template>
  <div class='we-header'>
    <p class='title'>{{title}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: '首页',
      },
    },
    methods: {

    },
  };
</script>
<style lang="less" scoped>
.we-header{
  .title {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    color: red;
  }
}
</style>
