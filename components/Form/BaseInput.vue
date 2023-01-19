<template>
  <div class="flex flex-col relative">
    <input 
    class="input-field"
    placeholder=" " 
    ref="input"
    type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"
    v-bind="$attrs"
    >
     <label v-if="label">{{label}}</label>
     <!-- heroicons:eye -->
     <div v-if="showIcon" class="flex cursor-pointer absolute h-100 items-center right-0 bottom-3 text-xl">
        <Icon v-if="!isPasswordShown" name='heroicons:eye-slash' @click="showPassword"/>
        <Icon v-else name='heroicons:eye' @click="hidePassword"/>
     </div>
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
    },
    showIcon:{
        type:Boolean,
        default:false
    }
})

// instantiate the input
const input = ref(null)
const isPasswordShown = ref(false)

const showPassword = () =>{
    // if the input type is password
    if(input.value.type === 'password'){
        // change the input type to text
        input.value.type = 'text'
        isPasswordShown.value = true
    }
}

const hidePassword = () =>{
    // if the input type is text
    if(input.value.type === 'text'){
        // change the input type to password
        input.value.type = 'password'
        isPasswordShown.value = false
    }
}
</script>

<style lang="postcss" scoped>
.input-field{
    @apply mb-2 border-b-2 border-black/20 transition duration-300 ease-in focus:outline-none focus:border-primary focus:shadow-vertical py-1 text-lg autofill:bg-yellow-300 focus:autofill:bg-white active:autofill:bg-white;
}

label{
    @apply text-gray-500 h-full absolute flex items-center font-dm-sans transition duration-300 ease-in text-lg;
}

.input-field:focus + label,.input-field:not(:placeholder-shown) + label {
    transform: translateY(-27px);
}
</style>