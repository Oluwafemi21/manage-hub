<template>
  <div class="container mx-auto px-2">
    <div class="min-h-screen">
        <header class="py-4">
            <img src="~/assets/images/logo/logo-1.svg" alt="Manage Hub Logo ALT">
        </header>
        <section class="grid lg:grid-cols-2 gap-11">
            <div class="text-white font-medium">
                <p class="font-clash text-3xl my-2">Centralized task management for all.</p>
                <span class="font-dm-sans text-xl">Save time and efficiency with ManageHub to organize and track your tasks in one place wherever you are.</span>
                <img src="~/assets/images/sign-in.svg" alt="">
            </div>
            <div class="bg-white rounded-md px-7 py-10 self-start">
                <div class="flex items-center gap-5">
                    <p class="font-clash font-medium text-3xl">Hello, welcome back!</p>
                    <img src="~/assets/icons/wave-icon.svg" alt="wave icon emoji">
                </div>
                <form class="flex flex-col gap-5 my-8" @submit.prevent>
                    <FormBaseInput label="Email address" v-model="email" type="email"></FormBaseInput>
                    <FormBaseInput label="Password" v-model="password" type="password" :showIcon="true"></FormBaseInput>
                    <nuxt-link to="/forgot-password" class="text-primary font-dm-sans hover:underline self-start">Forgot password?</nuxt-link>
                    <label class="flex items-center cursor-pointer gap-2 font-dm-sans select-none">
                        <input type="checkbox" class="accent-primary h-5 w-5 border-2 focus:outline-none rounded" checked/> Remember me
                    </label>
                    <FormBaseButton name="log in" class="btn-primary w-full" :onClick="login" />
                </form>
                
                <p class="font-dm-sans">Don't have an account? <nuxt-link to="/sign-up" class="font-bold text-primary">Sign up</nuxt-link> </p>
            </div>
        </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({  layout: "auth",});
import { ref } from 'vue'
const client = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const email = ref("")
const password = ref("")

const login = async () => {
    
    const { data, error } = await client.auth.signInWithPassword({ email: email.value, password: password.value })
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
}

watchEffect(() => {
    if(user){
        router.push("/about")
    }
})
</script>

<style>

</style>