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
</style>
