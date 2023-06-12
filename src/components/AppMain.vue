<script>
import AppSection from './AppSection.vue'

import { store } from '../store.js';

export default{
  components: {
    AppSection
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
    <section :id="section.id" v-for="section, index in store.sections" :key="section.id">
        <AppSection v-if="section.id === 'newAgencySection'"
        :indice="index" :sezione="section"/>
    </section>
    <!-- <AppSection v-if="store.sections[0].id === 'newAgencySection'"/> -->
    <!-- new agency section  -->
    <section>
        <div>
            <h1>
                
            </h1>
            <p>
                
            </p>
            <!-- new agency section cards  -->
            <div>
                <!-- v-for  -->
                <div>  <!--  <---- componente -->
                    
                </div>
            </div>
        </div>
        <!-- div per solo background che comprende il 50% della section  -->
        <div>

        </div>
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

<style lang="scss">
#newAgencySection{
    background-image: store.;
    height: 100px;
}
</style>
