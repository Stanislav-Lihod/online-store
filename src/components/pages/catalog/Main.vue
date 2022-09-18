<template>
  <BannerTop/>
  <BannerCenter/>
  <BannerBottom/>
</template>

<script>
import Catalog from './Catalog.vue'
import BannerTop from '../../ui/banners/BannerTop.vue';
import BannerBottom from '@/components/ui/banners/BannerBottom.vue';
import BannerCenter from '@/components/ui/banners/BannerCenter.vue';
export default {
  components: { Catalog, BannerTop, BannerBottom, BannerCenter },
}
</script>

<style scoped lang="scss">

</style>