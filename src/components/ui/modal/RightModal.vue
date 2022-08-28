<template>
  <div class="rightModal" 
    :class="{active: show}"
    @click="hideModal"
  >
    <div class="rightModal__content" @click.stop>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    show:{
      type: Boolean,
      required: true
    }
  },
  methods:{
    hideModal(){
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss">
.rightModal{
  background-color: rgba(0,0,0, 0.15);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  backdrop-filter: blur(2px);
  opacity: 0;
  z-index: -10;
  transition: .5s;
  overflow: hidden;

  &__content{
    background-color: white;
    width: 400px;
    position: absolute;
    right: -400px;
    top: 0;
    height: 100%;
    padding: 40px;
    transition: .3s;
    box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.3);
  }

  &.active{
    opacity: 1;
    z-index: 10;

    .rightModal__content{
      right: 0;
    }
  }
}
</style>