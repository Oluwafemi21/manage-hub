<template>
    <div class="bg-grey min-h-screen">
        <div class="container mx-auto p-4">
            <header
                class="flex flex-wrap items-center justify-between text-black/70"
            >
                <img src="~/assets/images/logo/logo-2.svg" alt="" />
                <nav class="flex items-center gap-7">
                    <nuxt-link class="link text-primary-100" to="/"
                        >Home</nuxt-link
                    >
                    <nuxt-link class="link" to="/pricing">Pricing</nuxt-link>
                    <nuxt-link class="link" to="/about">About us</nuxt-link>
                    <nuxt-link class="link" to="/help">Help</nuxt-link>
                </nav>
                <div class="flex items-center gap-5">
                    <nuxt-link
                        class="py-2 px-4 rounded-md font-bold uppercase font-dm-sans bg-transparent text-primary border border-primary text-sm hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-primary"
                        to="/sign-up"
                        >Get Started</nuxt-link
                    >
                    <FormBaseButton
                        v-if="user"
                        name="Logout"
                        class="btn-primary"
                        :onClick="signOut"
                    />
                </div>
            </header>
            <slot />
        </div>
    </div>
</template>

<script setup>
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const router = useRouter();

const signOut = async () => {
    await client.auth.signOut();
    alert("You have been signed out");
    router.push("/login");
};
</script>

<style lang="postcss" scoped>
.link {
    @apply text-base font-dm-sans font-bold  hover:text-primary;
}

a.router-link-exact-active {
    @apply text-primary;
}
</style>
