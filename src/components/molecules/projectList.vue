<script setup>
import { popScopeId, reactive,ref,computed } from 'vue';
// import { defineEmits } from 'vue';
import { Carousel3d, Slide } from 'vue3-carousel-3d';
// import { Carousel, slide } from 'vue-carousel';

let emit = defineEmits(['prec','next'])
let props = defineProps({
    projects:{
        default:[]
    },
    active:{
        default:0
    }
})
let slides = ref(7)
function isShow(i){
    let res = (i==props.active ||  i==prec.value || i==next.value)? true:false
    console.log(i,props.active,prec.value,next.value,res)
    return res
}
let prec = computed(()=>{
    let a = props.active-1;

    a+=props.projects.length
    a= a%props.projects.length
    return a
})
let next = computed(()=>{
    let a = props.active+1;
    a+=props.projects.length
    a= a%props.projects.length
    return a
})

console.log(props.projects.length,'len')
</script>

<template>
    <!-- <div class="projectList"> -->
        <!-- <div class="prec">
            <img @click="$emit('prec')" src="/image/angle-cercle-droite.png" alt="">
        </div> -->
        <!-- <template v-for="(project,i) in props.projects" >
            <div v-if="isShow(i)" class="project card" :class="(i==props.active)? 'active':''" >
                <div class="project_head">
                    <p class="">{{ project.title }}</p>
                </div>
                <div class="project_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Laboriosam, minima in? Obcaecati sint vitae cumque 
                         at suscipit eum, error libero.</p>
                </div>
                <div class="project_action">
                    <button @click="next" class="btn btn-primary"> see more</button>
                </div>
            </div>
        </template> -->
        <!-- <div class="next">
            <img @click="$emit('next')" src="/image/angle-cercle-droite.png" alt="">
        </div> -->
    <!-- </div> -->
    <!-- <Carousel3d>
        <Slide :index="0">
        Slide 1 Content
        </Slide>
        <Slide :index="1">
        Slide 2 Content
        </Slide>
        <Slide :index="2">
        Slide 1 Content
        </Slide>
        <Slide :index="3">
        Slide 2 Content
        </Slide>
    </Carousel3d> -->
    
    <Carousel3d :controls-visible="true" :clickable="false">
    <Slide v-for="(slide, i) in slides" :index="i">
      <figure>
        <img src="/image/project/projectImage.png">
        <figcaption>
          The sky is the limit only for those who aren't afraid to fly!
                    The sky is the limit only for those who aren't afraid to fly!

        </figcaption>
      </figure>
    </Slide>
  </Carousel3d>
</template>

<style lang="scss">

.carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.projectList{
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:5px;
    position: relative;
     .next,.prec{
            position: absolute;
            top:50%;
            width: 50px;
            height: 50px;
            img{
                width: 90%;
                height: auto;
            }
        }
        .next{
            right:-50px;
        }
        .prec{
            transform: rotate(180deg);
            left:-50px;
        }
    .project{
        display: flex;
        flex-direction: column;
        padding: 10px;
        height: 60%;
        width: 30%;
        .project_head{
            height: 40px;
            p{
                font-size: 14px;
                font-weight: 600;
                padding-bottom: 0;
            }
        }
        .project_content{
            flex-grow: 1;
        }
        .project_action{
            display: flex;
            justify-content: end;
            height: 30px;
        }
    }
    .active{
        height: 90%;
        width: 35%;
    }
}
</style>