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
    <div class="myProjects">
        <div class="myProjects_head">
            <h1 class="firstText">Projects</h1>
            <p class="accentSecondText"> I have had the opportunity to work on a variety of exciting projects that have allowed me to showcase my skills and creativity as a front and backend developer.
Dedicated and passionate about coding development, my approach is driven by an insatiable curiosity and a profound appreciation for the art of programming.</p>
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
        margin: 6vh 8vw;
    }
    .myProjects_content{
        position: relative;
        // height: 40vh;
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
</style>
