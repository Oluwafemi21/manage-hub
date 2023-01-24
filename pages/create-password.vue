<template>
    <div class="h-screen grid place-content-center">
        <div
            class="bg-white rounded-md p-5 sm:px-28 sm:py-20 max-w-3xl shadow-lg"
        >
            <div class="flex items-center justify-center gap-2">
                <p class="font-clash font-medium text-3xl">
                    Create new password
                </p>
            </div>
            <p class="font-dm-sans text-center text-black/70 mt-2">
                Create a new password to secure your account
            </p>
            <form class="flex flex-col gap-5 my-8" @submit.prevent>
                <FormBaseInput
                    label="Enter your new password"
                    v-model="password"
                    type="password"
                    :showIcon="true"
                ></FormBaseInput>
                <FormBaseInput
                    label="Confirm your new password"
                    v-model="confirmPassword"
                    type="password"
                    :showIcon="true"
                ></FormBaseInput>
                <FormBaseButton
                    name="Create"
                    class="btn-primary btn-icon w-full"
                    :onClick="createPassword"
                >
                    <template #buttonIcon v-if="loading">
                        <Loader />
                    </template>
                </FormBaseButton>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();

const password = ref("");
const confirmPassword = ref("");
const loading = ref(false);

// Meta and SEO
definePageMeta({
    title: "Manage Hub - Create Password",
});
useHead({
    meta: [{ property: "og:title", content: `${route.meta.title}` }],
    title: `${route.meta.title}`,
});

const createPassword = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        console.log("Password created", password, confirmPassword);
    }, 2000);
};
</script>

<style></style>
