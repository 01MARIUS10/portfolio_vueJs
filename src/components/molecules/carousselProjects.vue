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
    // 700px and up
    100: {
        itemsToShow: 1,
        snapAlign: "center",
    },
    // 1024 and up
    900: {
        itemsToShow: 2.3,
        snapAlign: "start",
    },
    1200: {
        itemsToShow: 3.0,
        snapAlign: "start",
    },
    1500: {
        itemsToShow: 3.2,
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
                    <span class="title">Bus nay {{ i }}</span>
                    <div class="w-100 d-flex justify-content-center">
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
                        <!-- <div class="technologie hidePhon600">
                            <span>Technologie:</span>
                            <div class="technologie_list">
                                <p>
                                    <img src="/image/skills/vuejs.png" alt="" />
                                </p>
                            </div>
                        </div> -->

                        <!-- <p class="slide_link">
                            <a href="#" target="_blank">{{ i }} - see more</a>
                        </p> -->
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

<style lang="scss">
figure {
    .title {
        font-size: 21px;
        font-weight: 600;
        line-height: 187.5%;
    }
    margin: 0 10px;
    padding: 15px;

    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 94px 0px rgba(0, 0, 0, 0.05);
    .img {
        width: 80%;
        height: 120px;
        position: relative;
        overflow: hidden;
        img{
            position: absolute;
            top:50%;
            left:50%;
            width: 120%;
            height: 120%;
            transform: translate(-50%,-50%);
        }
    }
    .description {
        max-width: 90%;
        font-size: 18px;
        margin: 10px 20px;
        line-height: 167.5%;
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
}
.technologie {
    display: flex;
    max-width: 90%;
    font-size: 18px;
    margin: 10px 20px;
    span {
        line-height: 167.5%;
        font-weight: 600;
        color: var(--bgDark);
    }
    .technologie_list {
        display: flex;
        p {
            background: var(--bgGris);
            padding: 5px;
            border-radius: 5px;
            img {
                height: 25px;
                width: 30px;
            }
        }
    }
}
.carousel__pagination{
    margin-top: 20px;
}
.carousel__pagination-button::after {
    height: 15px;
    width: 30px;
    border-radius: 15px;
}
.carousel__pagination-button--active::after {
    width: 65px;
    border-radius: 10px;
}
</style>
