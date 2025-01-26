<template>
    <HeroComp title="Become a Vue Dev" />
    <HomeCardComp />
    <JobListings :limit="3" :showButton="true" />
</template>

<script setup>
import HeroComp from '../components/HeroComp.vue';
import HomeCardComp from '../components/HomeCardComp.vue';
import JobListings from '../components/JobListings.vue';
</script>

<style lang="scss" scoped></style>