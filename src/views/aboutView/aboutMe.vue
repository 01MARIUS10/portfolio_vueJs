<template>
    <div class="aboutMe">
        <div class="aboutMe_content ">
            <h1 class="firstText one">About Me</h1>
            <p class="aboutMe_text accentSecondText ">Je suis un développeur Fullstack PHP , spécialisé actuellement sur Laravel et Vue.js.
                 Passionné par la technologies web, 


                  j'ai eu l'opportunité de travailler en tant que développeur Laravel et Vue.js pour une entreprise renommée,
                  où 
                  j'ai acquis une expertise approfondie dans ces technologies puissantes.
                   j'ai contribué au développement et à la maintenance de projets web complexes et évolutifs.


                   je suis constament a la recherche d'excellence, et une volonté de repousser les limites techniques.

                   si l'opportunite se presente , où je pourrai mettre à profit mes compétences et mon enthousiasme au sein d'une projet rigoreuse, 
                   n'hésitez pas à me contacter. Je serais ravi de discuter de vos projets et de voir comment je peux vous aider 


</p>
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
        // width:50%;
        h1{
            text-align: center;
            margin-bottom: 14px;
            color: var(--f1pt);
            // color:rgba($color: #D6D5A8, $alpha: 0.9);
        }
        p{
            text-align: center;
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
</style>