<script setup>
import { computed } from 'vue';
let watchCV = ()=>{
    window.open('/file/MARIUS_CV.pdf',"_blank")
}
let text = computed(()=>{
    let long = `Je suis un développeur fullstack , spécialisé actuellement sur Laravel et Vue.js.
                 Passionné par la technologies web, 
                  j'ai eu l'opportunité de travailler en tant que développeur Laravel et Vue.js pour une entreprise renommée,
                  où j'ai acquis une expertise approfondie dans ces technologies puissantes.
                   j'ai contribué au développement et à la maintenance de projets web complexes et évolutifs.
                   je suis constament a la recherche d'excellence, et une volonté de repousser les limites techniques.
                   si l'opportunite se presente , où je pourrai mettre à profit mes compétences et mon enthousiasme au sein d'une projet rigoreuse, 
                   n'hésitez pas à me contacter. Je serais ravi de discuter de vos projets et de voir comment je peux vous aider 
`
    let short = `Je suis un développeur fullstack spécialisé dans Laravel et Vue.js, avec une expertise 
    solide acquise chez une entreprise de renom. Ma passion pour la 
    technologie web et mon désir constant de repousser les limites techniques me 
    motivent à chercher de nouvelles opportunités. Si vous avez un projet exigeant 
    où je peux apporter mes compétences, n'hésitez pas à me contacter pour discuter de la collaboration. `
    return window.innerWidth<450 ? short:long
})

</script>

<template>
    <div class="aboutMe contentSection" >
        <div class="aboutMe_content ">
            <h1 class="firstText one">About Me</h1>
            <p class="aboutMe_text textAboutContent ">
                {{ text }}
            </p>
<button class="btn" @click="watchCV">Download CV</button>
<!-- <iframe
        title="PDF"
        src='/file/MARIUS_CV.pdf'
        width="100%"
        height="1000px" 
      ></iframe> -->
</div>
</div>

</template>

<style lang="scss" scoped>
.aboutMe{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .aboutMe_content{
        button{
            background: #D6D5A8;
            color:black;
        }
        // width:50%;
        h1{
            text-align: center;
            margin-bottom: 14px;
            color: var(--f1pt);
            // color:rgba($color: #D6D5A8, $alpha: 0.9);
        }
        p{
            text-align: justify;
            color:rgba($color: #ebeff4, $alpha: .6);

        }
    }
}
@media screen and (max-width: 2300px){
    .aboutMe_content{
        width:50%;
    }
}
@media screen and (max-width: 1300px){
    .aboutMe_content{
        width:70%;
    }
}
@media screen and (max-width: 900px){
    .aboutMe_content{
        width:70%;
    }
}
@media screen and (max-width:400px){
    .aboutMe_content{
        width:95%;
    }
  }
  @media screen and (max-width:400px){
    .textAboutContent{
        line-height: 170% !important;
    }
  }
</style>