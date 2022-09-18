<template>
  <section class="catalog">
    <div class="container">
      <CatalogShoes v-if="$route.meta.chapter == 'shoes'"/>
    </div>
  </section>
</template>

<script>
import CatalogShoes from "./shoes/CatalogShoes.vue";
  export default {
    components: { CatalogShoes }
}
</script>

<style lang="scss" scoped>

</style>