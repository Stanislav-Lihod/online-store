<template>
  <router-link to="/" class="logo">
    SNshop
  </router-link>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.logo{
  padding: 16px 40px;
  border-right: 8px solid $black;
  font-size: 20px;
  min-height: 62px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  text-transform: uppercase;
}
</style>