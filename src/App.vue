<script >
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'


export default{
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<style lang="scss">
@use './styles/partials/variable.scss' as *;
.container{
  width: 1080px;
  margin: auto;
  text-align: center;
}
.flex{
  display: $d-flex;
}
body {
    // non capisco perché ci sia un margine tra ogni section quindi lascia una riga di colore uguale al body quindi ho messo il body con questo colore cosi non si nota. da fixare
    background-color: $brand_grey_color; 
}
</style>
