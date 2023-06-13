<script>

export default{
    name: "AppCardBasic",
    props: {
        cardBody: Object,

    }
}

</script>

<template>
     <!-- titolo / intestazione   -->
    <div class="card">
        <div v-if='cardBody.img' class="img-container">
            <img :src="cardBody.img" alt="">
        </div>
        <div v-if='cardBody.cardTitle'>
            <h2>{{ cardBody.cardTitle }}</h2>
        </div>
        <div v-if='cardBody.cardText'>
            <p >{{ cardBody.cardText }}</p>
        </div>
        <div v-if="cardBody.cardLink">
            <a href="#">{{ cardBody.cardLink }}</a>
        </div>
        <div v-if="cardBody.credentials">
            <span>{{ cardBody.credentials }}</span>
        </div>
    </div>

</template>

<style lang="scss">
.img-container{
    width: 15px;
    height: 15px;
    // img{
        
    // }
}
.card{
    
    border: 1px solid black;
    padding: 20px;
    margin: 0 5px;
    width: 100%;
    height: 100%;
}
</style>
