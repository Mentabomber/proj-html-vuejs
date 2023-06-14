<script>
import AppSectionHeaderAndFooter from './AppSectionHeaderAndFooter.vue'
import AppSectionMain from './AppSectionMain.vue'

import { store } from '../store.js';

export default{
  components: {
    AppSectionHeaderAndFooter,
    AppSectionMain
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
 <footer>

    <div class="container">
        <AppSectionMain :sezione="store.footer[0]"/>
        <AppSectionHeaderAndFooter :details="'footer'"/>
    </div>
    
 </footer>
</template>

<style lang="scss">

</style>
