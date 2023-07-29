<script setup>
let props = defineProps(['image'])
</script>
<template>
   <div class="cardSkils">
        <img :src="props.image" alt="" />
    </div>
</template>
<style scoped>
.cardSkils {
    border: solid 1px black;
    padding: 5px;
    border-radius: 5px;
    margin: 0 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #B5B5B5;
}
img {
    max-width: 80px;
    max-height: 80px;
}
</style>