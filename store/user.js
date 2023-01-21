// store/user.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref(null);
    const client = useSupabaseAuthClient();
    const router = useRouter();

    async function login(username, password) {
        await client.auth
            .signInWithPassword({
                email: username,
                password: password,
            })
            .then(({ data }) => {
                user.value = data.user;
                router.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    async function logout() {
        await client.auth
            .signOut()
            .then(() => {
                user.value = null;
                router.push("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async function createUser(username, password, full_name, phone) {
        await client.auth
            .signUp({
                email: username,
                password: password,
                options: {
                    data: {
                        full_name: full_name,
                        phone: phone,
                    },
                },
            })
            .then(() => {
                router.push("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return { user, login, logout, createUser };
});
