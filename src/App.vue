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

    background-color: $brand_grey_color; 
}
.btn-orange{
        background-color: $brand_gold_color;
        padding: 10px;
        border-radius: 25px;
        border: none;
        color: white;
        font-size: 12px;
        font-weight: bold;
        margin: 50px 0 70px 0;
    }
</style>
