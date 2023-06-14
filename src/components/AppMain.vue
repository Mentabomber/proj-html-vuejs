<script>
import AppSectionMain from './AppSectionMain.vue'

import { store } from '../store.js';

export default{
  components: {
    AppSectionMain,
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
        <!-- sezioni  -->
        <section >
            <AppSectionMain :id="section.id" v-for="section, index in store.sections" :key="section.id"
            :indice="index" :sezione="section"/>
        </section>

        <!-- avada logos  -->
        <section>
            <div id="logo-section" class="container">
                <div v-for="logo in store.avadaLogos" id="logo-container">
                    <img :src="logo" alt="logo_img">
                </div>
            </div>

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
#logo-section{
    border-top: 1px solid gray;
    display: $d-flex;
    justify-content: space-between;
}
#logo-container{
    
}
</style>
