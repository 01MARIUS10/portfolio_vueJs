<script setup>
import { ref } from "vue";
import serviceCell from "@/components/molecules/serviceCell.vue";

let services = ref([
    {
        title: "Conception Web",
        subtitle:
            "Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
        label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
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
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
        ],
        img: "/image/autonomie.png",
    },
    {
        title: "fullstack PHP",
        subtitle:
            "Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
        label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
        qualite: [
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
        ],
        img: "/image/autonomie.png",
    },
    {
        title: " VueJs et Angular",
        subtitle:
            "Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
        label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
        qualite: [
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
        ],
        img: "/image/autonomie.png",
    },
    {
        title: "Back-end PHP Laravel",
        subtitle:
            "Transformez des conceptions saisissantes en expériences web fluides et fonctionnelles.",
        label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
        qualite: [
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
            {
                title: "Précision dans les Détails",
                cle: "Precision",
                label: " Chaque pixel compte. Je m'engage à reproduire fidèlement chaque élément de la maquette pour garantir que le rendu final reflète la vision du designer.",
            },
        ],
        img: "/image/autonomie.png",
    },
]);
</script>
<template>
    <div class="myServices">
        <div class="myService_head">
            <div class="text ps-4">
                <p class="h3 firstText">Quels services je vous propose ?</p>
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
                <serviceCell :service="service" />
            </template>
        </div>
    </div>
</template>
<style scoped lang="scss">
.myServices {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
    gap: 5vh;
    // background: var(--var8);
    .myService_head {
        display: flex;
        // justify-content: space-between;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        .text {
            // width: 50%;
            // flex-grow: 1;
            padding: 0 5%;
            p {
                text-align: center;
            }
            .textLabel {
                font-size: 16px;
                color: var(--textDark_second);
            }
        }
        .myService_image {
            position: relative;
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
        min-height: 50%;
    }
}

@media screen and (max-width: 3200px) {
    .myServices_content {
        display: flex;
        gap: 10px;
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
    .myServices_content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
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
@media screen and (max-width: 400px) {
}
</style>
