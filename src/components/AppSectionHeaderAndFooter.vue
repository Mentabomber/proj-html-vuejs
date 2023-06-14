<script>
import { store } from '../store.js';


import AppCardsContainer from './AppCardsContainer.vue'
import AppImagesContainer from './AppImagesContainer.vue'

export default{
    props: {
        sezione: Array,
        details: String
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
    <nav id="header-nav" v-if="details === 'header'">
        <div id="nav-logo">
            <img :src="store.header[1].img" alt="">
        </div>
        <div id="nav-content-list">
            <ul>
                <li v-for="link in store.header[1].listOfLinksName">
                    <div v-if="link.linkType === 'basic'">
                        <a href="#">{{ link.linkName }}</a>
                    </div>
                    <div class="basic-button" v-else-if="link.linkType === 'basic+button'">
                        <a href="#">{{ link.linkName }}</a>
                        <button class="li-linked-button">{{ link.linkButtonName }}</button>
                    </div>
                    <div v-else-if="link.linkType === 'button'">
                        <button>{{ link.linkName }}</button>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <nav v-else-if="details === 'footer'">
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

</section>
 

</template>

<style scoped lang="scss">
@use '../styles/partials/variable.scss' as *;
.container{
  width: 1080px;
  margin: auto;
  text-align: center;
}
.imgs-container{
  display: flex;
  flex-wrap: wrap;
}
nav{
    ul{
        list-style: none;
    }
}
#header-nav{
    a{
        color: white;
        text-decoration: none;
    }
    .li-linked-button{
        background-color: transparent;
        color: $brand_gold_color;
        border-radius: 20%;
        border: 1px solid $brand_gold_color;
        padding: 4px;
    }
    ul{
        display: $d-flex;
        align-items: baseline;
        li{
            margin: 5px;
        }
    }
    .basic-button{
        display: $d-flex;
        align-items: end;
        a{
            padding-right: 5px;
        }
    }
   
}
</style>
