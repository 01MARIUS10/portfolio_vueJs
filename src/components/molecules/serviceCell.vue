<script setup>
let props = defineProps({
    service: {
        default: {
            title: "Lorem ipsum dolor ",
            label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet consectetur it amet consectetur adipisicing elit. adipisicing elit. it amet consectetur adipisicing elit. Repellat ab doloribus sapiente!",
            img: "/image/autonomie.png",
        },
    },
});
</script>

<template>
    <div class="serviceCell">
        <div class="serviceCell_image">
            <img :src="props.service.img" alt="" />
        </div>
        <div class="serviceCell_content">
            <span class="title">{{ props.service.title }}</span>
            <p class="text hidePhon800">{{ props.service.label }}</p>
            <ul class="show800">
                <li v-for=" q in props.service.qualite">{{ q.title }}</li>
            </ul>
            <div class="asking hidePhon1200">
                <button class="btn">
                    <a href="#contact"> Discuter </a>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.serviceCell {
    padding: 15px 35px;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    // border: solid 2px var(--f1);
    // box-shadow: 0px 0px 5px 2px #1B2430;
    box-shadow:inset 0px 0px 15px 0px #51557E;
    // box-shadow: 0px 1px 5px 2px var(--f1);

    // background: rgba($color: #D6D5A8, $alpha: 1);
    .serviceCell_image {
        // width: 50%;
        margin-bottom: 5px;
        img {
            height: auto;
            width: 100%;
        }
    }
    .serviceCell_content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 0px;
        .title {
            color: #000;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 187.5%; /* 37.5px */;

            padding-bottom: 0 !important;
            font-size: 16px;
        }
        .text {
            color: var(--textDark_second);
            /* text-align: center; */
            font-family: Poppins;
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
                color: white;
                text-decoration: none;
            }
            button{
                background:var(--f1) !important;
            }
        }
    }
}
@media screen and (max-width:3200px){
    .serviceCell_image {
        width: 50%;
    }
}
@media screen and (max-width: 1500px) {
    .serviceCell {
        padding: 15px 20px;
        .serviceCell_content {
            .text {
            line-height: 22px !important;
        }
        }
    }
}
@media screen and (max-width: 1200px) {
    .serviceCell {
        display: flex;
        flex-direction: row;
        padding: 10px 15px;
        .serviceCell_image {
            display: flex;
            align-items: center;
            width: 30%;
        }
        .serviceCell_content {
            flex-grow: 1;
            .text {
            line-height: 21px !important;
        }
        }
    }
}
@media screen and (max-width: 600px) {
    .serviceCell {
        padding: 5px 8px;
    }
}
</style>
