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
        <div class="plan-price" v-if='cardBody.cardPrice'>{{ cardBody.cardPrice }} 
            <div class="plan-cents-price-container">
                <span>99</span>
                <span style="color: black">monthly</span>
            </div> 
        </div>
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

 
    .plan-price{
        display: flex;
        justify-content: center;
        color: rgb(95,122,253);
    }
    .plan-cents-price-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        font-size: 10px;
    }
}
</style>
