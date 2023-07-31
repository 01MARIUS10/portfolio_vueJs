<script setup>
import { ref } from 'vue';
import hCells from '../cellules/hCells.vue';

let qualites = ref([
    {
        label:"autonomie",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Debitis obcaecati amet, rem quia eum quaerat?
                     Aut, fugit?`,
        img:'/image/autonomie.png'
    },
    {
        label:"equipe",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Debitis obcaecati amet, rem quia eum quaerat?
                     Aut, fugit?`,
        img:'/image/equipe.webp'
    },
    {
        label:"brainstorming",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Debitis obcaecati amet, rem quia eum quaerat?
                     Aut, fugit?`,
        img:'/image/brainstorming.png'
    }
])
</script>
<template>
    <div class="container strengths w-100 h-100">
        <div class="row h-100 w-100 border border-secondary">
            <div class="img col-4 h-100">
                <img src="/image/profil/361247685_655024949859470_420655531344158608_n.webp" alt="">
            </div>
            <div class="strength_right gap-2 col-8 d-flex flex-column justify-content-center h-100">
                <div class="h-25">
                    <h1>why should this is me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Debitis obcaecati amet, rem quia eum quaerat?
                         Aut, fugit? Quidem adipisci iusto neque eveniet 
                         tenetur fuga excepturi, ut officia possimus itaque
                          sunt fugiat sit nesciunt ipsam blanditiis.</p>
                </div>
                <div class="container d-flex align-items-center flex-grow-1 w-100 h-75">
                    <div class="list w-100 ">
                  <hCells v-for="q in qualites" :qualite="q" />
              </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.strengths{
    padding-top: 2vh;
    .row{
        max-height: 100%;
    }
    .strength_right{

    }
    .element{
        max-height: 100%;
        width: auto;
        .img{
            height: 150px;
            display: flex;
            justify-content: center;
        }
    }
    img{
        height: 100%;
        width: auto;
        max-width: 100%;
        max-height: 365px;
    }
    .list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
