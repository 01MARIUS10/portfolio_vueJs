<template>
    <div class="colors">
        <div v-for="color in colors" class="color d-flex">
            <div v-for="cel in color" class="cel" :style="`background:${cel};`"></div>
        </div>
        <btn  _size="sm" _text="my button" _color="#492E34" _bgColor="#FFE3B0" _icon="/icons/icons8-poubelle-64.png" />
    </div>
</template>
<script setup>
import btn from '../components/cellules/button.vue';
const colors = [
    [
        '#492E34',
        '#9d6370',
        '#753E4E',
        '#E47161',
        "#ed9e93",
        '#ffc864',
        '#FFE3B0',
        '#CDCEA7',
        '#898b4d'
    ],
    [
        '#403739',
        '#605357',
        '#89777b',
        '#a4a1a1',
        '#c1bfbf',
        '#dbd8d4',
        '#ded9d1'
    ],
    [
        '#020101',
        '#28151b',
        '#42232c',
        '#5b303d',
        '#683745',
        '#8f4c5f',
        '#9b5268'
    ],
    [
        '#d43a24',
        '#dd4a35',
        '#e05d4b',
        '#e47161',
        '#e88577',
        '#eb988d',
        '#efaca2'
    ],
    [
        '#ffc864',
        '#ffd17d',
        '#ffda97',
        '#ffe3b0',
        '#ffecca',
        '#fff5e3',
        '#fffefd'
    ],
    [
        '#b1b376',
        '#babc86',
        '#c4c597',
        '#cdcea7',
        '#d6d7b7',
    ]

]
</script>
<style lang="scss">
    .color{
        height: 100px;
        .cel{
            width:100px;
            height: 100px;
        }
    }
</style>