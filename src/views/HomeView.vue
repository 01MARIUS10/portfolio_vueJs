<script setup>
import { RouterLink } from 'vue-router';
import typeAnimation from '@/components/cellules/typeAnimation.vue'
import skills from '@/components/molecules/skills.vue';

</script>

<template>
    <main >
        <div class="main d-flex align-items-center">
            <div class="index w-100 mx-xxl-5 ">
                <div class="presentation">
                    <div class="name">
                        <typeAnimation />
                    </div>
                    <p>
                        Passionate about creating efficient, scalable, and
                        reliable systems ,
                        I specialize in the
                        <span class="accentText">Laravel PHP</span> web
                        framework and <span class="accentText">Vue js</span> ,
                        strive to build seamless processes that enhance the user
                        experience. 
                        In addition to my technical expertise, I am also
                        <span class="accentText"> highly versatile</span> and
                        have a
                        <span class="accentText"
                            >strong ability to work well within a team.</span
                        >
                        Below are the programming languages I work with:
                    </p>
                    <div class="allSkills">
                      <skills />
                    </div>
                    <div  class="w-100 d-flex goTo">
                        <router-link to="/about">
                            <button >
                                <span class="">See more</span>
                                <img src="/image/arrow-28-24.png" alt="" />
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="image">
                    <img
                        src="/image/fmaxresdefaulteeee-removebg-preview.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">

// #91593E
main {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(237deg, #46244c, rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(147deg, #86492bed, rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(356deg, #1b2430, rgba(0, 0, 255, 0) 70.71%);
    position: relative;
    .main {
        position: absolute;
        content: " ";
        background: #b27f7f40;
        border-radius: 20px;
        box-shadow: inset 1px 1px 16px 0px #8478784d;
        background: rgba(190, 190, 190, 0.22);
        z-index: 1;
        .presentation{
          p {
              color: var(--purple);
          }
          a{
    text-decoration: none;
}
          button{
            border-radius: 12px;
            display: flex;
            align-items: center;
            background:#46244C;
            font: 'Garamond, Bodoni, Didot';
            color: #fff;
          }
        }
        .image{
          flex-grow: 1;
          max-width: 400px;
          img{
              width: 100%;
          }
        }
    }
}
@media screen and (max-width:2800px){
    main{
        .main{

            padding: 30px;
        top: 30px;
        bottom: 30px;
        left: 50px;
        right: 50px;
        }
        .index{
            display: flex;
            justify-content: space-around;
            align-items: center;
            .presentation{
                width: 60%;
                min-width: 600px;
            }

          button{
            padding: 15px 22px;
            font-size: 18px;
          }
        }
        
    }
}
@media screen and (max-width:800px){
    main{
        .main{

            padding: 15px;
        top: 10px;
        bottom: 10px;
        left: 12px;
        right: 12px;
        }
        .index{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            gap:5vh;
            .presentation{
                flex-grow: 1;
                width: 100%;
                min-width: 200px;
                .allSkills{
                    display: none;
                }
            }
            .image ,.image img{
                height: 28vh;
            }
            .image img{
                width: auto;
            }
            p,h1{
                text-align: center;
            }
            .goTo{
                justify-content: center;
            }
            button{
                padding:6px 10px;
                font-size: 15px;

            }
        }
    }
}


</style>
