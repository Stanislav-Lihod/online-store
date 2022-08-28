<template>
  <div class="login">
    <div class="login__header">
      <div class="login__header-title">Login and Registration</div>
      <div class="login__header-close" @click="this.$emit('update:show', false)"><span></span></div>
    </div>
    <Authorization 
      v-if="!isRegistration" 
      v-model:reg="isRegistration"
      @show="this.$emit('update:show', false)">
    </Authorization>
    <Registration 
      v-else 
      v-model:reg="isRegistration">
    </Registration>
  </div>
</template>
<script>
import Authorization from './Authorization.vue';
import Registration from './Registration.vue';
export default {
  components: { Authorization, Registration },
  data(){
    return{
      isRegistration: false,
    }
  }
}
</script>
<style scoped lang="scss">
  .login{
    &__header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;

      &-title{
        font-weight: 600;
        font-size: 24px;
      }

      &-close{
        cursor: pointer;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid gray;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;

        &:hover{
          transform: rotate(180deg);
        }

        span{
          height: 1px;
          width: 20px;
          background-color: gray;
          display: block;
          transform: rotate(45deg);

          &::after{
            content: "";
            height: 1px;
            width: 20px;
            background-color: gray;
            display: block;
            transform: rotate(-90deg);
          }
        }
      }
    }
  }
</style>