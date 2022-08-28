<template>
  <div class="registr">
    <div class="registr-heading">
      Fill in all fields to receive bonuses and gifts under the loyalty program <strong>Online Store</strong>
    </div>
    <primary-input
      type="text"
      placeholder="Name"
      style="margin-bottom: 15px;"
    />
    <primary-input
      placeholder="Password"
      type="password"
      style="margin-bottom: 15px;"
    />
    <primary-input
      placeholder="Email"
      type="email"
      style="margin-bottom: 15px;"
    />
    <primary-input
      placeholder="Phone"
      type="number"
      style="margin-bottom: 15px;"
    />
    <primary-button class="gray">Registration</primary-button>

    <div class="registr-replace">
      Have an account? <span @click="this.$emit('update:reg', false)">Login</span>
    </div>
    </div>
</template>
<script>
export default {
  props:{
    reg:{
      type: Boolean,
      required: false
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/css/animations/close-animations.scss';

.registr{
  display: flex;
  flex-direction: column;
  animation: closeAnimation .3s;

  &-heading{
    margin-bottom: 15px;
  }

  &-replace{
    margin-top: 20px;

    span{
      text-decoration: underline;
      cursor: pointer;
      font-weight: 500;

      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>