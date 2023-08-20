<script setup>
import { ref } from 'vue';
import serviceCell from '@/components/molecules/serviceCell.vue';

let services = ref([
        {
            title:"Conception Web",
            subtitle:"Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
            label:"Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
            qualite:[
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                },
                {
                    title:"Responsivite",
                    cle:"responsive",
                    label:" Les designs doivent être tout aussi étonnants sur tous les appareils. Je veille à ce que chaque intégration soit parfaitement responsive, offrant une expérience fluide sur ordinateurs de bureau, tablettes et smartphones."
                },
                {
                    title:"Respect des Normes",
                    cle:"norme SEO,...",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                }
            ],
            img:"/image/autonomie.png"
        },
        {
            title:"fullstack PHP",
            subtitle:"Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
            label:"Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
            qualite:[
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                },
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                },
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                }
            ],
            img:"/image/autonomie.png"
        },
        {
            title:" VueJs et Angular",
            subtitle:"Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
            label:"Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
            qualite:[
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                },
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                },
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                }
            ],
            img:"/image/autonomie.png"
        },
        {
            title:"Back-end PHP Laravel",
            subtitle:"Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
            label:"Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
            qualite:[
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                },
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                },
                {
                    title:"Précision dans les Détails",
                    cle:"Precision",
                    label:" Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer."
                }
            ],
            img:"/image/autonomie.png"
        }
])
</script>
<template>
    <div class="myServices">
        <div class="myService_head ">
            <div class="text ps-4">
                <p class="h3 firstText ">Quels services je vous propose ?</p>
                <p class="accentSecondText hidePhon400">Découvrez ci-dessous les services que je propose pour vous accompagner dans la réalisation de vos projets web.</p>
            </div>
            <img src="/image/profil/361237407_3659592854272783_9182702132017054179_n.webp" alt="">
        </div>
        <div class="myServices_content">
            <template v-for="service in services" class="">
                <serviceCell :service="service"/>
            </template>
        </div>
    </div>
</template>
<style scoped lang="scss">
.myServices{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
    gap:5vh;
    // background: var(--var8);
    .myService_head{
        display: flex;
        // justify-content: space-between;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        .text{
            // width: 50%;
            // flex-grow: 1;
            padding:0 5%;
            p{
                text-align: center;

            }
            .textLabel{
                font-size: 16px;
                color: var(--textDark_second);
            }
        }
        img{
            height: 28vh;
            width: auto;
        }
    }
    .myServices_content{
        width:100%;
        min-height: 50%;
    }
}

@media screen and (max-width:3200px){
    .myServices_content{
        display: flex;
        gap:10px;
    }
}
@media screen and (max-width:1200px){
    .myServices{
        padding-top: 0;
        gap:0;
        justify-content: space-around;
    }
    .myServices_content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr; 
    }
}
@media screen and (max-width:400px){
    
    
  }
</style>