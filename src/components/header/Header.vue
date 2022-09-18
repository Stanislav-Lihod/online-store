<template>
  <header>
    <div class="header-top">
      <div class="container header-top__content">
        <div class="header-top__info">
          <router-link to="/about" class="header-top__info-link">Contact Us</router-link>
        </div>
        <div class="header-top__setting">
          <div class="header-top__setting-lang">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20H2.5C1.122 20 0 18.878 0 17.5V2.5C0 1.122 1.122 0 2.5 0H10.5C10.714 0 10.904 0.136 10.973 0.338L17.473 19.338C17.525 19.49 17.5 19.659 17.407 19.79C17.313 19.922 17.162 20 17 20ZM2.5 1C1.673 1 1 1.673 1 2.5V17.5C1 18.327 1.673 19 2.5 19H16.3L10.143 1H2.5Z" fill="black"/>
              <path d="M21.5 24H13.5C13.292 24 13.105 23.871 13.032 23.676L11.532 19.676C11.435 19.417 11.566 19.129 11.824 19.032C12.083 18.936 12.371 19.066 12.468 19.324L13.847 23H21.5C22.327 23 23 22.327 23 21.5V6.5C23 5.673 22.327 5 21.5 5H12C11.724 5 11.5 4.776 11.5 4.5C11.5 4.224 11.724 4 12 4H21.5C22.878 4 24 5.122 24 6.5V21.5C24 22.878 22.878 24 21.5 24Z" fill="black"/>
              <path d="M13.5 24C13.383 24 13.266 23.959 13.171 23.876C12.963 23.694 12.942 23.378 13.124 23.17L16.624 19.17C16.806 18.961 17.122 18.941 17.33 19.123C17.538 19.305 17.559 19.621 17.377 19.829L13.877 23.829C13.777 23.942 13.639 24 13.5 24Z" fill="black"/>
              <path d="M9.5 13.9999C9.294 13.9999 9.102 13.8729 9.029 13.6679L7 7.98695L4.971 13.6679C4.878 13.9279 4.591 14.0639 4.332 13.9709C4.072 13.8779 3.936 13.5919 4.029 13.3319L6.529 6.33195C6.671 5.93395 7.329 5.93395 7.47 6.33195L9.97 13.3319C10.063 13.5919 9.928 13.8779 9.667 13.9709C9.613 13.9909 9.556 13.9999 9.5 13.9999Z" fill="black"/>
              <path d="M8 11H6C5.724 11 5.5 10.776 5.5 10.5C5.5 10.224 5.724 10 6 10H8C8.276 10 8.5 10.224 8.5 10.5C8.5 10.776 8.276 11 8 11Z" fill="black"/>
              <path d="M21.5 11H14.5C14.224 11 14 10.776 14 10.5C14 10.224 14.224 10 14.5 10H21.5C21.776 10 22 10.224 22 10.5C22 10.776 21.776 11 21.5 11Z" fill="black"/>
              <path d="M17.5 11C17.224 11 17 10.776 17 10.5V9.5C17 9.224 17.224 9 17.5 9C17.776 9 18 9.224 18 9.5V10.5C18 10.776 17.776 11 17.5 11Z" fill="black"/>
              <path d="M16 17C15.843 17 15.689 16.927 15.592 16.79C15.432 16.565 15.485 16.253 15.71 16.093C17.899 14.538 19.5 11.366 19.5 10.501C19.5 10.225 19.724 10.001 20 10.001C20.276 10.001 20.5 10.225 20.5 10.501C20.5 11.819 18.573 15.286 16.29 16.909C16.202 16.97 16.101 17 16 17Z" fill="black"/>
              <path d="M20 18C19.879 18 19.758 17.957 19.663 17.869C19.3 17.537 16.105 14.586 15.537 13.188C15.433 12.932 15.557 12.641 15.812 12.537C16.065 12.434 16.359 12.556 16.463 12.812C16.872 13.819 19.399 16.271 20.338 17.131C20.542 17.318 20.555 17.633 20.369 17.838C20.27 17.945 20.135 18 20 18Z" fill="black"/>
            </svg>
          </div>
          <div class="header-top__setting-currency">Currency</div>
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="container header-nav__content">
        <Logo/>
        <div class="header-nav__menu">            
            <router-link to="/catalog/shoes/men" class="header-nav__menu-link">Men</router-link>
            <router-link to="/catalog/shoes/women" class="header-nav__menu-link">Women</router-link>
            <router-link to="/catalog/shoes/child" class="header-nav__menu-link">Children</router-link>
            <router-link to="/catalog/shoes/new" class="header-nav__menu-link">New</router-link>
            <router-link to="/catalog/sale" class="header-nav__menu-link">Sale</router-link>
            <router-link to="/catalog/accessories" class="header-nav__menu-link">Accessories</router-link>
        </div>
        <div class="header-nav__user">
          <router-link to="/order/vishlist" class="header-nav__user-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9395 5.6753C18.4399 4.17426 20.4752 3.33093 22.5976 3.33093C24.7198 3.33093 26.7551 4.17422 28.2555 5.67518C29.7565 7.17556 30.6 9.21109 30.6 11.3334C30.6 13.4557 29.7567 15.491 28.2556 16.9914C28.2556 16.9915 28.2557 16.9914 28.2556 16.9914L16.469 28.7781C16.2086 29.0385 15.7865 29.0385 15.5262 28.7781L3.73949 16.9914C0.614619 13.8666 0.614619 8.80016 3.73949 5.6753C6.86435 2.55043 11.9308 2.55043 15.0556 5.6753L15.9976 6.61722L16.9395 5.6753C16.9394 5.67533 16.9395 5.67526 16.9395 5.6753ZM22.5976 4.66427C20.8289 4.66427 19.1327 5.36707 17.8824 6.61799L16.469 8.03144C16.3439 8.15646 16.1744 8.2267 15.9976 8.2267C15.8207 8.2267 15.6512 8.15646 15.5262 8.03144L14.1128 6.6181C11.5087 4.01394 7.28646 4.01394 4.68229 6.6181C2.07813 9.22227 2.07813 13.4445 4.68229 16.0486L15.9976 27.3639L27.3128 16.0486C28.5637 14.7983 29.2667 13.102 29.2667 11.3334C29.2667 9.56472 28.5638 7.86855 27.3129 6.61822C26.0626 5.3673 24.3662 4.66427 22.5976 4.66427Z" fill="black"/>
            </svg>
          </router-link>
          <router-link to="/order/basket" class="header-nav__user-item">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2056 7.24384C10.5033 4.26697 13.0083 2 16 2C18.9917 2 21.4967 4.26697 21.7944 7.24384L21.9967 9.267L20.67 9.39967L20.4677 7.37651C20.2381 5.08124 18.3067 3.33333 16 3.33333C13.6933 3.33333 11.7619 5.08124 11.5323 7.37651L11.33 9.39967L10.0033 9.267L10.2056 7.24384Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0807 9.33333H7.91927L6.7526 28H25.2474L24.0807 9.33333ZM7.91927 8C7.21518 8 6.63245 8.54745 6.58853 9.25016L5.42187 27.9168C5.37389 28.6844 5.98351 29.3333 6.7526 29.3333H25.2474C26.0165 29.3333 26.6261 28.6844 26.5781 27.9168L25.4115 9.25016C25.3675 8.54745 24.7848 8 24.0807 8H7.91927Z" fill="black"/>
            </svg>
          </router-link>
          <div class="header-nav__user-item" 
            v-if="$store.state.isAuth"
              @click="activeAccountSettings"
              >
              <div class="header-nav__user-item--profile">SL</div>
              <div class="header-nav__user-item--profile-setting" :class="{active: activeAccount}">
                <router-link to="/user/account">go acc</router-link>
                <div @click="$store.commit('deauthorization')">Exit</div>
              </div>
            </div>
            <div class="header-nav__user-item" v-else @click="showModal">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 25.3334C4.66667 22.0197 7.35296 19.3334 10.6667 19.3334H21.3333C24.647 19.3334 27.3333 22.0197 27.3333 25.3334V28C27.3333 28.3682 27.0349 28.6667 26.6667 28.6667C26.2985 28.6667 26 28.3682 26 28V25.3334C26 22.756 23.9107 20.6667 21.3333 20.6667H10.6667C8.08934 20.6667 6 22.756 6 25.3334V28C6 28.3682 5.70152 28.6667 5.33333 28.6667C4.96514 28.6667 4.66667 28.3682 4.66667 28V25.3334Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 9.33337C10 6.01967 12.6863 3.33337 16 3.33337C19.3137 3.33337 22 6.01967 22 9.33337C22 12.6471 19.3137 15.3334 16 15.3334C12.6863 15.3334 10 12.6471 10 9.33337ZM16 4.66671C13.4227 4.66671 11.3333 6.75605 11.3333 9.33337C11.3333 11.9107 13.4227 14 16 14C18.5773 14 20.6667 11.9107 20.6667 9.33337C20.6667 6.75605 18.5773 4.66671 16 4.66671Z" fill="black"/>
              </svg>
            </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
export default {
    data() {
        return {
            activeAccount: false
        };
    },
    methods: {
        showModal() {
            this.$emit("update:show", true);
        },
        activeAccountSettings(e) {
            this.activeAccount = true;
        },
    },
    components: { Logo }
}
</script>

<style lang="scss">
header{
  margin-bottom: 20px;

  .header{
    &-top{
      background-color: $lightGray;
      padding: 16px 0;
      font-size: 16px;
      line-height: 24px;

      &__content{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__info{
        &-link{
          color: $black;
          transition: .2s;

          &:hover{
            opacity: .7;
          }
        }
      }

      &__setting{
        display: flex;
        align-items: center;

        &-lang{
          cursor: pointer;
          transition: .2s;
          display: flex;
          align-items: center;
          margin-right: 40px;

          &:hover{
            opacity: .7;
          }
        }

        &-currency{
          display: flex;
          align-items: center;
          transition: .2s;
          cursor: pointer;

          &::before{
            content: '';
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.0009 21.4004H12.0002C6.8175 21.4004 2.601 17.1841 2.60062 12.0014C2.60062 6.81849 6.81694 2.60217 11.9998 2.60217C17.1827 2.60217 21.399 6.81867 21.399 12.0014C21.399 17.1839 17.1831 21.4004 12.0009 21.4004ZM11.9998 3.35199C7.23056 3.35199 3.35062 7.23192 3.35062 12.0012C3.351 16.7704 7.23112 20.6504 12.0002 20.6504H12.0009C16.7696 20.6504 20.649 16.7704 20.649 12.0012C20.649 7.23192 16.7691 3.35199 11.9998 3.35199Z' fill='black'/%3E%3Cpath d='M12.0896 17.3591C10.4117 17.3591 9.0465 16.0748 9.0465 14.4964C9.0465 14.2894 9.2145 14.1214 9.4215 14.1214C9.6285 14.1214 9.7965 14.2894 9.7965 14.4964C9.7965 15.6613 10.8251 16.6091 12.0896 16.6091C13.3539 16.6091 14.3826 15.6613 14.3826 14.4964C14.3826 13.3315 13.3541 12.3836 12.0896 12.3836C10.4117 12.3836 9.0465 11.0994 9.0465 9.52089C9.0465 7.94251 10.4117 6.65833 12.0896 6.65833C12.9917 6.65833 13.8413 7.03107 14.421 7.68114C14.5588 7.83582 14.5453 8.07283 14.3908 8.21064C14.2363 8.34845 13.9989 8.33476 13.8615 8.18045C13.4239 7.68976 12.7781 7.40833 12.0898 7.40833C10.8253 7.40833 9.79669 8.35595 9.79669 9.52089C9.79669 10.6858 10.8253 11.6336 12.0898 11.6336C13.7676 11.6336 15.1328 12.918 15.1328 14.4964C15.1328 16.0748 13.7674 17.3591 12.0896 17.3591Z' fill='black'/%3E%3Cpath d='M12.006 18.7204C11.799 18.7204 11.631 18.5524 11.631 18.3454V5.67224C11.631 5.46524 11.799 5.29724 12.006 5.29724C12.213 5.29724 12.381 5.46524 12.381 5.67224V18.3454C12.381 18.5524 12.2132 18.7204 12.006 18.7204Z' fill='black'/%3E%3C/svg%3E%0A");
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }

          &::after{
            content: '';
            background-image: url("data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.146447 0.646447C0.341709 0.451184 0.658291 0.451184 0.853553 0.646447L6.5 6.29289L12.1464 0.646447C12.3417 0.451184 12.6583 0.451184 12.8536 0.646447C13.0488 0.841709 13.0488 1.15829 12.8536 1.35355L6.85355 7.35355C6.65829 7.54882 6.34171 7.54882 6.14645 7.35355L0.146447 1.35355C-0.0488155 1.15829 -0.0488155 0.841709 0.146447 0.646447Z' fill='%23414141'/%3E%3C/svg%3E%0A");
            width: 13px;
            height: 8px;
            display: inline-block;
            margin-left: 8px;
          }

          &:hover{
            opacity: .7;
          }
        }
      }
    }

    &-nav{
      padding: 60px 0;

      &__content{
        display: flex;
        align-items: center;
      }

      &__menu{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        &-link{
          font-size: 20px;
          line-height: 28.8px;
          color: $black;
          padding: 0 10px;
          margin: 0 10px;
          transition: .2s;
          display: flex;
          flex-direction: column;

          &::after{
            content: '';
            height: 2px;
            width: 0%;
            background-color: $black;
            display: inline-block;
            transition: .2s;
          }

          &:hover{
            &.header-nav__menu-link::after{
              width: 100%;              
            }
          }
        }
      }

      &__user{
        display: flex;
        align-items: center;

        &-item{
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: .2s;
          position: relative;

          &:nth-child(2){
            margin: 0 20px;
          }

          &--profile{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: $primary;
            color: $black;
            font-weight: 700;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;

            &-setting{
              opacity: 0;
              z-index: -1;
              transition: .3s;
              position: absolute;
              min-width: 230px;
              padding: 15px;
              right: 0;
              top: 40px;
              background-color: white;
              border-radius: 3px;
              box-shadow: var(--ds-shadow-overlay,0 4px 8px -2px rgba(9,30,66,0.25),0 0 1px rgba(9,30,66,0.31));

              &.active{
                opacity: 1;
                z-index: 2;
              }
            }
          }
        }
      }
    }
  }
}  
</style>