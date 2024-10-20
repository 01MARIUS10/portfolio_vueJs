<script setup>
import {  reactive, ref, computed } from "vue";
import { RouterLink } from "vue-router";
// import { Carousel3d, Slide } from 'vue3-carousel-3d';
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

let slides = ref([
    {
        title:"TodoApp",
        img: "/image/projet/todoApp--min.png",
        description:` Une application de gestion de tâches avec VueJs. Permettant de créer, attribuer, et suivre des tâches avec titres, descriptions, et listes de sous-tâches
        pouvant être cochées 
        au fur et à mesure de leur achèvement.
        `,
        code_link:"https://github.com/01MARIUS10/ToDoApp_vuejs",
        web_link:"https://01marius10-mytodoapp.netlify.app/"
    },
    {
        title:"Bus Scolaire",
        img: "/image/projet/busScolaire--min.png",
        description:` 
        Notre plateforme de ticketing, développée avec Vue.js, offre aux élèves la possibilité d'acheter des billets en ligne pour des trajets scolaires . Il génère un QR code unique qui est scanné lors de l'embarquement dans le bus.
        `,
        code_link:"https://github.com/01MARIUS10/projet_busScolaire",
        web_link:"https://01marius10-buscolaire.netlify.app"
    },
    {
        title:"Pizzeria BackOffice",
        img: "/image/projet/pizzeriaDashBoard--min.png",
        description:`développé avec Vue.js, 
        Laravel et Inertia.js, 
        
         Il comprend des fonctionnalités pour la gestion 
         des commandes, des menus, des livraisons, ainsi qu'une messagerie client, 
         le tout soutenu par un tableau de bord .
        `,
        code_link:"https://github.com/01MARIUS10/pizzeria_laravel-vueJs.git",
        web_link:null
    },
    {
        title:"Strong PHP architecture",
        img: "https://miro.medium.com/v2/resize:fit:1400/1*43uKsXfq35PrJKJTBq1MJw.png",
        description:`
            Architecture PHP , ou les routes sont gerer dynamiquement avec des models , controllers , services , views
            et un ORM integrer nativement . Avec des sessions pour utilisateur et des parties special admin . 
        `,
        code_link:"https://github.com/01MARIUS10/reseau_sociaux-withArchitecture ",
        web_link:null
    },
    {
        title:"Forum API",
        img: "/image/projet/rest-api-model--min.png",
        description:`
        un API cree a partir de Laravel .
        Les utilisateurs peuvent discuter, poser des questions, partager des informations et interagir avec d'autres membres.

        `,
        code_link:"https://github.com/01MARIUS10/projet_forum_apiLaravel.git ",
        web_link:null
    },

]);
let settings = reactive({
    itemsToShow: 1,
    snapAlign: "center",
});
let breakpoints = reactive({

    100: {
        itemsToShow: 1.1,
        snapAlign: "center",
    },
    450: {
        itemsToShow: 1.4,
        snapAlign: "center",
    },
    600: {
        itemsToShow: 1.5,
        snapAlign: "center",
    },
    700: {
        itemsToShow: 2.1,
        snapAlign: "center",
    },
    900: {
        itemsToShow: 2.3,
        snapAlign: "start",
    },
    1200: {
        itemsToShow: 3.0,
        snapAlign: "start",
    },
    1500: {
        itemsToShow: 3.8,
        snapAlign: "start",
    },
});

const goToCode = (projet)=>{
    let link = projet.web_link? projet.web_link : projet.code_link
    window.open(link,'_blank')
}
</script>

<template>
    <div class="h-100">
        <Carousel
            :items-to-show="3"
            :wrap-around="true"
            :transition="1000"
            :breakpoints="breakpoints"
        >
            <Slide v-for="(projet,j) in slides" :key="j">
                    <figure @click="goToCode(projet)">
                        <span class="title">{{ projet.title }}</span>
                        <div class=" image w-100 d-flex justify-content-center mb-3">
                            <div class="img">
                                <img :src="projet.img" />
                            </div>
                        </div>
                        <figcaption>
                            <p class="description">
                                <span>Description:</span>
                                {{ projet.description }}
                            </p>
                        </figcaption>
                    </figure>
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination :isSliding="true" />
            </template>
        </Carousel>
    </div>
</template>

<style lang="scss" >
figure {
    margin: 0 10px;
    padding: 25px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 94px 0px rgba(0, 0, 0, 0.05);
    display: grid;
    grid-template-rows: 50px 130px 200px ;
    .title {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.4rem;
    }
    .image{

        .img {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            margin-bottom: 10px;
            img{
                position: absolute;
                top:50%;
                left:50%;
                width: 100%;
                height: 100%;
                transform: translate(-50%,-50%);
            }
        }
    }
    .description {
        font-size: .9rem;
        // margin: 10px 30px;
        line-height: 1.4rem;
        text-align: initial;
        color: rgba(0,0,0,.8);
        span {
            font-weight: 600;
            color: var(--bgDark);
        }
    }
    .slide_link {
        text-align: right;
        padding: 0 50px;
        a{
            color:var(--f4)
        }
    }
    &:hover{
        // margin: 0 15px;
        transform: scale(1.03);
        border:solid 2px  var(--bgDark);
        transition: 1.3s;
            .img{
                img{
                    width: 120%;
                    height: 120%;
        transition: 1.3s;
            }
            }
    }
}
.carousel{
    height:100%;
}

.carousel__pagination{
    margin-top: 25px;
}
.carousel__viewport {
    overflow-y: inherit !important;
    overflow-x:hidden !important;
    padding:20px 0 ;
    height:90%;
}
.carousel__track{
    height:100%;
}
.carousel__next{
    right: -50px;
}
.carousel__prev{
    left: -50px;
}
.carousel__pagination-button::after {
    height: 12px;
    width: 40px;
    border-radius: 15px;
}
.carousel__pagination-button--active::after {
    width: 65px;
    border-radius: 10px;
}
.carousel__icon{
    background: rgba(9, 15, 32, 0.298);
    background: #000;
    border-radius: 50%;
    color:#fff
    // padding:5px;
}
@media screen and (max-width:450px){
    figure{
        grid-template-rows: 30px 120px 160px !important;
        padding: 20px 15px;
    }
    .carousel__next{
    right: -20px;
}
.carousel__prev{
    left: -20px;
}
}
</style>