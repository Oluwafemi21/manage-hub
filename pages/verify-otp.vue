<template>
    <div class="h-screen grid place-content-center">
        <div
            class="bg-white rounded-md p-5 sm:px-28 sm:py-20 max-w-3xl shadow-lg"
        >
            <div class="flex items-center justify-center gap-2">
                <p class="font-clash font-medium text-3xl">
                    OTP code verification
                </p>
                <img
                    src="~/assets/images/otp.png"
                    alt="otp verification icon"
                />
            </div>
            <p class="font-dm-sans text-center text-black/70 mt-2">
                Enter the verficication code sent to {{ $route.query.email }}
            </p>
            <form class="flex flex-col gap-5 my-8" @submit.prevent>
                <FormBaseInput
                    label="Email address"
                    v-model="email"
                    type="email"
                ></FormBaseInput>
                <p class="font-dm-sans">
                    You did not receive a code?
                    <span @click="resendOTP" class="font-bold text-primary"
                        >Resend</span
                    >
                </p>

                <FormBaseButton
                    name="send verification code"
                    class="btn-primary btn w-full"
                    :onClick="verifyOTP"
                >
                    <template #buttonIcon v-if="loading">
                        <Loader />
                    </template>
                </FormBaseButton>
            </form>
            <p class="font-dm-sans">
                Already have an account?
                <nuxt-link to="/login" class="font-bold text-primary"
                    >Log in</nuxt-link
                >
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);

const verifyOTP = () => {
    loading.value = true;
};

const resendOTP = () => {
    console.log("resend otp");
};
</script>

<style></style>
