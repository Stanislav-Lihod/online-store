<template>
  <div class="catalog__row">
    <router-link v-for="item in $store.state.shoes.shoes" :key="item.id" :to="`${$route.path}/${item.id}`" class="catalog__row-card">
      <div class="catalog__row-card-image">
        <img src="@/assets/img/photo/id1/1.jpg" :alt="item.name">
        <div class="catalog__row-card-image--new" v-if="item.new">New</div>
        <div class="catalog__row-card-image--hover">
          <div class="catalog__row-card-image--hover-item" @click="addVish" @click.prevent>
            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
              <path d="M26.8862 50.423C40.6933 50.423 51.8862 39.4539 51.8862 25.923C51.8862 12.392 40.6933 1.42297 26.8862 1.42297C13.0791 1.42297 1.88623 12.392 1.88623 25.923C1.88623 39.4539 13.0791 50.423 26.8862 50.423Z" stroke="white" stroke-width="2"/>
              </g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8221 19.961C30.466 19.9617 31.0959 20.1482 31.6363 20.4981C32.1768 20.8481 32.6046 21.3466 32.8686 21.9338C33.1326 22.5211 33.2215 23.172 33.1246 23.8085C33.0276 24.445 32.749 25.04 32.3221 25.522C31.7091 26.213 26.4822 31.106 26.4822 31.106C26.4822 31.106 21.2442 26.213 20.6312 25.511C20.09 24.9035 19.7922 24.1176 19.7952 23.304C19.8103 22.4273 20.1692 21.5915 20.7946 20.9769C21.42 20.3622 22.2618 20.0178 23.1387 20.0178C24.0155 20.0178 24.8573 20.3622 25.4827 20.9769C26.108 21.5915 26.467 22.4273 26.4822 23.304C26.4822 22.8649 26.5686 22.43 26.7367 22.0243C26.9047 21.6186 27.1511 21.25 27.4616 20.9395C27.7721 20.6289 28.1407 20.3826 28.5464 20.2145C28.9522 20.0465 29.387 19.96 29.8262 19.96L29.8221 19.961ZM29.8262 17.731C28.6199 17.7289 27.4458 18.1204 26.4822 18.846C25.3782 18.0266 24.0103 17.6442 22.6415 17.7723C21.2726 17.9004 19.9994 18.5299 19.0666 19.5399C18.1338 20.5498 17.6073 21.8689 17.5882 23.2436C17.5691 24.6183 18.0588 25.9515 18.9631 26.987C19.5891 27.705 23.7121 31.565 24.9631 32.731C25.376 33.1172 25.9203 33.332 26.4856 33.332C27.051 33.332 27.5952 33.1172 28.0081 32.731C29.2521 31.566 33.3581 27.716 33.9921 26.999C34.7034 26.1955 35.1677 25.2037 35.329 24.1427C35.4903 23.0817 35.3419 21.9968 34.9015 21.0181C34.4611 20.0395 33.7475 19.2088 32.8465 18.6259C31.9455 18.0429 30.8953 17.7326 29.8221 17.732L29.8262 17.731Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="catalog__row-card-content">
        <div class="catalog__row-card-content-title">{{item.name}}</div>
        <div class="catalog__row-card-content-rate">
          {{item.rate}}
        </div>
        <div class="catalog__row-card-content-price">
          <div v-if="item.discount" class="catalog__row-card-content-price--discount-price">{{((item.price / item.discount)* 10).toFixed(2)}}$</div>
          <div class="catalog__row-card-content-price--original-price" :class={cross:item.discount}>{{item.price}}$</div>
          <div v-if="item.discount" class="catalog__row-card-content-price--discount">{{item.discount}}% off</div>
        </div>
      </div>
    </router-link>
  </div>  
</template>

<script>
  export default {
    methods:{
      addVish(){
        console.log('Добавленно в избранное')
      }
    }
  }
</script>

<style lang="scss" scoped>
.catalog__row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &-card{
    flex-basis: 24%;
    border: 3px solid #F6F7F8;
    background-color: white;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    transition: .3s;

    &:hover{
      cursor: pointer;
      text-decoration: none;
      transform: scale(1.05);
      box-shadow: 0px 3px 10px rgba($color: black, $alpha: 0.2);

      .catalog__row-card-image--hover{
        z-index: 2;
        opacity: 1;
      }
    }

    &-image{
      position: relative;
      
      img{
        width: 100%;
      }

      &--new{
        position: absolute;
        left: 0;
        top: 0;
        padding: 10px 20px;
        background-color: #FF4858;
        font-size: 18px;
        text-transform: uppercase;
        color: white;
      }

      &--hover{
        position: absolute;
        z-index: -1;
        opacity: 0;
        background-color: rgba($color: black, $alpha: 0.1);
        backdrop-filter: blur(2px);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;

        &-item{
          margin: 0 5px;
        }
      }
    }

    &-content{
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-title{
        color: #223263;
        font-size: 18px;
        line-height: 27px;
        font-weight: 700;
      }

      &-price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        &--discount-price{
          font-weight: 700;
          font-size: 20px;
          line-height: 36px;
          color: #40BFFF;
        }

        &--original-price{
          font-weight: 700;
          font-size: 20px;
          line-height: 36px;
          color: #40BFFF;
          flex-grow: 1;
          text-align: center;

          &.cross{
            text-decoration: line-through;
            color: #9098B1;
            font-size: 14px;
            line-height: 21px;
            font-weight: 400;
            flex-grow: 0;
          }
        }

        &--discount{
          font-weight: 700;
          font-size: 14px;
          line-height: 21px;
          color: #FB7181;
        }
      }
    }
  }
}
</style>