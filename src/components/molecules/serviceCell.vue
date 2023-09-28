<script setup>
import { useContactStore } from '../../stores/contact.js';
let useContact = useContactStore()
let props = defineProps({
    service: {
        default: {
            title: "Lorem ipsum dolor ",
            label: "Lorem ipsum dolor sit amet consectetur adipisicing elit ab doloribus sapiente!",
            img: "/image/autonomie.png"
        },
    },
});
const discuter = (title)=>{
    useContact.contacter(`Discuter pour le service "${title}"`)
}
</script>

<template>
    <div class="serviceCell sombre" >
        <div class="serviceCell_image">
            <img :src="props.service.img" alt="" />
        </div>
        <span class="serviceCell_title">{{ props.service.title }}</span>
        <p class="serviceCell_text mb-0 hidePhon800">{{ props.service.label }}</p>
        <ul class="show800">
            <li v-for=" q in props.service.qualite">{{ q.title }}</li>
        </ul>
        <div class="asking hide900">
            <button class="btn">
                <a
                @click="discuter(props.service.title)"
                 href="#contact"
                > Discuter </a>
            </button>
        </div>
    </div>
</template>

<style lang="scss">
.serviceCell {
    padding: 20px;
    display: grid;
    height: 100%;
    // box-shadow:inset 0px 0px 15px 0px #51557E;

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
            font-style: normal !important;
            font-weight: 400 !important;
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
}
    .sombre:hover,.clair{
        background: white;
        box-shadow: none;
        border: solid 1.6px  rgb(27, 36, 48);
          transition: 1s;
          *{
          transition: 1.3s;
          }

            span{
                color:#000;
            }
            p{
                color:#000;

            }
            .serviceCell_title{
                color: var(--f1);
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
        grid-template-rows: 105px 30px auto 40px;
    }
    .serviceCell_image {
        display: flex;
        justify-content: center;
        img{
            height: 90px;
            width: auto;
        }
    }
    .serviceCell_title{
        text-align: center;
    }
    .serviceCell_text{
            font-size: 14px !important;
        padding: 0 5px;
        line-height: 1.5rem ;
    }
}

@media screen and (max-width: 1500px) {
    .serviceCell {
        padding: 15px 20px 20px 20px;
            .serviceCell_text {
            line-height: 22px ;
        }
    }
    
}

@media screen and (max-width: 1400px) {
.myServices{
    gap: 10%;
}
}
@media screen and (max-width: 900px) {
    .serviceCell {
        display: flex;
        flex-direction: column;
        position:relative;
        $padding : 25px;
        $height : 150px;

        height: $height;
        padding: $padding $padding $padding calc($height + 3*$padding);

        .serviceCell_image {
            position: absolute;
            top:20px;
            bottom: 20px;
            left: 20px;
            width: 180px;
            margin:0;
            display: block;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                height: 100%;
                max-height: 100%;
                max-width: 100%;
            }
        }
        .serviceCell_title{
            display: block;
        }
            .serviceCell_text ,ul{
            display: block;
            line-height: 21px !important;
        }
    }
    .hide900{
      display: none !important;
    }
}


@media screen and (max-width: 450px) {
    .serviceCell{
        $padding : 5px;
        $height : 125px;
        justify-content: center;
        align-items: center;

        height: $height;
        padding: $padding $padding $padding 90px;
    }
    .serviceCell_image{
        width: 80px !important;
        img{
            height: auto !important;
            width: 100%;
        }
    }
    ul{
        margin:0;
        padding: 0;
        list-style:inside;
    }
}

</style>
