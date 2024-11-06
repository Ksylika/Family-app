<template>
    <main class="container">
        <SiteNavigation />
        
        <RouterView v-slot="{ Component }">
            <Transition name="page">
                <component :is="Component" />
            </Transition>
        </RouterView>
        <SiteFooter />
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
import SiteFooter from './components/SiteFooter.vue';
import { useParentChildStore } from '@/stores/dataParentsChilds'

const dataParChild = useParentChildStore()

dataParChild.getParentChild()
</script>

