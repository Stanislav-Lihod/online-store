<template>
  <section class="banner">
    <div class="container banner__content">
      <div class="banner__image"><img src="@/assets/img/banners/banner1/banner1_p1.png" alt="banner_picture"></div>
      <div class="banner__image"><img src="@/assets/img/banners/banner1/banner1_p2.png" alt="banner_picture"></div>     
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.banner{
  margin-bottom: 80px;
  
  &__content{
    display: flex;
    justify-content: space-between;
  }

  &__image{
    flex-basis: 49%;
    
    img{
      width: 100%;
    }
  }
}
</style>