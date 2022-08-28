import { createStore,  } from "vuex"

export default createStore({
  state:{
    isAuth: false,
  },
  getters:{
    // computed properties
  },
  mutations:{
    deauthorization(state){
      state.isAuth = false
    },
    authorization(state){
      state.isAuth = true
    }
    // Изменяем стейт
  },
  actions:{
    // Обращаемся на сервер => вызываем мутацию => мутация меняет стейт
  },
  modules:{
    // Кусок стейта с своими гетеррами мутациями с экшенами
  }
})

