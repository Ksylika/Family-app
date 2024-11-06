<template>
    <div class="preview__wrapper">
        <p class="preview__info">Для удаления информации о семье кликните по ней</p>
        <div class="preview__family" v-for="data in dataParChild.dataParentsChilds" :key="data.id" @click="dataParChild.delFamily(data.id)">
            <div class="preview__parent">
                <h3 class="preview__title">Персональные данные</h3>
                <p class="preview__parent-name">{{ data.nameParent }}, {{ data.ageParent }} лет</p>
            </div>
            <div class="preview__childs">
                <h3 class="preview__title">Дети</h3>
                <p class="preview__childs-name" v-for="child in data.childs" :key="data.id">
                 {{ child.nameChild }}, {{ child.ageChild }} лет</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useParentChildStore } from '@/stores/dataParentsChilds' 

const dataParChild = useParentChildStore()

</script>
