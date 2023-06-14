<script>
import AppSection from './AppSection.vue'

import { store } from '../store.js';

export default{
  components: {
    AppSection,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
    <main>
        
        <section >
            <AppSection :id="section.id" v-for="section, index in store.sections" :key="section.id"
            :indice="index" :sezione="section"/>
        </section>

        
    </main>
</template>

<style lang="scss">
@use '../styles/partials/variable.scss' as *;

#newAgencySection{
    // background-image: url(`{{store.sections[0].backgroundImg}}`);
    // background-color: $brand_grey_color;
    // height: 100px;
    // color: $brand_primary;
    // padding: 20px;
    .cards-container{
        // display: flex;
        // flex-wrap: nowrap;
        margin: auto;
        
        div.newagency-card{
            width: calc(100% / 3);
        }
        
    }
}
#ourNews{
    .img-container{
        height: 50%;
        width: 100%;
        margin-bottom: 35px;
    }
    .card{
        
    }
}

#clientsFeedback{
    .img-container{
        height: 50%;
        width: 100%;
        margin-bottom: 40px;
        img{
            border-radius: 50%;
        }
    }
    .card{
        
    }
}
</style>
