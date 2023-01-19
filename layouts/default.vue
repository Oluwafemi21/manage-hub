<template>
  <div>
    <header class="flex items-center justify-between bg-slate-600 text-white">
        <h1>My Awesome Nuxt.js App</h1>
        <nav class="flex items-center gap-3">
            
                <nuxt-link class="font-bold underline text-primary-100" to="/">Home</nuxt-link>
                <nuxt-link class="font-bold underline" to="/about">About</nuxt-link>
                <nuxt-link class="font-bold underline" to="/login">Login</nuxt-link>
                <nuxt-link class="font-bold underline" to="/sign-up">Sign Up</nuxt-link>
        </nav>

        <FormBaseButton v-if="user" name="Sign Out" class="btn-alt" :onClick="signOut" />
    </header>
    <slot />
  </div>
</template>

<script setup>
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const router = useRouter()

const signOut = async () => {
  await client.auth.signOut()
}
</script>
