<script setup>

import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: "Become a Vue Dev",
    },
    subsTitle: {
        type: String,
        default: "Find the vue jobs thats fits yours skills and need"
    }

})
</script>
<template>
    <section class="bg-green-700 text-white py-20 mb-4">
        <div class="flex flex-col text-center">
            <h1 class="text-4xl font-extrabold"> {{ title }}</h1>
            <p class="text-xl">{{ subsTitle }}</p>
        </div>
    </section>
</template>



<style lang="scss" scoped></style>