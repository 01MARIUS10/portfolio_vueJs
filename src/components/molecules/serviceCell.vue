<script setup>
let props = defineProps({
    service: {
        default: {
            title: "Lorem ipsum dolor ",
            label: "Lorem ipsum dolor sit amet consectetur adipisicing elit ab doloribus sapiente!",
            img: "/image/autonomie.png",
        },
    },
});
</script>

<template>
    <div class="serviceCell sombre" @hover="console.log('hiii')">
        <div class="serviceCell_image">
            <img :src="props.service.img" alt="" />
        </div>
        <span class="serviceCell_title">{{ props.service.title }}</span>
        <p class="serviceCell_text hidePhon800">{{ props.service.label }}</p>
        <ul class="show800">
            <li v-for=" q in props.service.qualite">{{ q.title }}</li>
        </ul>
        <div class="asking hidePhon1200">
            <button class="btn">
                <a href="#contact"> Discuter </a>
            </button>
        </div>
    </div>
</template>

<style lang="scss">
.serviceCell {
    padding: 20px;
    display: grid;
    height: 100%;
    box-shadow:inset 0px 0px 15px 0px #51557E;
    .serviceCell_image {
        margin-bottom: 5px;
    }
        .serviceCell_title {
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 187.5%; /* 37.5px */;

            padding-bottom: 0 !important;
            font-size: 16px;
        }
        .serviceCell_text {
            font-size: 14px !important;
            font-style: normal !important;
            font-weight: 400 !important;
            line-height: 177.5% !important;
            text-align: center;
        }
        .asking {
            display: flex;
            justify-content: center;
            align-items: end;
            flex-grow: 1;
            a {
                text-decoration: none;
            }
        }
}
.sombre{
    background: rgb(27, 36, 48);
        span{
            color:white ;
        }
        p,ul{
            color: rgba(255,255,255,.6) ;
        }
        .asking{
            button{
                background: rgba(27, 36, 48, 0.8) ;
                box-shadow: 0 0 3px .1px #fff;
                a{
                    color:white;
                }
            }
        }
    &:hover{
        transform: scale(.95);
    }
}
    .sombre:hover,.clair{
        box-shadow: 0px 0px 15px 0px #51557E;
        background: white;
            span{
                color:#000;

            }
            p{
                color:#000;

            }
            .serviceCell_title{
                color: #000;
            }
            .serviceCell_text {
                color: var(--textDark_second);
            }
            .asking{
                button{
                    background:var(--f1) ;
                    a{
                        color:white;
                    }
                }
            }
    }
@media screen and (max-width:3200px){
    .serviceCell {
        grid-template-rows: 105px 30px 90px 40px;
    }
    .serviceCell_image {
        display: flex;
        justify-content: center;
        img{
            height: 105px;
            width: auto;
        }
    }
    .serviceCell_title{
        text-align: center;
    }
    .serviceCell_text{
        padding: 0 5px;;
    }
}
@media screen and (max-width: 1500px) {
    .serviceCell {
        padding: 15px 20px;
            .serviceCell_text {
            line-height: 22px !important;
        }
    }
}
@media screen and (max-width: 1200px) {
    .serviceCell {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 15px;
        .serviceCell_image {
            display: flex;
            align-items: center;
            width: 30%;
        }
            .serviceCell_text {
            line-height: 21px !important;
        }
    }
}
@media screen and (max-width: 600px) {
    .serviceCell {
        padding: 5px 8px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .serviceCell_image {
            width: 100%;
            height: 45%;
            justify-content: center;
            img{
                width: auto;
                height: 100%;
                max-width: 100%;
            }
        }
            ul{
                padding: 0;
            }
    }
}
</style>
