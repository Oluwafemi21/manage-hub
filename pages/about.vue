<template>
    <div class="font-dm-sans">
        <h1 class="text-red-500">About Page</h1>
        <p>My about page</p>
        <form class="my-10 px-6">
            <FormsBaseInput label="Name" v-model="firstName"></FormsBaseInput>
        </form>

        {{ firstName }}
    </div>
</template>

<script setup>
import { ref } from 'vue'

const firstName = ref("")

</script>

<style>

</style>