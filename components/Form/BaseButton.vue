<template>
    <button class="btn" @click="onClick" v-bind="$attrs">
        <slot name="buttonIcon" />
        <span>{{ name }} </span>
    </button>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: "",
    },
    onClick: {
        type: Function,
        required: true,
    },
});
</script>

<style lang="postcss" scoped>
.btn {
    @apply px-4 py-2 rounded-md border font-bold text-sm uppercase font-dm-sans  focus:ring-2 focus:ring-offset-1 focus:outline-none;
}

.btn-primary {
    @apply bg-primary text-white border-primary  hover:bg-primary focus:ring-primary;
}

.btn-alt {
    @apply bg-transparent text-primary border-primary hover:bg-primary hover:text-white focus:ring-primary focus:bg-primary focus:text-white;
}

.btn-icon {
    @apply flex items-center justify-center gap-2;
}
</style>
