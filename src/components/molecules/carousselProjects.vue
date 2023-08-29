<script setup>
import { popScopeId, reactive, ref, computed } from "vue";
// import { Carousel3d, Slide } from 'vue3-carousel-3d';
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

let slides = ref(4);
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
</script>

<template>
    <div class="h-100">
        <Carousel
            :items-to-show="3"
            :wrap-around="true"
            :transition="1000"
            :breakpoints="breakpoints"
        >
            <Slide v-for="i in slides" :key="i">
                <figure>
                    <span class="title">Projet{{ i }}</span>
                    <div class=" image w-100 d-flex justify-content-center mb-3">
                        <div class="img">
                            <img src="/image/project/projectImage.png" />
                        </div>
                    </div>
                    <figcaption>
                        <p class="description">
                            <span>Description:</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Hic nam omnis amet nihil recusandae blanditiis
                            accusamus accusantium aspernatur enim, nulla dolor?
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
    grid-template-rows: 30px 120px 130px ;
    .title {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1rem;
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
                width: 120%;
                height: 120%;
                transform: translate(-50%,-50%);
            }
        }
    }
    .description {
        font-size: 1.02rem;
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
        transform: scale(1.1);
    }
}
// .technologie {
//     display: flex;
//     max-width: 90%;
//     font-size: 18px;
//     margin: 10px 20px;
//     span {
//         line-height: 167.5%;
//         font-weight: 600;
//         color: var(--bgDark);
//     }
//     .technologie_list {
//         display: flex;
//         p {
//             background: var(--bgGris);
//             padding: 5px;
//             border-radius: 5px;
//             img {
//                 height: 25px;
//                 width: 30px;
//             }
//         }
//     }
// }

.carousel__pagination{
    margin-top: 24px;
}
.carousel__viewport {
    overflow-y: inherit !important;
    overflow-x:hidden !important;
    padding:20px 0;
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
</style>