<template>
      <div class="mb-8">
        <div class="inputbox m-auto mb-5" v-for="(item, key)  in isloginData" :key=key>
          <input required="required" type="text" >
          <span class="font-semibold">{{ item }}:</span>
          <i></i>
        </div>
        <button>登錄</button>
      </div>
      <a href=""><span>建立新帳號</span></a>
</template>

<script type="module" setup>
const props = defineProps({
    isloginData: {
            type: Array,
            required: true
        }
    })
</script>

<style lang="scss" scoped>
@include inputSize;
@include btnSize;

</style>