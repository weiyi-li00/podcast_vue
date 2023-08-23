<template>
      <div class="inputbox m-auto mb-5 p-3" v-for="(item, key)  in isloginData" :key=key>
        <input required="required" type="text" >
        <span class="font-semibold">{{ item }}:</span>
        <i></i>
      </div>
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
.inputbox {
  position: relative;
  max-width: 230px;
}

.inputbox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: $f;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

.inputbox span {
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: $f;
  letter-spacing: 00.05em;
  transition: 0.5s;
  pointer-events: none;
}

.inputbox input:valid ~span,
.inputbox input:focus ~span {
  color: $g;
  transform: translateX(-10px) translateY(-34px);
  font-size: 0,75em;
  font-weight: 700;
}

.inputbox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: $g;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.inputbox input:valid ~i,
.inputbox input:focus ~i {
  height: 44px;
}
</style>