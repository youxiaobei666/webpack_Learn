<template>
  <h2>我是 vue 创建的 {{ title }}</h2>
</template>

<script setup>
import { ref } from 'vue';

const title = ref("标题")
</script>

<style scoped lang="less">
    div {
        color: aliceblue;
    }
</style>