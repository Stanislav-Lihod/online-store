<template>
  <div class="auth">
    <primary-input
      type="text"
      placeholder="Email"
      style="margin-bottom: 15px;"
      v-model="auth.email"
    />
    <primary-input
      type="password"
      placeholder="Password"
      v-model="auth.password"
      style="margin-bottom: 15px;"
    />
    <primary-button
      class="gray"
      @click="authorization"
    >Sign in</primary-button>
    <div class="auth-replace">
      Don't have an account? <span @click="this.$emit('update:reg', true)">Registration</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reg: {
      type: Boolean,
      required: false
    }
  },
  data(){
    return{
      auth:{
        email: '',
        password: ''
      }
    }
  },
  methods:{
    authorization(){
      this.$store.commit('authorization')
      this.$store.state.isAuth && this.$emit('show', false)
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/css/animations/close-animations.scss'; 

.auth{
  display: flex;
  flex-direction: column;
  animation: closeAnimation .3s;

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