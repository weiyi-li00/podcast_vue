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
button {
 padding: 1rem 5rem;
 border: unset;
 border-radius: 15px;
 color: $b;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 transition: all 250ms;
 overflow: hidden;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: $b;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px $b;
 box-shadow: 4px 8px 19px -3px $b;
 transition: all 250ms
}

button:hover {
 color: #e8e8e8;
}

button:hover::before {
 width: 100%;
}
.inputbox {
  position: relative;
  max-width: 230px;
  padding-bottom: 1rem;
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