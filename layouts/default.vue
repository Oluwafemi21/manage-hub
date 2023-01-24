<template>
    <div class="bg-grey min-h-screen">
        <div class="container mx-auto p-4">
            <header
                class="flex flex-wrap items-center justify-between text-black/70"
            >
                <nuxt-link to="/">
                    <img
                        src="~/assets/images/logo/logo-2.svg"
                        alt="Manage Hub Logo"
                    />
                </nuxt-link>
                <nav class="flex items-center gap-7">
                    <nuxt-link class="link text-primary-100" to="/" title="Home"
                        >Home</nuxt-link
                    >
                    <nuxt-link class="link" to="/pricing" title="Pricing"
                        >Pricing</nuxt-link
                    >
                    <nuxt-link class="link" to="/about" title="About us"
                        >About us</nuxt-link
                    >
                    <nuxt-link class="link" to="/help" title="Help"
                        >Help</nuxt-link
                    >
                </nav>
                <div class="flex items-center gap-5">
                    <nuxt-link
                        class="py-2 px-4 rounded-md font-bold uppercase font-dm-sans bg-transparent text-primary border border-primary text-sm hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-primary"
                        to="/sign-up"
                        >Get Started</nuxt-link
                    >
                    <FormBaseButton
                        v-if="auth.user"
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
import { useUserStore } from "~~/store/user";
const auth = useUserStore();
const client = useSupabaseAuthClient();
const router = useRouter();

const signOut = async () => {
    await client.auth
        .signOut()
        .then(() => {
            auth.user = null;
            router.push("/login");
        })
        .catch((err) => {
            console.log(err);
        });
};
</script>

<style lang="postcss" scoped>
.link {
    @apply text-base font-dm-sans font-bold  hover:text-primary focus:text-primary;
}

a.router-link-exact-active {
    @apply text-primary;
}
</style>
