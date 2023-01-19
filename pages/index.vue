<template>
    <div>
        <h1>Home Page</h1>
        <p>My home page</p>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style>

</style>