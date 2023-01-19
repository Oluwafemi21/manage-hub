<template>
  <div class="container mx-auto px-2">
    <div class="min-h-screen">
        <header class="py-4">
            <img src="~/assets/images/logo/logo-1.svg" alt="Manage Hub Logo ALT">
        </header>
        <section class="grid lg:grid-cols-2 gap-11">
            <div class="text-white font-medium">
                <p class="font-clash text-3xl my-2">Simplify your daily life with ManageHub</p>
                <span class="font-dm-sans text-xl">Our application allows you to manage your online courses, projects and more in an organized and efficient manner.</span>
                <img src="~/assets/images/sign-up.svg" alt="">
            </div>
            <div class="bg-white rounded-md px-7 py-10 self-start">
                    <p class="font-clash font-medium text-3xl">Create an account</p>
    
                <form class="flex flex-col gap-5 my-8" @submit.prevent>
                  <FormBaseInput label="Full name" v-model="name" />
                    <FormBaseInput label="Email address" v-model="email" type="email"></FormBaseInput>
                    <FormBaseInput label="Phone number" v-model="number" type="number" class="appearance-none"></FormBaseInput>
                    <FormBaseInput label="Password" v-model="password" type="password" :showIcon="true"></FormBaseInput>
                    <FormBaseInput label="Confirm Password" v-model="password2" type="password" :showIcon="true"></FormBaseInput>


                    <nuxt-link to="/forgot-password" class="text-primary font-dm-sans hover:underline self-start">Forgot password?</nuxt-link>
                    <label class="flex items-center cursor-pointer gap-2 font-dm-sans select-none">
                        <input type="checkbox" class="accent-primary h-5 w-5 border-2 focus:outline-none rounded" checked/> I agree to the <span class="text-primary">terms of service</span> and <span class="text-primary">privacy policy.</span>
                    </label>
                    <FormsBaseButton name="sign up" class="btn-primary w-full" :onClick="signUp" />
                </form>
                {{ number }}
                <p class="font-dm-sans">Already have an account? <nuxt-link to="/login" class="font-bold text-primary">Log in</nuxt-link> </p>
            </div>
        </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({  
  layout: "auth"
});
import { ref } from 'vue'
const client = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()


const name = ref("")
const email = ref("")
const number = ref("")
const password = ref("")
const password2 = ref("")

const signUp = async () => {
    const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
        
          options: {
          data: {
            full_name: name.value,
            phone: number.value,
      }
    }
    })
    console.log('user',user)
    console.log('error',error)
}

watchEffect(() => {
    if(user.value){
        router.push("/")
    }
})
</script>

<style>

</style>