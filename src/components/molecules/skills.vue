<script setup>
import { ref } from "vue";
import skill from "../cellules/skill.vue";
import skillsCel from "@/components/cellules/skillsCel.vue";

let props = defineProps({
    min: {
        type: Boolean,
        default: true,
    },
});
const images = ref([
    { name: "js", src: "/image/skills/js.png" },
    { name: "nodejs", src: "/image/skills/nodejs.png" },
    { name: "angular", src: "/image/skills/angular.png" },
    { name: "php", src: "/image/skills/php.png" },
    { name: "vue js", src: "/image/skills/vuejs.png" },
    { name: "Laravel", src: "/image/skills/laravel.png" },
    ]);
</script>
<template>
    <div class="skills pb-xxl-4 d-flex w-100 h-100">
        <skill v-if="props.min" v-for="skill in images" :image="skill.src" />
        <div v-else class="w-100 d-flex h-100">
            <h1 class="h2 my-5">Skills overViews :</h1>
            <div class="d-flex justify-content-center align-items-center h-100 flex-grow-1">
                <div  class=" el ">
                    <div class="">
                        <skillsCel v-for="i in 1"  :image="images[i]" />
                        <skillsCel v-for="i in 1" :hideCell="true" :image="images[i]" />
                        <skillsCel v-for="i in 1"  :image="images[i]" />
                    </div>
                    <div class="">
                        <skillsCel v-for="i in 2" :image="images[i]" />
                    </div>
                    <div class="" >
                        <skillsCel  v-for="i in 3" :image="images[i]" />
                    </div>
                    <div class="" >
                        <skillsCel v-for="i in 4" :image="images[i]" />
                    </div>
                    <div class="" >
                        <skillsCel v-for="i in 1" :hideCell="true" :image="images[i]" />
                        <skillsCel  v-for="i in 2" :image="images[i]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">



// @media  screen and (max-width:1600px) {
    $widthCell:110px;
    $mbCell:10px;

$heightCell:calc($widthCell * .9);


$sqr2:1.4142;
$w:calc($heightCell / $sqr2);
$h: calc($heightCell / $sqr2);

$ws2 : calc($widthCell / 2);
$hs2 : calc($heightCell / 2);

$pbCs2: calc($mbCell / 2);

.el>div{
    //DEBUG DEBUG DEBUG
    // border:solid 5px rgb(114, 106, 106);
    //not responsive
    //wh+10px
    $a : calc($widthCell + $ws2);
    $b : calc($a + $mbCell);
    width: $widthCell;
    // width: calc($b - $mbCell);
}
.el>div>*{
    //it is the 10px
    margin-bottom:$mbCell;
}
.el>div:nth-child(2n){
    $a:$pbCs2 + $mbCell;
    // padding-top:calc($hs2 + $a: 
    $a : calc($heightCell / 2);
    $b : calc($mbCell / 2);
    padding-top: calc($a + $b);
}
.el{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    //gap for the 100px width 
    $i : calc($w / $sqr2);
    gap:calc($i + $mbCell );
    margin-left: 10%;
}

// }
</style>