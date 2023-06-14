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
        <div id="header-nav-logo">
            <img :src="store.header[1].img" alt="logo_img">
        </div>
        <div id="nav-content-list">
            <ul>
                <li v-for="link in store.header[1].listOfLinksName">
                    <div v-if="link.linkType === 'basic'">
                        <a :class="link.active ? 'active' : '' " href="#">{{ link.linkName }}</a>
                    </div>
                    <div class="basic-button" v-else-if="link.linkType === 'basic+button'">
                        <a :class="link.active ? 'active' : '' " href="#">{{ link.linkName }}</a>
                        <button class="li-linked-button">{{ link.linkButtonName }}</button>
                    </div>
                    <div v-else-if="link.linkType === 'button'">
                        <button class="btn-orange">{{ link.linkName }}</button>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <nav id="footer-nav" v-else-if="details === 'footer'">
        <div id="footer-nav-logo">
            <img :src="store.footer[1].img" alt="">
        </div>
        <div id="nav-content-list">
            <ul>
                <li v-for="link in store.header[1].listOfLinksName">
                    <div >
                        <a :class="link.active ? 'active' : '' " href="#">{{ link.linkName }}</a>
                    </div>  
                </li>
            </ul>
        </div>
        <ul id="copyrights-list">
            <li v-for="text in store.footer[1].listOfCopyrights">{{ text }}</li>
        </ul>
        <ul id="social-links">
            <li v-for="social in store.footer[1].socialLinks">
                 <div class="social-img-container">
                    <img :src="social.img" alt="">
                 </div>
            </li>
        </ul>
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
    display: $d-flex;
    flex-wrap: wrap;
}
nav{
    ul{
        list-style: none;
    }
}
.active{
        color: $brand_gold_color;
    }
#header-nav{

    #header-nav-logo {
        display: $d-flex;
        align-items: center;
    }
    display: $d-flex;
    justify-content: space-between;
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
            margin: 15px;
        }
    }
    .basic-button{
        display: $d-flex;
        align-items: end;
        a{
            padding-right: 5px;
        }
    }
    .btn-orange{
        background-color: $brand_gold_color;
        padding: 10px;
        border-radius: 25px;
        border: none;
        color: white;
        font-size: 12px;
        font-weight: bold;
    }
}
#footer-nav{
    margin-top: 20px;
    #nav-content-list{
        ul{
            margin-top: 20px;
            display: $d-flex;
            justify-content: center;
            li{
                margin: 15px;
                a{
                    text-decoration: none;
                }
            }
        }
    }
    #copyrights-list{
        margin-top: 20px;
        display: $d-flex;
        justify-content: center;
      
        li{
            font-size: 12px;
        }
    }
    #social-links{
        margin-top: 20px;
        display: $d-flex;
        justify-content: center;

            li{
                margin-right: 25px;
            }
        .social-img-container{
            width: 20px;
            height: 25px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

}
</style>
