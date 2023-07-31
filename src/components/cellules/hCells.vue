<script setup>
let props = defineProps({
    qualite:{
        type:Object,
        default:{
        label:"autonomie",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Debitis obcaecati amet, rem quia eum quaerat?
                     Aut, fugit?`,
        img:'/image/autonomie.png'
        }
    }
})
</script>
<template>
    <div class="hCell">
            <div class="img">
                <img :src="props.qualite.img" alt="">
            </div>
            <p class="h3">{{ props.qualite.label }} </p>
            <p >{{ props.qualite.text }} </p>
    </div>
</template>
<style scoped lang="scss">
.hCell{
    display: grid;
    /* flex-direction: column; */
    grid-template-rows: 30% auto 1fr;
    max-width: 100%;
    max-height: 25vh;
    .img{
        display: flex;
        justify-content: center;
        img{
            max-height: 100%;
            max-width: 100%;
            width: auto;
        }
    }
    p{
        text-align: center;
    }
}
</style>