<template>
  <footer>
    <div class="container footer__content">
      <Logo style="align-self: flex-start;"/>
      <div class="footer__blocks">
        <div class="footer__blocks-block">
          <div class="footer__blocks-block-title">Online store <br> (daily, around the clock)</div>
        </div>
        <div class="footer__blocks-block">
          <div class="footer__blocks-block-title">Service</div>
          <router-link to="/service/payment" class="footer__blocks-block-item">Payment</router-link>
          <router-link to="/service/delivery" class="footer__blocks-block-item">Delivery</router-link>
          <router-link to="/service/warranty" class="footer__blocks-block-item">Warranty and returns</router-link>
          <router-link to="/service/loyalty" class="footer__blocks-block-item">Loyalty program</router-link>
        </div>
        <div class="footer__blocks-block">
          <div class="footer__blocks-block-title">Buyers</div>
          <router-link to="/buyers/help" class="footer__blocks-block-item">Get help</router-link>
          <router-link to="/buyers/stock" class="footer__blocks-block-item">Stock</router-link>
          <router-link to="/news" class="footer__blocks-block-item">News</router-link>
        </div>
        <div class="footer__blocks-block">
          <div class="footer__blocks-block-title">Contact</div>
        </div>
        <div class="footer__blocks-block">
          <div class="footer__blocks-block-title">Stay Connected</div>
        </div>
      </div>
      <div class="footer__info">© 2022 Snshop Inc. All rights reserved.</div>
    </div>
  </footer>
</template>
<script>
import Logo from '../header/Logo.vue';
export default {
    components: { Logo }
}
</script>
<style scoped lang="scss">
footer{
  padding: 30px 0;
  background-color: $darkGray;
  color: $white;
  margin-top: 80px;

  .footer{
    &__content{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__blocks{
      margin-top: 32px;
      display: flex;
      justify-content: space-between;
      width: 100%;

      &-block{
        margin: 0 10px;
        display: flex;
        flex-direction: column;

        &:last-child{
          margin-right: 0;
        }

        &:first-child{
          margin-left: 0;
        }

        &-title{
          margin-bottom: 16px;
          font-size: 18px;
          line-height: 27px;
          font-weight: 700;
        }

        &-item{
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 24px;
          color: $white;
          transition: .3s;
          
          &:hover{
            opacity: .5;
          }
        }
      }
    }

    &__info{
      margin-top: 64px;
      color: $white50;
    }
  }
}
</style>