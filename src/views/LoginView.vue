<template>
  <div class="max-w-sm m-auto text-center text-white bg-neutral-600">
    <h1 class="mb-5">登錄</h1>
    <inpute_UI :isloginData="isloginData"/>
  </div>
</template>
<script type="module" setup>
import { relative } from 'pathe';
import { reactive } from 'vue';
import * as islogin from '../composables/islogin'
const { test } = islogin
const isloginData = reactive(['電子郵件','密碼'])



</script>
<style lang="scss" scoped>
  div{
    // outline: 1px solid red;
  
  }
</style>



