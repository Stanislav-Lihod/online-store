<template>
  <section class="banner">
    <div class="container banner__content">
      <div class="banner__item">
        <div class="banner__item-logo">SNshop</div>
        <div class="banner__item-info">
          <div class="banner__item-info--title">Subscribe to newsletter</div>
          <div class="banner__item-info--description">Be the first to know about sales, promotions and get special promotional codes for a discount!</div>
          <div class="banner__item-info--form">
            <PrimaryInput
              type="email"
              placeholder="Email"
              style="width:100%"
            />
            <PrimaryButton class="black">Subscribe</PrimaryButton>
          </div>
        </div>
      </div>
      <div class="banner__image"><img src="@/assets/img/banners/banner3/banner3_p1.png" alt="banner_picture"></div>     
    </div>
  </section>
</template>

<script>
import PrimaryInput from '../inputs/PrimaryInput.vue';
import PrimaryButton from '../buttons/PrimaryButton.vue';
  export default {
    components: { PrimaryInput, PrimaryButton }
}
</script>

<style lang="scss" scoped>
.banner{
  padding: 80px 0;

  &__content{
    display: flex;
    justify-content: space-between;
  }

  &__item{
    flex-basis: 49%;
    background-color: $lightGray;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &-logo{
      text-transform: uppercase;
      writing-mode: vertical-lr;
      font-size: 24px;
      line-height: 36px;
      font-weight: 900;
      color: $black30;
      transform: rotate(180deg);
      margin-left: 30px;
    }

    &-info{
      padding: 0 96px 0 30px;

      &--title{
        font-size: 32px;
        line-height: 48px;
        font-weight: 700;
        margin-bottom: 16px;
      }

      &--description{
        font-size: 20px;
        line-height: 30px;
        color: $black30;
      }

      &--form{
        margin-top: 42px;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__image{
    flex-basis: 49%;
    
    img{
      width: 100%;
    }
  }
}
</style>