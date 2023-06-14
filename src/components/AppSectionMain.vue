<script>
import { store } from '../store.js';


import AppCardsContainer from './AppCardsContainer.vue'
import AppImagesContainer from './AppImagesContainer.vue'

export default{
    props: {
        indice: Number,
        sezione: Array,
    },
    components: {
        AppCardsContainer,
        AppImagesContainer

  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
<section>

  <div class="container">
    <!-- titolo / intestazione  -->
    <div>
        <h2 class="section-title" v-if="sezione.title !==''">{{ sezione.intestazione.title }}</h2>
        <p class="section-text" v-if="sezione.title !==''">{{ sezione.intestazione.text }}</p>
    </div>
    <!-- content container  -->
    <!-- contenitore con cards -->
    <div v-if="sezione.sectionType === 'cards' ">
      <AppCardsContainer :section="sezione"/>
    </div>

    <!-- contenitore con immagini  -->
    <div class="imgs-container" v-else>
      <AppImagesContainer :section="sezione"/>
    </div>
    <!-- v-if se proprietà = true crea cards
    <AppCard v-for="card in sezione.cards"
    :details="card"/> -->
    <div class="section-img" v-if="sezione.img">
      <img :src="sezione.img " alt="">
    </div>
    <div v-if="sezione.button">
      <button class="btn-orange">{{ sezione.button.name }}</button>
    </div>
  </div>
</section>
 

</template>

<style scoped lang="scss">

.container{
  width: 1080px;
  margin: auto;
  text-align: center;
}
.imgs-container{
  display: flex;
  flex-wrap: wrap;
}
.section-title{
  width: 45%;
  font-size: 30px;
  margin: auto;
  padding-top:50px ;
} 
.section-text{
  width: 45%;
  margin: 10px auto;
  line-height: 25px;
}
.section-img{
  width: 100%;
  height: 100%;

  img{
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
