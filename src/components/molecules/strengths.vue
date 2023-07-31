<template>
    <div class="container strengths">
        <div class="d-flex h-100 w-100">
            <div v-for="i in 3" class="element">
                <div class="img">
                    <img src="/image/aaa1.png" alt="">
                </div>
                <div class="content">
                    <h1 class="h4 text-center">Lorem ipsum dolor  </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut non 
                        blanditiis vero libero excepturi consequatur vel alias sunt minima 
                        consequuntur? Architecto, illo labore? Aliquid, in omnis consequatur 
                        provident explicabo quo porro. Tenetur cupiditate explicabo eos?</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.strengths{
    .element{
        max-height: 100%;
        width: auto;
        .img{
            height: 150px;
            display: flex;
            justify-content: center;
        }
    }
    img{
        height: 100%;
        width: auto;
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
