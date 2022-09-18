<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'primary-button'
  }
</script>

<style lang="scss" scoped>
button{
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  border: 0;
  outline: none;
  padding: 15px 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    opacity: 0.85;
    box-shadow: 2px 2px 20px rgb(0 0 0 / 30%);
  }

// font-size

  &.small{
    font-size: 14px;
    line-height: 20px;
  }

// colors

  &.gray{
    color: white;
    background-color: #404040;
  }

  &.black{
    color: white;
    background-color: $black;
  }
}
</style>