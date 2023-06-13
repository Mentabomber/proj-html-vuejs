<script>
import { store } from '../store.js';

import AppCard from './AppCard.vue'

export default{
    props: {
        indice: Number,
        sezione: Array
    },
    components: {
        AppCard
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>

 <div class="container">
    <!-- titolo / intestazione  -->
    <div>
        <h1 v-if="sezione.h1 !==''">{{ sezione.intestazione.h1 }}</h1>
        <p v-if="sezione.h1 !==''">{{ sezione.intestazione.p }}</p>
    </div>
    <!-- cards  -->
    <!-- v-if se proprietà = true crea cards -->
    <AppCard v-for="card in sezione.cards"
    :details="card"/>
    <div>

    </div>
    
    


 </div>

</template>

<style lang="scss">

.container{
  width: 1080px;
  margin: auto;
  text-align: center;
}
</style>
