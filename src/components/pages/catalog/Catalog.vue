<template>
  <section class="catalog">
    <div class="container">
      <CatalogShoes v-if="$route.meta.chapter == 'shoes'"/>
      <CatalogAcc v-if="$route.meta.chapter == 'accessories'"/>
    </div>
  </section>
</template>

<script>
import CatalogShoes from "./shoes/CatalogShoes.vue";
import CatalogAcc from "./accessories/CatalogAcc.vue";
  export default {
    components: { CatalogShoes, CatalogAcc }
}
</script>

<style lang="scss" scoped>

</style>