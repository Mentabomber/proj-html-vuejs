<script>

export default{
    name: "AppCard",
    props: {
        details: Object
    }
}

</script>

<template>

 <div>
    <!-- titolo / intestazione  -->
    <div>
        <div v-if='details.img !== ""' class="img-container">
            <img :src="details.img" alt="">
        </div>
        <h1 v-if='details.h1 !== ""'>{{ details.h1 }}</h1>
        <p v-if='details.h1 !== ""'>{{ details.p }}</p>
    </div>
 </div>

</template>

<style lang="scss">
.img-container{
    width: 15px;
    height: 15px;
}
</style>
