<template>
  <BannerTop/>
  <PopularShoes/>
  <BannerCenter/>
  <BannerBottom/>
</template>

<script>
import Catalog from './Catalog.vue'
import BannerTop from '../../ui/banners/BannerTop.vue';
import BannerBottom from '@/components/ui/banners/BannerBottom.vue';
import BannerCenter from '@/components/ui/banners/BannerCenter.vue';
import PopularShoes from '@/components/ui/banners/popularShoes.vue';
export default {
  components: { Catalog, BannerTop, BannerBottom, BannerCenter, PopularShoes },
}
</script>

<style scoped lang="scss">

</style>