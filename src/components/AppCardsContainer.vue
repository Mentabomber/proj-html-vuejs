<script>

import AppCardBasic from './cards/AppCardBasic.vue'

export default{
    name: "AppCardsContainer",
    props: {
        section: Object,
        // carta: Object
    },
    components: {
        AppCardBasic,

    }
}

</script>

<template>

<div class="cards-container">
    <AppCardBasic v-for="card in section.cards" :cardBody="card"/>  
</div>

</template>

<style scoped lang="scss">
.cards-container{
    display: flex;
    
}
   
</style>
