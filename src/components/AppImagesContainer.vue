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
  
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
