<script setup>
import { ref,computed } from "vue";
import serviceCell from "@/components/molecules/serviceCell.vue";
let question = computed(()=>{
    return window.innerWidth>1050 ? 'Quels services je vous propose ?':'Quels services je propose ?'
})
let services = ref([
    {
        title: "Integration web",
        subtitle:
            "Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
        label: `
        Vous chercher a transformer votre maquette en site ou page web fonctionnel? 
        je maitrise les languages web tel que le html ,css et le javascript.
        `,
        qualite: [
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
            {
                title: "Responsivite",
                cle: "responsive",
                label: " Les designs doivent être tout aussi étonnants sur tous les appareils. Je veille à ce que chaque intégration soit parfaitement responsive, offrant une expérience fluide sur ordinateurs de bureau, tablettes et smartphones.",
            },
            {
                title: "Respect des Normes",
                cle: "norme SEO,...",
                label: "votre site fonctionne de manière cohérente sur différents navigateurs (Chrome, Firefox, Safari, etc.) et plates-formes (Windows, macOS, Android, iOS, etc.).",
            },
        ],
        img: "/image/autonomie.png",
    },
    {
        title: "Frontend VueJs et Angular",
        subtitle:
            "Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
        label: `
        Si vous avez besoin de develloper des interface web dynamique et reactive;
        Avec Vuejs et Angular , je pourrait
        cree des applications web complexes avec de meilleurs experiences utilisateurs 
        `,
        qualite: [
            {
                title: "Bonne connaissance en design",
                cle: "UX",
                label: "l'esthétique est essentielle pour créer des interfaces utilisateur attrayantes et conviviales coorespondant a la bonne experiences utilisateurs.",
            },
            {
                title: "Pensée Analytique ",
                cle: "qualite",
                label: " La capacité à analyser des problèmes complexes, à décomposer des défis en éléments plus petits et rendre l'interface plus dynamiques et flexibles selon les besoins requis .",
            },
            {
                title: "Optimisation des Performances ",
                cle: "Norme",
                label: " rendre les sites web et les applications plus rapides et plus réactifs, offrant ainsi une meilleure expérience utilisateur. ",
            },
        ],
        img: "/image/autonomie.png",
    },
    
    {
        title: "PHP Laravel et Symfony",
        subtitle:
            "Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
        label: `
        Je develloppe des applications backend restAPI avec les framework Laravel et Symfony
         .Avec les bonnes conceptions et architectures conforme a votre projet`,
        qualite: [
            {
                title: "Conception logiques metiers",
                cle: "backend logic",
                label: " collaborer étroitement avec les parties prenantes métier pour comprendre leurs objectifs, leurs exigences fonctionnelles et leurs contraintes et ainsi modeliser les processus et fonctionnalites",
            },
            {
                title: "Normes de codage rigoureuses ",
                cle: "qualite",
                label: " Maintenir des normes de codage strictes, en suivant les meilleures pratiques de l'industrie pour garantir que mon code est facilement lisible, maintenable et évolutif.",
            },
            {
                title: "Mise en production",
                cle: "Docker",
                label: " Faciliter le deployement avec l'outils docker , garanti une meilleur gestions des dependances et la portabilites de notre application .",
            },
        ],
        img: "/image/autonomie.png",
    },
]);
</script>
<template>
    <div class="myServices contentSection w-100">
        <div class="myService_head">
            <div class="text ">
                <p class="firstText">Mes Competences</p>
                <p class="h3 question">{{ question }}</p>
                <p class="accentSecondText hidePhon400">
                    Découvrez ci-dessous les services que je propose pour vous
                    accompagner dans la réalisation de vos projets web.
                </p>
            </div>
                <div class="myService_image p-4 hidePhon800">
                    <div class="s1"></div>
                    <div class="s2"></div>
                    <img
                        class="bg-white rounded-circle"
                        src="/image/profil/361237407_3659592854272783_9182702132017054179_n.webp"
                        alt=""
                    />
                </div>
        </div>
        <div class="myServices_content">
            <template v-for="service in services" class="">
            <transition>
                <serviceCell  :service="service"/>
            </transition>
            </template>
        </div>
    </div>
</template>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.myServices {
    height: 100%;
    display: flex;
    flex-direction: column;
    .myService_head {
        display: flex;
        justify-content: space-between;
        .text {
            .accentSecondText{
                max-width: 600px;
            }
            .textLabel {
                font-size: 16px;
                color: var(--textDark_second);
            }
        }
        .myService_image {
            position: relative;
            margin:0 50px 0 80px;
            img {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 2;
                max-height: 100%;

            }
            .s1::before,
            .s1::after,
            .s2::before,
            .s2::after {
                position: absolute;
                content: " ";
                top: 50%;
                left: 50%;
                border-radius: 50%;
            }
        }
    }
    .myServices_content {
        width: 100%;
        display: grid;
    
    }
}

@media screen and (max-width: 3200px) {
    // .text{
    //     margin-top: 10px;
    // }
    .myServices{
        gap: 6%;
    }
    .myServices_content {
        padding: 15px 10% 0 10% !important;
        grid-template-columns: 1fr 1fr 1fr;
        gap:30px;
    }
    .myService_head{
        align-items: end;    
        margin: 9vh 8vw 1vh 8vw;
    }
    .firstText{
        margin-bottom: .4rem !important;
    }
    .question{
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: 2px;
    }

    .myService_image {
        height: 23vh;
        width: 23vh;
    }
    .s1::before {
        width: 285px;
        height: 120px;
        background: var(--f4);
        border: solid 2px var(--f2);
        transform: rotate3d(1, 1, 1, -54deg) translate(-60%, -60%);
        z-index: 1;
    }
    .s1::after {
        width: 180px;
        height: 150px;
        background: var(--f4);
        border: solid 2px var(--f2);
        transform: rotate3d(6, 8, 3, -195deg) translate(-50%, -35%);
        z-index: 1;
    }
    .s2::before {
        width: 325px;
        height: 195px;
        background: var(--f2);
        border: solid 2px yellow;
        z-index: 1;
        transform: rotate3d(2, 4, -2, 125deg) translate(41%, -52%);
    }
    .s2::after {
        width: 300px;
        height: 267px;
        background: var(--f2);
        border: solid 2px yellow;
        transform: rotate3d(-25, -21, -2, -247deg) translate(-60%, -54%);
        z-index: 0;
    }
}
@media screen and (max-width: 1050px){
    .myService_head{
        margin: 7vh 6vw 1vh 6vw;
    }
    .myServices_content{
        padding:15px 5% 5% 5% !important;
        gap:20px;
    }
    
}
@media screen and (max-height:700px) and (min-width:900px){
    .myServices{
        gap: 2%;
    }
    .myService_head{
        margin: 7vh 8vw 1vh 8vw;
    }
    .serviceCell {
  grid-template-rows: 90px 30px auto 40px;
}
}

@media screen and (max-width: 1500px) {
    .myService_image {
        height: 21vh;
        width: 21vh;
        * {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .s1::before {
        width: 251px;
    }
    .s1::after {
        width: 175px;
        transform: rotate3d(6, 8, 3, -195deg) translate(-50%, -48%);
    }
    .s2::before {
        width: 283px;
        transform: rotate3d(2, 4, -2, 125deg) translate(20%, -53%);
    }
    .s2::after {
        width: 296px;
        height: 250px;
    }
}

@media screen and (max-width: 1200px) {
    .myServices {
        padding-top: 0;
        gap: 0;
        justify-content: space-around;
    }

    .s1::before {
        width: 200px;
        height: 95px;
    }
    .s1::after {
        width: 132px;
        height: 101px;
    }
    .s2::before {
        width: 220px;
        height:140px;
    }
    .s2::after {
        width: 225px;
        height: 185px;
    }
}

@media screen and (max-height:700px) and (min-width:900px){
    .s1::before {
        width: 180px;
        height: 90px;
    }
    .s1::after {
        width: 132px;
        height: 101px;
    }
    .s2::before {
        width: 220px;
        height:140px;
    }
    .s2::after {
        width: 225px;
        height: 185px;
    }
}

@media screen and (max-width:900px){
.myServices_content{
    display: flex !important;
    flex-direction: column;
}
.myService_head{
    margin: 5vh 8vw 0 8vw !important;
}
}
@media screen and (max-width:900px){
    .myServices{
        // justify-content: inherit;
    }
}
@media screen and (max-width:450px){
    .question{
        font-size: 20px;
    }
    .myServices{
        padding-top: 16%;
        justify-content: start;
        gap:20px;
    }

.myService_head{
    margin: 3vh 1vw 0 1vw !important;
}
.myServices_content{
    padding: 15px 0 0 0  !important;
}
}
@media screen and (max-height:660px){
    .question{
        font-size: 20px;
        letter-spacing: 0;
    }
    .myServices{
        padding-top: 0%;
        justify-content: start;
        gap:20px;
    }

.myService_head{
    margin: 3vh 1vw 0 1vw !important;
}
.myServices_content{
    padding: 15px 0 0 0  !important;
}

}


</style>
