
<script setup>
import { inject } from 'vue';
let navState = inject('navState')
function activeClass(i){
    return navState.state==i? 'active':''
}
function setNavState(i){
    navState.state=i
}
</script>
<template>
        <div class="d-flex w-100 h-100 navigation">
                <a :class="activeClass(0)" @click='setNavState(0)' href="#aboutMe"></a>
                <a :class="activeClass(1)" @click='setNavState(1)' href="#myService"></a>
                <a :class="activeClass(2)" @click='setNavState(2)' href="#myProjects"></a>
                <a :class="activeClass(3)" @click='setNavState(3)' href="#contact"></a>
        </div>
</template>

<style lang="scss" scoped>
.navigation{
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2vh;
            a{
                width:20px;
                height: 20px;
                border-radius: 50%;
                background: #f9f9f9;
            }
            .active{
                background: #000;
            }
        }

// @media screen and (min-width: 00){
// .navigation{
//     flex-direction: column;
// }
// };
@media screen and (max-width: 900px){
.navigation{
    flex-direction: row !important;
    justify-content: center;
    a{
        width:12px !important;
        height: 12px !important;    
    }
}
};

</style>