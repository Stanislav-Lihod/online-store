<template>
  <div class="container">
    <div v-if="$store.state.isAuth">
      Basket
    </div>
    <div v-else>
      Please Auth
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
  
</style>