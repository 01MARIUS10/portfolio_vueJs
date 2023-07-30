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
    { name: "html", src: "/image/skills/html.png" },
    { name: "css", src: "/image/skills/css.png" },
    { name: "js", src: "/image/skills/js.png" },
    { name: "php", src: "/image/skills/php.png" },
    { name: "vue js", src: "/image/skills/vuejs.png" },
    { name: "Laravel", src: "/image/skills/laravel.png" },
    { name: "css", src: "/image/skills/css.png" },
    { name: "js", src: "/image/skills/js.png" },
    { name: "php", src: "/image/skills/php.png" },
    { name: "vue js", src: "/image/skills/vuejs.png" },
    { name: "Laravel", src: "/image/skills/laravel.png" },
    { name: "css", src: "/image/skills/css.png" },
    { name: "js", src: "/image/skills/js.png" },
    { name: "php", src: "/image/skills/php.png" },
    { name: "vue js", src: "/image/skills/vuejs.png" },
    { name: "Laravel", src: "/image/skills/laravel.png" },
]);
</script>
<template>
    <div class="skills d-flex">
        <skill v-if="props.min" v-for="image in images" :image="image.src" />
        <div v-else class=" el ">
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
</template>
<style scoped lang="scss">
//input
$widthCell:100px;
$heightCell:calc($widthCell * 1.4);
$mbCell:10px;

$sqr2:1.4142;
$w:calc($heightCell / $sqr2);
$h: calc($heightCell / $sqr2);

$ws2 : calc($widthCell / 2);
$hs2 : calc($heightCell / 2);

$pbCs2: calc($mbCell / 2);

.el{
    margin-left:calc($widthCell / 2);
    margin-right:calc($heightCell / 2);
}
.el>div{
    //DEBUG DEBUG DEBUG
    // border:solid 5px rgb(114, 106, 106);
    //not responsive
    //wh+10px
    width: calc($widthCell + $ws2);
}
.el>div>*{
    //it is the 10px
    margin-bottom:2* $mbCell;
}
.el>div:nth-child(2n){
    $b : calc($mbCell / 2);
    $a : $pbCs2 + $b;
    padding-top:calc($hs2 + $a);
}
.el{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    //gap for the 100px width 

    $b : calc($mbCell / 2);
    $c : $mbCell + $b;
    gap:calc($ws2 - $c);
    
}
@media  screen and (max-width:1600px) {
    $widthCell:75px;
    $mbCell:5px;

$heightCell:calc($widthCell * 1.4);


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
    width: calc($b - $mbCell);
}
.el>div>*{
    //it is the 10px
    margin-bottom:3* $mbCell;
}
.el>div:nth-child(2n){
    $a:$pbCs2 + $mbCell;
    padding-top:calc($hs2 + $a);
}
.el{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    //gap for the 100px width 
    gap:calc($ws2 - $mbCell);
    
}

}
</style>