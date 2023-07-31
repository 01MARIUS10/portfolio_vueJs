<template>
    <div class="presentation d-flex justify-content-between container-xl  rounded  mb-2 p-xl-0 p-xxl-4">
            <div class="presentation-element">
                <h2 class="mb-3">Are You in Need of a Skilled Developer?</h2>
                <p class="hidden-w-900">
                    Your Search Ends Here!" <span class="emoji">&#x1F642;</span>
                </p>
                <p>
                    I have had the opportunity to work on a variety of exciting
                    projects that have allowed me to showcase my skills and
                    creativity as a front and backend developer.
                </p>
                <p>
                    Dedicated and passionate about coding development, my
                    approach is driven by an insatiable curiosity and a profound
                    appreciation for the art of programming.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aut molestias inventore maiores 
                    perspiciatis officiis labore enim eius natus non sed alias consequuntur, iste eos illo id ut 
                    asperiores? Ex, beatae tempora. Eius eveniet culpa, temporibus excepturi consequuntur suscipit 
                    maiores reprehenderit fuga quas, dicta dolorum illum optio delectus veritatis corrupti.
                </p>
            </div>
            <div class="image">
                <div class="left"></div>
                <div class="right"></div>
                <img
                    class="rounded-circle"
                    src="/image/profil/e.webp"
                    alt=""
                />
            </div>
    </div>
</template>
<style scoped lang="scss">
.presentation-element{
    width:75%;
    p{
        margin-bottom: .4rem;
        font-size: 16px;
    }
}
.image {
    display: flex;
    justify-content: center;
    align-items: center;
    .left,.right{
        position:relative;
        
    }
    
    .left::before{
        position:absolute;
        content:" ";
        width:50px;
        height: 50px;
        top:0;
        left: 0;
        background: red;
    width: 125px;
    height: 250px;
    transform: rotate3d(1, 1, 1, 310deg) translate(75%, -60%);
        border-radius: 50%;
        z-index:-1;
    }
    .left::after{
        position:absolute;
        content:" ";
        width:50px;
        height: 50px;
        bottom:0;
        right: 0;
        background: green;
    width: 150px;
    height: 280px;
    transform: rotate3d(1, 1, 1, 294deg) translate(0%, 100%);
        border-radius: 50%;
        z-index: -2;
    }
    .right::before{
        position:absolute;
        content:" ";
        width:50px;
        height: 50px;
        bottom:0;
        left: 0;
        background: blue;
    width: 291px;
    height: 345px;
    transform: rotate3d(1, 1, -1, 191deg) translate(86%, 30%);
        border-radius: 50%;
        z-index: -1;
    }
    .right::after{
        position:absolute;
        content:" ";
        width:50px;
        height: 50px;
        top:0;
        right: 0;
        background: pink;
    width: 113px;
    height: 244px;
    transform: rotate3d(0, 0, -4, 300deg) translate(0%, -58%);
        border-radius: 50%;
        z-index: -1;
    }
    img{
    width: 210px;
    height: auto;
    background: white;
}}
</style>
