<template>
  <div class="app">
    <header>
        <nav>
          <RouterLink to="/"
            :class="{ active: $route.path === '/' }"
          >Home</RouterLink>
          <RouterLink to="/login"
          :class="{ active: $route.path === '/login' }"
          >login</RouterLink>
        </nav>
    </header>
    <div class="content">
      <RouterView class="py-2"/>
    </div>

  </div>
</template>
<script type="module" setup>
</script>
<style lang="scss" scoped>
header{
  display: grid;
  justify-items: end;
}
nav {
  display: grid;
  grid-auto-flow: column;
  text-align: center;
  width: 30%;
}
.active {
  background-color: rgb(14 99 156); /* 設定目前頁面的背景顏色 */
  color: white; /* 設定目前頁面的文字顏色 */
}
.content{
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}
a {
  padding: 10px;
}
</style>
