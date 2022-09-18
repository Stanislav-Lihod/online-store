<template>
  <section class="main-banner">
    <div class="container">
      <div class="main-banner__title">
        Super Flash Sale <br> 50% Off
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.main-banner{
  background: url(@/assets/img/banners/main-banner.png) no-repeat center / cover;
  height: 38vw;

  & > .container{
    display: flex;
    height: 100%;
    align-items: center;
  }

  &__title{
    color: white;
    font-weight: 700;
    font-size: 64px;
    line-height: 94px;
  }
}
</style>