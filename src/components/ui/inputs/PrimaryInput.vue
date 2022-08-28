<template>
  <input>
</template>

<script>
  export default {
    name: 'primary-input'
  }
</script>

<style lang="scss" scoped>
  input{
    padding: 12px 15px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #8d8d8d;
    transition: 0.3s;

    &:focus{
      box-shadow: 1px 1px 10px rgb(0 0 0 / 30%);
      appearance: none;
    }
  }
</style>