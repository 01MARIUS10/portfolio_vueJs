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
        <div class="debugColor">
                <ul class="d-flex p-0 m-0">
                    <li>
                        <span>#1B2430</span>
                        <span style="background-color:#1B2430 ;"></span>
                        <span>rgba(27, 36, 48, 1)</span>
                    </li>
                    <li>
                        <span>#51557E</span>
                        <span style="background-color:#51557E ;"></span>
                        <span>rgba(81, 85, 126, 1)</span>
                    </li>
                    <li>
                        <span>#D6D5A8</span>
                        <span style="background-color:#D6D5A8 ;"></span>
                        <span>rgba(214, 213, 168, 1)</span>
                    </li>
                </ul>
        </div>
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
    .debugColor{
        position: fixed;
        z-index: 9999;
        bottom:20px;
        right:20px;
        // min-width:100px;
        // min-height: 300px;
        background: white;
        box-shadow: 0px 0px 20px 5px black;
        
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding:5px 10px;
            span:nth-child(2){
                width:80px;
                height: 80px;
                display: block;
                border-radius: 50%;
            }
        }
    }
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
        // background: var(--bgGris);
        background: rgba($color: #51557E, $alpha: .1);
    }
    .content-scroll{
        min-width: 100%;
    }
}
.show {
    // border: solid 3px red;
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
// border: solid 2px red;
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
    #contact{
        padding-left: $nav;
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
    #contact{
        padding:0 !important;
    }
    .debugColor{
        li {
            padding:2px 5px;
            span:nth-child(2){
                width:30px;
                height: 30px;
                display: block;
                border-radius: 50%;
            }
        }
    }
}

// @media screen and (max-width: 900px){
//     .show{
//     }
// }
</style>
