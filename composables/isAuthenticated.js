export default function () {
    const user = useSupabaseUser();
    return user.value ? true : false;
}
