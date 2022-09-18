<template>
  <Header 
  v-model:show="displayModal"></Header>
  <RightModal
  v-model:show="displayModal"
  >
    <Login v-model:show="displayModal"></Login>
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
import Login from "./components/pages/user/login/Login.vue";

export default {
  components: { Header, RightModal, Footer, Login },
  data(){
    return{
      displayModal: false,
    }
  },
  methods: {
    auth(){
      this.displayModal = this.$store.state.isAuth && false
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  // font-family: 'Roboto', sans-serif;
  font-family: 'Poppins', sans-serif;
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