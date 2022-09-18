<template>
  <section class="banner">
    <div class="container banner__content">
      <div class="banner__image"><img src="@/assets/img/banners/banner2/banner2_p1.png" alt="banner_picture"></div>
      <div class="banner__item">
        <div class="banner__item--text">
          Shave your perfect pair of shoes
        </div>
        <router-link to="/catalog/shoes/new">
          <PrimaryButton class="black">Choose</PrimaryButton>
        </router-link>        
      </div>     
    </div>
  </section>
</template>

<script>
import PrimaryButton from '../buttons/PrimaryButton.vue';
  export default {
    components: { PrimaryButton }
}
</script>

<style lang="scss" scoped>
.banner{
  padding: 80px 0;

  &__content{
    display: flex;
    justify-content: space-between;
  }

  &__image{
    flex-basis: 57.6%;
    
    img{
      width: 100%;
    }
  }

  &__item{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 109px;
    flex-basis: 42.4%;

    &--text{
      font-size: 48px;
      line-height: 72px;
      margin-bottom: 40px;
      font-weight: 500;
    }
  }
}
</style>