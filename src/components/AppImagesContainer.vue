<script>

import AppCard from './cards/AppCard.vue'

export default{
    name: "AppImagesContainer",
    props: {
        section: Object,
    },
}

</script>

<template>
<div class="img-container">
    <img v-for="img in section.imgs" :src="img" alt="">
</div>


</template>

<style scoped lang="scss">
    .img-container{
        display: flex;
        width: calc(100% / 3);
        height: calc(100% / 3);
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
