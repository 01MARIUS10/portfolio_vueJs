<script setup>
import { RouterLink } from 'vue-router';
import typeAnimation from '@/components/cellules/typeAnimation.vue'
import skills from '../components/molecules/skills.vue';
</script>

<template>
    <main>
        <div class="main d-flex align-items-center">
            <div class="index d-flex justify-content-around align-items-center">
                <div class="presentation">
                    <div class="name">
                        <typeAnimation />
                    </div>
                    <p>
                        Passionate about creating efficient, scalable, and
                        reliable systems ,<br />
                        I specialize in the
                        <span class="accentText">Laravel PHP</span> web
                        framework and <span class="accentText">Vue js</span> ,
                        strive to build seamless processes that enhance the user
                        experience. <br />
                        In addition to my technical expertise, I am also
                        <span class="accentText"> highly versatile</span> and
                        have a
                        <span class="accentText"
                            >strong ability to work well within a team.</span
                        >
                        <br />
                        Below are the programming languages I work with:
                    </p>
                    <div class="">
                      <skills />
                    </div>
                    <router-link to="/about">
                      <button >
                        <span class="">See my work</span>
                        <img src="/image/arrow-28-24.png" alt="" />
                      </button>
                    </router-link>
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
main {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(237deg, #46244c, rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(147deg, #86492bed, rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(356deg, #1b2430, rgba(0, 0, 255, 0) 70.71%);
    position: relative;
    .main {
        top: 30px;
        bottom: 30px;
        left: 50px;
        right: 50px;
        padding: 30px;
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
          button{
            padding: 15px 22px;
            font-size: 18px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            background:#46244C;
            font: 'Garamond, Bodoni, Didot';
            color: #fff;
          }

        }
    }
}

</style>
