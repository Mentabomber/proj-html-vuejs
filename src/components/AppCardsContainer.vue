<script>

import AppCardBasic from './cards/AppCardBasic.vue'
import AppCardPlans from './cards/AppCardPlans.vue'

export default{
    name: "AppCardsContainer",
    props: {
        section: Object,
        // carta: Object
    },
    components: {
        AppCardBasic,
        AppCardPlans

    }
}

</script>

<template>

<div class="cards-container basic" v-if="section.cardType === 'basic'">
    <AppCardBasic v-for="card in section.cards" :cardBody="card"/>  
</div>
<div class="cards-container plans" v-else-if="section.cardType === 'plans'">
    <AppCardPlans v-for="card in section.cards" :cardBody="card"/>  
</div>

</template>

<style scoped lang="scss">
.cards-container{
    display: flex;
    justify-content: center;
    
    .basic{

    }
    .plans {

        
    }  
}
   
</style>
