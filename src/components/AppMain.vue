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
    background-color: $brand_grey_color;
    .container{
        
        // background: url("./images/agency-seo-desk-front.jpg");
        // background-size: cover;
        // background-repeat: no-repeat;
        // background-position: center;
    .cards-container{
        margin: auto;
        
        div.newagency-card{
            width: calc(100% / 3);
        }
        .card{
            background-color: white;
            .img-container{
                margin: auto;
            }
            h2{
                    margin: 20px auto;
                }
            p{
                line-height: 30px;
                padding: 10px;
            }
            
            img{
                filter: invert(85%) sepia(16%) saturate(6871%) hue-rotate(331deg) brightness(102%) contrast(101%);
            }
        }
    }
    }
    
}
#services{
    background: url("./images/pattern_background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(5,22,66);
    
    color: white;
    .card {
        margin-top: 50px;
        margin-bottom: 125px;
        background-color: $brand_darkblue_color ;
    h2{
        margin: 20px auto;
    }
    p{
        line-height: 30px;
        padding: 10px;
    }
    .img-container{
        margin: 20px auto;

    }
    img{
        filter: invert(85%) sepia(16%) saturate(6871%) hue-rotate(331deg) brightness(102%) contrast(101%);
    }
    a{
        color: $brand_gold_color;
        text-decoration: none;
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
