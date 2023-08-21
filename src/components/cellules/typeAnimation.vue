<script>
import {init} from '@/animation/animation.js'
export default {
    props:{
        text:{
            type:Object,
            default:{
                first:"Hi! ",
                text1:"I'm RAZAFITSALAMA Marius",
                text2:"Web developer",
            }
        }
    },
    mounted() {
        init(this.$refs.name,this.$refs.context,this.text)
    },
}
</script>
<template>
    <div class="">
        <h1>
            <span is="type-async" id="type-text" class="letters" ref="name"
                >...</span
            >
            <span class="blinking-cursor">_</span>
        </h1>
        <h1>
            <span is="type-async" id="type-text2" ref="context">...</span>
            <span class="blinking-cursor">_</span>
        </h1>
    </div>
</template>

<style lang="scss">
@media screen and (max-width:600px){
    h1{
        font-size: 18px;
    }
}
</style>