<script setup>
import { ref } from 'vue';
import hardSkillsCell from '@/components/cellules/hardSkillsCell.vue';
let props = defineProps({
    theme:{
        type:Number,
        default:0
    }
})
let sectionClass = ref([
    (props.theme===1)? 'dark':'light'
])
</script>

<template>
    <div id="hardSkills">
        <section :class="sectionClass">
            <div class="container py-2 ">
                <hardSkillsCell :isPaire="i%2==0"  v-for="i in 4" />
            </div>
        </section>
    </div>
</template>
<style scoped lang="scss">
#hardSkills {
    font-family: "Baloo 2", cursive;
    font-size: 16px;
    color: #ffffff;
    text-rendering: optimizeLegibility;
    font-weight: initial;
    
}

.dark {
    background: #110f16;
}

.light {
    background: #f3f5f7;
}
</style>
