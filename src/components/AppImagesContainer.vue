<script>



export default{
    name: "AppImagesContainer",
    props: {
        section: Object,
    },
}

</script>

<template>
<div class="img-container" v-for="img in section.imgs">
    <img  :src="img" alt="">
</div>


</template>

<style scoped lang="scss">
    .img-container{
        
        width: calc(100% / 3);
        height: calc(100% / 3);
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
