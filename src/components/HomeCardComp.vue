<template>
    <section class="py-4">
        <div class="container-xl lg:containter m-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4  rounded-lg">
                <CardComp>
                    <h2 class="text-2xl font-bold">For Developers</h2>
                    <p class="mt-2 mb-4">Browse our vue jobs and start your career today</p>
                    <RouterLink to="/jobs"
                        class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Browse
                        Jobs</RouterLink>
                </CardComp>
                <CardComp bg="bg-green-100">
                    <h2 class="text-2xl font-bold">For Employers</h2>
                    <p class="mt-2 mb-4">Browse our vue jobs and start your career today</p>
                    <RouterLink to="/addjob"
                        class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">Add
                        Jobs</RouterLink>
                </CardComp>
            </div>
        </div>
    </section>
</template>

<script setup>
import CardComp from './CardComp.vue';
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped></style>