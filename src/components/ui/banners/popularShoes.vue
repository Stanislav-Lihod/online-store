<template>
  <div class="popular" v-if="$store.state.popular.shoes">
    <div class="container">
      <div class="popular__content">
        <router-link class="popular__card" v-for="item in $store.state.popular.shoes" :key="item.id" :to="`catalog/shoes/${item.id}`">
          <div class="popular__card-image">
            <img :src="itemImages" alt="">
          </div>
          <div class="popular__card-title">{{item.name}}</div>
          <div class="popular__card-prices">
            <div class="popular__card-prices__price" :class="{old : item.discount}">{{item.price}}$</div>          
            <div v-if="item.discount" class="popular__card-prices--discount-price">{{((item.price / item.discount)* 10).toFixed(2)}}$</div>  
          </div>        
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        item: {}
      }
    },
    computed: {
      itemImages(){
        console.log('test');
        return require('@/assets/img/photo/id1/1.jpg');
      }
    }
  }
</script>

<style lang="scss" scoped>
.popular{
  padding: 80px 0;

  &__content{
    display: flex;
    justify-content: space-between;
  }

  &__card{
    flex-basis: 24%;
    padding: 12px;
    border: 1px solid $black30;
    transition: .3s;

    &:hover{
      border-color: $primary;
    }

    &-image{
      width: 100%;

      img{
        width: 100%;
      }
    }

    &-title{
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 8px;
    }

    &-prices{
      font-size: 22px;
      line-height: 33px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__price{
        &.old{
          text-decoration: line-through;
        }
      }

      &--discount-price{
        color: $accentRed;
      }
    }
  }
}
</style>