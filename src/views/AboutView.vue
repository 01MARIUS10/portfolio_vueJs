<script setup>
import { ref,reactive,provide } from "vue";

import  contact  from '@/views/aboutView/contact.vue' 
import aboutMe from '@/views/aboutView/aboutMe.vue'
import myServices from '@/views/aboutView/myServices.vue'
import myProjects from '@/views/aboutView/myProjects.vue'
import navigation from '@/components/molecules/navigation.vue'


let navigationState = reactive({
    state:0
})
provide('navState',navigationState)

</script>
<template>
    <div class="about">
        <div class="navig">
            <navigation />
        </div>
        <div class="about-content">
            <div class="content-scroll">
                <div id="aboutMe" class="show">
                    <aboutMe />
                </div>
                <div id="myService" class="show">
                    <myServices />
                </div>
                <div id="myProjects" class="show">
                    <myProjects />
                </div>
                <div id="contact">
                    <contact />
                </div>
            </div>
        </div>
    </div>
</template>

<style  lang="scss">
$nav:80px;
.about {
    position: relative;
    .navig {
        display: flex;
        z-index: 999;
        background: #a69d9d;
        opacity: 0.6;
        font-size: 18px;
        // position: fixed;
        // align-items: center;
        // top: 0;
        // left: 0;
        // height: 100vh;
        // width: $nav;
    }
    #aboutMe{
        background: var(--f1);
    }
    #myService{
        // background: var(--fgray);
        background:#fff;
    }
    #myProjects{
        background: var(--bgGris);
    }
}
.show {
    border: solid 3px red;
    // height: 100vh;
    // width: 100vw;
    padding:65px 100px 65px calc(100px + $nav);
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: scroll;
    overflow-x: hidden;
}
.show>div{

border: solid 2px grey;
height: 100%;
}
.show>div>div{
border: solid 2px red;
}


@media screen and (max-width: 2300px){
    .show {
        padding:45px 80px 45px calc(80px + $nav);
        height: 100vh;
        width: 100vw;
    }
    .navig {
        position: fixed;
        align-items: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: calc(100vw - $nav);
    }
}

@media screen and (max-width: 1000px){
    .show {
        padding:45px 50px 45px calc(50px + $nav);
    }
}
@media screen and (max-width: 900px){
    $nav : 50px;
    .about{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: $nav 1fr;
        .navig {
            align-items: normal;
            justify-content: center;
            bottom: 0;
            left: 0;
            right: calc(0px + 300vw);
            position: static ;
        }
        .about-content{
            width: 100vw;
            height: 100%;
            overflow: hidden;
            scroll-behavior: smooth;
            .content-scroll{
                width: 400vw;
                height: 100%;
                display: flex;
                #contact{
                    width: 100vw;
                    height: 100vh;
                }
            }
        }
    }
    .show {
        // padding:15px 40px 15px 40px ;
        padding:10px 15px ;
        // margin-top: $nav;
        // height: calc(100vh - $nav);
        height: 100%;
        width: 100vw;
    }
}

// @media screen and (max-width: 900px){
//     .show{
//     }
// }
</style>
