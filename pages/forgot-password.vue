<template>
    <div class="h-screen grid place-content-center">
        <div
            class="bg-white rounded-md p-5 sm:px-28 sm:py-20 max-w-3xl shadow-lg"
        >
            <div class="flex items-center justify-center gap-2">
                <p class="font-clash font-medium text-3xl">
                    Forgot your password?
                </p>
                <img
                    src="~/assets/icons/forgot-password.png"
                    alt="forgot password icon"
                />
            </div>
            <p class="font-dm-sans text-center text-black/70 mt-2">
                Enter the phone number or the email address associated with your
                account. We will send you a verification code.
            </p>
            <form class="flex flex-col gap-5 my-8" @submit.prevent>
                <FormBaseInput
                    label="Email address"
                    v-model="email"
                    type="email"
                ></FormBaseInput>
                <FormBaseButton
                    name="continue"
                    class="btn-primary btn-icon w-full"
                    :onClick="sendVerificationCode"
                >
                    <template #buttonIcon v-if="loading">
                        <Loader />
                    </template>
                </FormBaseButton>
            </form>
            <p class="font-dm-sans">
                Already have an account?
                <nuxt-link
                    to="/login"
                    class="font-bold text-primary"
                    title="Log in"
                    >Log in</nuxt-link
                >
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const router = useRouter();

const email = ref("");
const loading = ref(false);

// Meta and SEO
definePageMeta({
    title: "Manage Hub - Forgot Password",
});
useHead({
    meta: [{ property: "og:title", content: `${route.meta.title}` }],
    title: `${route.meta.title}`,
});

const sendVerificationCode = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        router.push({
            name: "verify-otp",
            query: { email: email.value },
        });
    }, 2000);
};
</script>

<style></style>
