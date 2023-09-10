<script setup>
import { ref,watch } from 'vue';
import carousselProjects from '@/components/molecules/carousselProjects.vue'

let projects = ref([
    {
        title:"Bus nay 1",
        content:`lorem ipsum doloe sitamet consectetur , adispisicing elit
        dolor sit amet consectetur, adipisicing elit.
                Laborum iure, alias illo nihil earum molestias, voluptate
                consectetur facere porro animi veniam iste tempora natus  
                architecto `
    },{
        title:"Bus nay 2",
        content:`lorem ipsum doloe sitamet consectetur , adispisicing elit
        dolor sit amet consectetur, adipisicing elit.
                Laborum iure, alias illo nihil earum molestias, voluptate
                consectetur facere porro animi veniam iste tempora natus  
                architecto `
    },
    {
        title:"Bus nay 3",
        content:`lorem ipsum doloe sitamet consectetur , adispisicing elit
        dolor sit amet consectetur, adipisicing elit.
                Laborum iure, alias illo nihil earum molestias, voluptate
                consectetur facere porro animi veniam iste tempora natus  
                architecto `
    },
    {
        title:"Bus nay 4",
        content:`lorem ipsum doloe sitamet consectetur , adispisicing elit
        dolor sit amet consectetur, adipisicing elit.
                Laborum iure, alias illo nihil earum molestias, voluptate
                consectetur facere porro animi veniam iste tempora natus  
                architecto `
    }
])

</script>

<template>
    <div class="myProjects contentSection">
        <div class="myProjects_head">
            <h1 class="firstText">Mes projets</h1>
            <p class="accentSecondText">
                 <!-- I have had the opportunity to work on a variety of exciting projects that have allowed me to showcase my skills and creativity as a front and backend developer.
Dedicated and passionate about coding development, my approach is driven by an insatiable curiosity and a profound appreciation for the art of programming. -->

Je suis ravi de vous presenter un apercu sur mes realisations web , ou je partage fierement mon travail ainsi que ma passion et devotion pour le devellopement Web .
Avoir une meilleur approche du probleme et de maniere simple tout en adoptant une architecture propre , 
 Chacun de ses projets representent un defi et contribue a ma croissance proffessionnel et competences. 
</p>
        </div>
        <div class="myProjects_content">
            <carousselProjects />
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
.myProjects{
    .myProjects_head{
        height: 25vh;
        margin: 10vh 8vw 0 8vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .myProjects_content{
        position: relative;
        margin:0 5%;
        margin-bottom: 1vh;
        .myProjects_card{
            height: 100%;
        }

       
    }
    .myProjects_navigation{
        display: flex;
        justify-content: center;
        gap:8px;
        span{
            width: 20px;
            height: 15px;
            background-color: antiquewhite;
            border: solid 1px darkolivegreen;
            border-radius: 8px;
        }
    }
}
@media screen and (max-height:700px) and (min-width:900px){
    .myProjects .myProjects_head{
        margin: 6vh 8vw 0 8vw;
    }
    .firstText{
        margin-bottom: 0 !important;
    }
}
@media screen and (max-width:900px){

    .myProjects_head{
        margin: 5vh 8vw 0 8vw !important;
    }
}
</style>
