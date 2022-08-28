<template>
  <header>
    <div class="header-info">
      <div class="container">
        <div class="info">
          <router-link to="/about" class="info-link">Contact Us</router-link>
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="container">
        <div class="nav">
          <div class="nav-block">
            <router-link to='/' class="nav-block__logo">
              <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z" fill="#0156FF"/>
              </svg>
            </router-link>
            <div class="nav-block__navigation">
              <router-link to="/catalog/phone" class="nav-block__navigation-item">Phone</router-link>
              <router-link to="/catalog/laptop" class="nav-block__navigation-item">Laptop</router-link>
            </div>
          </div>
          <div class="user-block">
            <div class="user-block__item" 
              v-if="$store.state.isAuth"
              @click="activeAccountSettings"
              >
              Account
              <div class="user-account" :class="{active: activeAccount}">
                <router-link to="/user/account">go acc</router-link>
                <div @click="$store.commit('deauthorization')">Exit</div>
              </div>
            </div>
            <div class="user-block__item" v-else @click="showModal">
              Sign in
            </div>
            <div class="user-block__item">Vishlist </div>
            <router-link to="/order/basket" class="user-block__item">Basket </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      activeAccount: false
    }
  },
  methods:{
    showModal(){
      this.$emit('update:show', true) 
    },
    activeAccountSettings(e){
      this.activeAccount = true
    },
  }
}
</script>

<style lang="scss">
  header{
    margin-bottom: 20px;
  }

  .header{
    &-info{
      background-color: black;
      padding: 10px 0;

      .info{
        &-link{
          color: white;
        }
      }
    }

    &-nav {
      background-color: white;
      border-bottom:1px solid rgba($color: #000000, $alpha: 0.2);
      box-shadow: 0 -1px 10px 10px rgba($color: #000000, $alpha: 0.1);

      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;

        &-block {
          display: flex;
          align-items: center;

          &__logo {
            margin: 0 25px;
            transition: .3s;

            &:hover{
              transform: scale(1.1);
            }
          }

          &__navigation{
            margin-left: 30px;
            display: flex;

            &-item{
              padding: 10px;
              margin-right: 10px;

              &:last-child{
                margin-right: 0;
              }
            }
          }
        }

        .user-block {
          display: flex;
          align-items: center;

          &__item {
            margin-left: 10px;
            cursor: pointer;
            position: relative;
          }

          .user-account{
            background-color: white;
            visibility: hidden;
            opacity: 0;
            display: flex;
            position: absolute;
            border: 1px solid black;
            transition: .3s;
            padding: 10px;
            white-space: nowrap;

            a{
              margin-right: 15px;
            }

            &.active{
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
  }
</style>