<script setup>
import { ref,onMounted } from "vue";
import contact from "@/views/aboutView/contact.vue";
import aboutMe from "@/views/aboutView/aboutMe.vue";
import myServices from "@/views/aboutView/myServices.vue";
import myProjects from "@/views/aboutView/myProjects.vue";
import navigation from "@/components/molecules/navigation.vue";
import { useTrackNavigation } from '@/composable/navigation.js'

let allRef = ['aboutMe','myService','myProjects','contact']

let navigationObserver = ref('')
onMounted(()=>{
    navigationObserver.value = useTrackNavigation(allRef)
})

//  t id template_kjn5jty
//  s id service_mpjkp5l
//  public key 8c7YCi1q_9ViT92Tn
//  private key HWyhoimt-jQpfWzVnYF8t
</script>
<template>
    <div class="about">
        <!-- <div class="debugColor">
            <ul class="d-flex p-0 m-0">
                <li>
                    <span>#1B2430</span>
                    <span style="background-color: #1b2430"></span>
                    <span>rgba(27, 36, 48, 1)</span>
                </li>
                <li>
                    <span>#51557E</span>
                    <span style="background-color: #51557e"></span>
                    <span>rgba(81, 85, 126, 1)</span>
                </li>
                <li>
                    <span>#D6D5A8</span>
                    <span style="background-color: #d6d5a8"></span>
                    <span>rgba(214, 213, 168, 1)</span>
                </li>
            </ul>
        </div> -->
        <div class="navig">
            <navigation :item="navigationObserver.currentSection" />
        </div>
        <div class="about-content">
            <div class="content-scroll">
                <div id="aboutMe" class="show item1" >
                    <aboutMe />
                </div>
                <div id="myService" class="show item2">
                    <myServices />
                </div>
                <div id="myProjects" class="show item3">
                    <myProjects />
                </div>
                <div id="contact" class="item4">
                    <contact />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$nav: 80px;

.about {
    position: relative;
    .debugColor {
        position: fixed;
        z-index: 9999;
        bottom: 20px;
        right: 20px;
        background: white;
        box-shadow: 0px 0px 20px 5px black;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span {
                text-align: center;
                display: block;
            }
            span:first-child,
            span:last-child {
                height: auto !important;
            }
            span:nth-child(2) {
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
    }
    #aboutMe {
        background: var(--f1);
    }
    #myService {
        background: #fff;
    }
    #myProjects,
    #contact {
        // background: rgba($color: #51557E, $alpha: .1);
        background: whitesmoke;
    }
    .content-scroll {
        width: 100%;
    }
}
.show {
    padding: 65px 100px 65px calc(100px - $nav);
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: scroll;
    overflow-x: hidden;
}
.show > div {
    border: solid 2px grey;
    height: 100%;
    padding: 15px;
}

@media screen and (max-width: 2300px) {
    .show {
        padding: 45px 80px 45px calc(80px + $nav);
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
    #contact {
        padding-left: $nav;
    }
    .debugColor {
        li {
            padding: 5px 10px;
            span {
                width: 100px;
                height: 100px;
                font-size: 10px;
                margin-bottom: 8px;
            }
        }
    }
}

@media screen and (max-width: 1050px) {
    .show {
        padding: 45px 50px 45px calc(50px + $nav);
    }
}
@media screen and (max-width: 900px) {
    $nav: 50px;
    .about {
        height: 100lvh;
        width: 100lvw;
        display: grid;
        grid-template-rows: $nav 1fr;
        .navig {
            align-items: normal;
            justify-content: center;
            bottom: 0;
            left: 0;
            right: calc(0px + 300vw);
            position: static;
        }
        .about-content {
            width: 100vw;
            height: 100%;
            overflow: hidden;
            scroll-behavior: smooth;
            .content-scroll {
                width: 400vw;
                height: 100%;
                display: flex;
                #contact {
                    width: 100vw;
                    height: 100lvh;
                }
            }
        }
    }
    .show {
        // padding:15px 40px 15px 40px ;
        padding: 10px 15px;
        // margin-top: $nav;
        // height: calc(100vh - $nav);
        height: 100%;
        width: 100vw;
    }
    #contact {
        padding: 0 !important;
    }
    .debugColor {
        li {
            padding: 2px 5px;
            span {
                width: 60px;
                height: 60px;
                font-size: 10px;
            }
        }
    }
}
</style>
