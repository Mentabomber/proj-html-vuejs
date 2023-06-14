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
        <div v-if='cardBody.cardDate'>
            <span>{{ cardBody.cardDate }}</span>
        </div>
        <div v-if='cardBody.cardText'>
            <p >{{ cardBody.cardText }}</p>
        </div>
        <div v-if="cardBody.cardLink">
            <a href="#">{{ cardBody.cardLink }}</a>
        </div>
        <div v-if="cardBody.credentials">
            <span v-for="credential in cardBody.credentials">{{ credential }}</span>
        </div>
    </div>

</template>

<style lang="scss">


.card{

    padding: 20px;
    margin: 0 5px;
    width: 100%;
    .img-container{
    width: 30px;
    height: 30px;
    img{
        height: 100%;
        width: 100%;
    }
}
}
</style>
