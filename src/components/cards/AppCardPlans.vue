<script>

export default{
    name: "AppCardPlans",
    props: {
        cardBody: Object
    }
}

</script>

<template>

 <div>

    <div class="plan-container">
        <h2 v-if='cardBody.cardTitle'>{{ cardBody.cardTitle }}</h2>
        <p v-if='cardBody.cardText'>{{ cardBody.cardText }}</p>
        <div v-if='cardBody.cardPrice'>{{ cardBody.cardPrice }}</div>
        <div v-if='cardBody.cardInfos'>
            <ul>
                <li v-for="cardInfo in cardBody.cardInfos"><span >{{ cardInfo }}</span></li>
            </ul>
        </div>
        <div v-if='cardBody.cardLink'>
            <button >{{ cardBody.cardLink }}</button>
        </div>

        
    </div>
 </div>

</template>

<style lang="scss">

.plan-container{
    margin: 5px;
    padding: 15px;
    
    ul{
        list-style: none;
    }
}
</style>
