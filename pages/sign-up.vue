<template>
    <div class="container mx-auto px-2">
        <div class="min-h-screen">
            <header class="py-4 flex items-start">
                <nuxt-link to="/">
                    <img
                        src="~/assets/images/logo/logo-1.svg"
                        alt="Manage Hub Logo ALT"
                    />
                </nuxt-link>
            </header>
            <section class="grid lg:grid-cols-2 gap-11">
                <div class="text-white font-medium">
                    <p class="font-clash text-3xl my-2">
                        Simplify your daily life with ManageHub
                    </p>
                    <span class="font-dm-sans text-xl"
                        >Our application allows you to manage your online
                        courses, projects and more in an organized and efficient
                        manner.</span
                    >
                    <img
                        src="~/assets/images/sign-up.png"
                        alt="Sign Up Image"
                    />
                </div>
                <div class="bg-white rounded-md px-7 py-10 self-start">
                    <p class="font-clash font-medium text-3xl">
                        Create an account
                    </p>

                    <form class="flex flex-col gap-5 my-8" @submit.prevent>
                        <FormBaseInput label="Full name" v-model="name" />
                        <FormBaseInput
                            label="Email address"
                            v-model="email"
                            type="email"
                        ></FormBaseInput>
                        <FormBaseInput
                            label="Phone number"
                            v-model="number"
                            type="tel"
                            class="appearance-none"
                        ></FormBaseInput>
                        <FormBaseInput
                            label="Password"
                            v-model="password"
                            type="password"
                            :showIcon="true"
                        ></FormBaseInput>
                        <FormBaseInput
                            label="Confirm Password"
                            v-model="password2"
                            type="password"
                            :showIcon="true"
                        ></FormBaseInput>

                        <label
                            class="flex items-center cursor-pointer gap-2 font-dm-sans select-none"
                        >
                            <input
                                type="checkbox"
                                class="w-4 h-4 form-checkbox rounded bg-gray-100 border-gray-300 text-primary focus:ring-offset-2 focus:ring-primary"
                                checked
                            />
                            I agree to the
                            <span class="text-primary">terms of service</span>
                            and
                            <span class="text-primary">privacy policy.</span>
                        </label>
                        <FormBaseButton
                            name="sign up"
                            class="btn-primary btn-icon w-full"
                            :onClick="signUp"
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
            </section>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();

// Meta and SEO
definePageMeta({
    layout: "auth",
    title: "Manage Hub - Create Account",
});

useHead({
    meta: [{ property: "og:title", content: `${route.meta.title}` }],
    title: `${route.meta.title}`,
});

import { ref } from "vue";

const name = ref("");
const email = ref("");
const number = ref("");
const password = ref("");
const password2 = ref("");
const loading = ref(false);

const signUp = async () => {
    loading.value = true;
    await client.auth
        .signUp({
            email: email.value,
            password: password.value,
            options: {
                data: {
                    full_name: name.value,
                    phone: number.value,
                },
            },
        })
        .then(() => {
            router.push("/login");
            loading.value = false;
        })
        .catch((err) => {
            loading.value = false;
            console.log(err);
        });
};
</script>

<style></style>
