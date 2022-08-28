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
  font-size: 14px;
  border: 0;
  outline: none;
  border-radius: 4px;
  padding: 15px 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    opacity: 0.95;
    box-shadow: 2px 2px 20px rgb(0 0 0 / 30%);
    transform: scale(1.005);
  }

  &.gray{
    color: white;
    background-color: #404040;
  }
}
</style>