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
        <!-- <AppSection v-if="store.sections[0].id === 'newAgencySection'"/> -->
        <!-- new agency section  -->
        <!-- <section id="newAgencySection">
            <div class="container">
                <h1>{{ store.sections[1].intestazione.h1 }}</h1>
                <p>{{ store.sections[1].intestazione.p }}</p>
                <div class="cards-container">
                    <AppCard v-for="card in store.sections[1].cards" :carta="card"/>
                </div>
            </div>
        </section> -->
        
        
        <section >
            <AppSection :id="section.id" v-for="section, index in store.sections" :key="section.id"
            :indice="index" :sezione="section"/>
        </section>

        <!-- services section  -->
        <section>
            <h1>

            </h1>
            <p>

            </p>
            <!-- services section cards  -->
            <div>
                <!-- v-for  -->
                <div> <!--  <---- componente -->

                </div>
                
            </div>
        </section>

        <!-- our work section  -->
        <section>
            <h1>

            </h1>
            <p>

            </p>
            <!-- our work section div img container   -->
            <div>
                <!-- v-for  -->
                <img src="" alt="">  
            </div>
            <button></button>
        </section>

        <!-- our plans section  -->
        <section>
            <h1>

            </h1>
            <p>

            </p>
            <!-- our plans section cards container  -->
            <div>
                <!-- v-for  -->
                <div>  <!--  <---- componente -->

                </div>
            </div>
        </section>

        <!-- our news section  -->
        <section>
            <h1>

            </h1>
            <p>

            </p>
            <!-- our news section cards container  -->
            <div>
                <!-- v-for  -->
                <div>

                </div>
            </div>
            <button></button>
        </section>

        <!-- clients review section  -->
        <section>
            <h1>

            </h1>
            <!-- carosello  -->
            <img src="" alt="">
            <p></p>
            <span></span>
            <div>
                <!-- v-for  -->
                <img src="" alt="">
            </div>
        </section>

    </main>
</template>

<style scoped lang="scss">
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

</style>
