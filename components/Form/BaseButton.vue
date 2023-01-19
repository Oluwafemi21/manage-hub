<template>
  <button class="btn" @click="onClick" v-bind="$attrs">
    {{ name }}
    <slot />
  </button>
</template>

<script setup>
defineProps({
    name:{
        type:String,
        default:""
    },
    onClick: {
      type: Function,
      required: true
    }
})
</script>

<style lang="postcss" scoped>
.btn {
    @apply px-4 py-2 rounded-md font-bold text-lg uppercase font-dm-sans transition duration-300 ease-in;
}

.btn-primary {
    @apply bg-primary text-white hover:bg-primary/80 ;
}

.btn-alt{
    @apply bg-transparent text-primary border border-primary hover:bg-primary hover:text-white;
}

.btn-icon {
    @apply bg-primary text-white flex items-center justify-center gap-1 hover:bg-primary/80;
}
</style>