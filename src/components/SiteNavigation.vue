<template>
    <header class="header">
        <img src="../assets/image/Logo_imi_horizontal.jpg" alt="Алеф логотип" class="header__logo" width="175px" height="35px">
        <nav class="header__navigation">
            <li class="header__navigation-list">
                <ul class="header__navigation-item">
                    <RouterLink :to="{name: 'form'}" class="header__navigation-link">Форма</RouterLink>
                </ul>
                <ul class="header__navigation-item">
                    <RouterLink :to="{name: 'preview'}" class="header__navigation-link">Превью</RouterLink>
                </ul>
            </li>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>
