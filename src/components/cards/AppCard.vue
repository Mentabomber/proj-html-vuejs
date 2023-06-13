<script>

export default{
    name: "AppCard",
    props: {
        details: Object,
        carta: Object
    }
}

</script>

<template>

 <div>
     <!-- titolo / intestazione   -->
    <div>
        <div v-if='details.img !== ""' class="img-container">
            <img :src="details.img" alt="">
        </div>
        <h2 v-if='details.cardTitle !== ""'>{{ details.cardTitle }}</h2>
        <p v-if='details.cardTitle !== ""'>{{ details.cardText }}</p>
    </div>
 </div>
 <!-- <div class="newagency-card">
    titolo / intestazione 
    <div v-if='carta.img !== ""' class="img-container">
        <img :src="carta.img" alt="">
    </div>
    <h1 v-if='carta.h1 !== ""'>{{ carta.h1 }}</h1>
    <p v-if='carta.h1 !== ""'>{{ carta.p }}</p>
 </div> -->

</template>

<style lang="scss">
.img-container{
    width: 15px;
    height: 15px;
    // img{
        
    // }
}
.newagency-card{
    border: 1px solid black;
    padding: 20px;
}
</style>
