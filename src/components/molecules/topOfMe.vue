<template>
    <div class="topOfMe h-100 w-100 py-5 px-2">
        <div class="one">

        </div>
        <div class="two">
            <div class="cel1 pb-5">
                <div class="cel"></div>
                <div class="cel"></div>
            </div>
            <div class="cel2 pt-5">
                <div class="cel"></div>
                <div class="cel"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.topOfMe{
    display: grid;
    grid-template-columns: 60% 1fr;
    .one , .two{
        border: solid 2px red;
    }
    .two{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap:15px;
        .cel1,.cel2{
            display: flex;
            flex-direction: column;
            gap:15px
        }
        .cel{
            width: 100%;
            height: 100%;
        border: solid 2px peru;
        }
    }
}
</style>