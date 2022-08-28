<template>
  <Header 
  v-model:show="displayModal"></Header>
  <RightModal
  v-if="displayModal"
  v-model:show="displayModal"
  >
    Авторизация
  </RightModal>
  <div class="app">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "./components/header/Header.vue";
import RightModal from "./components/ui/modal/RightModal.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  components: { Header, RightModal, Footer },
  data(){
    return{
      displayModal: false
    }
  },
  provide(){
    return{
      allScreen: 'test'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,900&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  min-height: 100vh;
  height: 100%;
}

html{
  height: 100%;
}

a{
  color: black;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
}

#app{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app{
  flex: 1 0 auto;
}

.container{
  max-width: 1400px;
  padding: 0 40px;
  margin: 0 auto;
}
</style>