<template>
  <div class="flex flex-col relative">
    <input 
    class="input-field"
    placeholder=" " 
    type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"
    v-bind="$attrs"
    >
     <label v-if="label">{{label}}</label>
  </div>
</template>

<script setup>
defineProps({
    label:{
        type:[String,Boolean],
        default:false
    },
    modelValue:{
        type:String,
        default:""
    }
})
</script>

<style lang="postcss" scoped>
.input-field{
    @apply border-b border-black transition duration-300 ease-in focus:outline-none focus:border-primary focus:shadow-vertical focus:shadow-purple-700;
}

label{
    @apply h-full absolute flex items-center transition duration-300 ease-in;
}

.input-field:focus + label,.input-field:not(:placeholder-shown) + label {
    transform: translateY(-20px);
}
</style>