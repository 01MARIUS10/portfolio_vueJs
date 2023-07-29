<template>
    <button class="button d-flex align-items-center rounded-pill" :style="buttonStyle">
        <img v-if="props._icon" :src="button.icon.src" alt="" :style="iconStyle">
        <p class="m-0">{{ props._text }}</p>
    </button>
</template>

<script setup>
import {ref,reactive,computed} from 'vue'
let props = defineProps({
    _size:{
        type:String,
        required:true
    },
    _text:{
        type:String,
        required:true
    },
    _color:{
        type:String,
        required:true
    },
    _bgColor:{
        type:String,
        required:true
    },
    _icon:{
        type:String,
        default:'/icons/icons8-poubelle-64.png'
    },
})

let allSize = ref([['xl',44],['lg',36],['sm',32]])
let sizeHeight = computed(()=>{
    return allSize.value.filter(e=> e[0]===props._size)[0][1]
})
let button = reactive({
    margin:4,
    paddingX:16,
    paddingY:8,
    color:props._color,
    bgColor:props._bgColor,
    height:sizeHeight.value,
    icon:{
        src:props._icon,
        gap:6
    }
})
let buttonStyle = computed(()=>{
    return `
    gap:${button.icon.gap}px;
    background:${button.bgColor};
    color:${button.color};
    margin:${button.margin}px;
    padding:${button.paddingY}px ${button.paddingX}px;
    min-width:64px;
    height:${button.height}px;
    `
})
let iconStyle = computed(()=>{
    return `
    width:auto;
    height:110%;
    `
})
console.log(props._size,sizeHeight)
</script>



<style scoped>

p{
    font-weight: 500;
    font-size:16px;
}
</style>