import { createStore,  } from "vuex"
import { shoesModule } from "./shoesModule"
import { popularShoes } from "./popularShoes"

export default createStore({
  state: ()=> ({
    isAuth: false,
  }),
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
    shoes: shoesModule,
    popular: popularShoes,
  }
})

