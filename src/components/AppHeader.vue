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
 
<!-- header navbar  -->

<header>
    <nav class="container">
        <div id="nav-logo">
            <img src="images/logo_seo_1x.png" alt="">
        </div>
        <div id="nav-content-list">
            <ul>
                <li>
                    <span>Home</span>
                </li>
                <li>
                   <span>Who We Are</span> 
                </li>
                <li>
                    <span>What We Do</span>
                </li>
                <li>
                    <span>Where We Work</span>
                </li>
                <li>
                    <span>Careers</span> <button>Apply</button>
                </li>
                <li>
                    <span>News</span> 
                </li>
                <li>
                    <button>GET IN TOUCH NOW</button>
                </li>

            </ul>
        </div>
    </nav>
    <jumbotron>
        <!-- header jumbotron  -->
        <!-- <section :id="section.id" v-for="section, index in store.sections" :key="section.id">
            <AppSection v-if="section.id === 'jumbotronSection'"
            :indice="index" :sezione="section"/>
            <div>
            <button></button>
            <button></button>
        </div>
        </section> -->
        <!-- header jumbotron buttons container -->

    </jumbotron>
</header>

    


</template>

<style lang="scss">
header{
    background-image: url("./images/1-hero-image.png");
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
#nav-content-list{
    ul{
        display: flex;
        list-style: none;
        li{
            padding-right: 10px;
        }
    }
}

</style>
