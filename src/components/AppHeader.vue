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
    <div class="container">
        <nav>
            <div id="nav-logo">
                <img src="images/logo_seo_w_1x.png" alt="">
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
                        <button class="buttons button-gold">GET IN TOUCH NOW</button>
                    </li>

                </ul>
            </div>
        </nav>
        <jumbotron>
        <!-- header jumbotron  -->
            <h1>SEM Campaigns Made Simple With Avada</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus at harum nobis fugit explicabo sunt asperiores laboriosam doloremque beatae fuga corporis itaque enim, quae officia saepe autem sed iusto.</p>
            <div>
                <button class="buttons button-gold">BUY AVADA NOW</button>
                <button class="buttons button-blue">CONTACT US</button>
            </div>    

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
    </div>
    
    
</header>

    


</template>

<style scoped lang="scss">
@use '../styles/partials/variable.scss' as *;
// header rules 

header{
    background: url("./images/1-hero-image.png");
    background-size: contain;
    background-repeat: no-repeat;
    height: 1000px;
    width: 100%;
    color: $brand_white_color;
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    jumbotron{
        padding-top: 200px;
        padding-bottom: 30px;
        text-align: start;
        display: block;
        width: 40%;
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
// buttons 
.buttons{
color: $brand_white_color;
border: none;
border-radius: 25px;
padding: 10px 25px;
}
.button-gold{
background-color: $brand_gold_color;
}
.button-blue{
background-color: $brand_lightblue_color;
}
</style>
