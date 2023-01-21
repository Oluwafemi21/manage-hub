// store/user.js
import { defineStore } from "pinia";
import { ref } from "vue";
const { auth } = useSupabaseClient();

export const useUserStore = defineStore("user", () => {
    const user = ref(null);
    async function login(username, password) {
        await auth
            .signInWithPassword({
                email: username,
                password: password,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                alert("Login Failed");
                console.log(err);
            });
    }

    return { user, login };
});
