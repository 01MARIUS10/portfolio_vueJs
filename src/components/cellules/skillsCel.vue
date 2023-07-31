<script setup>
let props = defineProps({
    image:{
        type:Object,
        default:{ name: "vue js", src: "/image/skills/vuejs.png" }
    },
    hideCell:{
        type:Boolean,
        default:false
    }
})
</script>
<template>
    <div 
    class="skillsCel d-flex flex-column justify-content-center align-items-center "
    :class="{hideCell:props.hideCell}"
    >
        <div class="img">
            <img :src="props.image.src" alt="" >
        </div>
        <p class="mb-0">{{ props.image.name }}</p>
    </div>
</template>
<style scoped lang="scss">

//input
$widthCell:110px;
$mbCell:10px;
$heightCell:calc($widthCell * .9);


$sqr2:1.4142;
$w:calc($heightCell / $sqr2);
$h: calc($heightCell / $sqr2);



.skillsCel{
    // width and height of cell
    width: $widthCell;
    height: $heightCell;
    margin:0 0 $mbCell 0;
    position:relative;
    background: var(--var14);
    border-top: solid 2px var(--var11);
    border-bottom: solid 2px var(--var11);
    &::before{
        position:absolute;
        content:" ";
        top:50%;
        //width and height of backCell
        // width % sqrt(2)
        // height % sqrt(2)
        width:$w;
        height:$h;
        left:50%;
        background: var(--var14);
    border: solid 2px var(--var11);
        transform: rotate(-45deg) translate(-55%,-125%) ;
        z-index: -1;
    }
    &::after{
        position:absolute;
        content:" ";
        top:50%;
        width:$w;
        height: $h;
        left:50%;
        background: var(--var14);

    border: solid 2px var(--var11);
        transform: rotate(-45deg) translate(55%,-15%) ;
        z-index: -1;
    }
    
    .img{
        width: 75%;
        height: 65%;
        display: flex;
        justify-content: center;;
        img{
            height: 100%;
            width: auto;
            max-width: 100%;
        }
    }
}

.hideCell{
    filter:opacity(0);
}

// @media  screen and (max-width:100px) {
//     $widthCell:75px;
//     $mbCell:5px;

// $heightCell:calc($widthCell * 1.4);


// $sqr2:1.4142;
// $w:calc($heightCell / $sqr2);
// $h: calc($heightCell / $sqr2);

// .skillsCel{
//     // width and height of cell
//     width: $widthCell;
//     height: $heightCell;
//     margin:0 $mbCell;
//     position:relative;
//     background: var(--var14);
//     border-top: solid 2px var(--var11);
//     border-bottom: solid 2px var(--var11);
//     &::before{
//         position:absolute;
//         content:" ";
//         top:50%;
//         //width and height of backCell
//         // width % sqrt(2)
//         // height % sqrt(2)
//         width:$w;
//         height:$h;
//         left:50%;
//         background: var(--var14);
//     border: solid 2px var(--var11);
//         transform: rotate(-45deg) translate(-35%,-105%) ;
//         z-index: -1;
//     }
//     &::after{
//         position:absolute;
//         content:" ";
//         top:50%;
//         width:$w;
//         height: $h;
//         left:50%;
//         background: var(--var14);

//     border: solid 2px var(--var11);
//         transform: rotate(-45deg) translate(35%,-35%) ;
//         z-index: -1;
//     }
    
//     .img{
//         width: 75%;
//         height: 65%;
//         display: flex;
//         justify-content: center;;
//         img{
//             height: 100%;
//             width: auto;
//             max-width: 100%;
//         }
//     }
// }

// }
</style>