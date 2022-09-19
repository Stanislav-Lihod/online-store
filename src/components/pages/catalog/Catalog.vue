<template>
  <section class="catalog">
    <div class="container">
      <CatalogShoes v-if="$route.meta.chapter == 'shoes'"/>
      <CatalogShoes v-if="$route.meta.chapter == 'sale'"/>
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