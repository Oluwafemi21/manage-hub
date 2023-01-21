<template>
  <div 
  v-if="show"
  class="absolute max-w-sm flex items-center justify-between rounded-t border-b-2 border-black p-3"
  :class="[type === 'success' ? 'bg-green-400' : type === 'info' ? 'bg-blue-400' : 'bg-rose-400',
  position === 'top-right' ? 'top-1 right-1' : 'bottom-1 left-1']"
  
  >
    <div class="flex items-center gap-3">
        <Icon name="bi:check-circle-fill" class="text-white"/>
        <span class="text-white font-dm-sans">{{ message }}</span>
    </div>
    <Icon name="heroicons:x-mark" @click="hide" class="cursor-pointer"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
    type:{
        type:String,
        default:'success'
    },
    message:{
        type:String,
        default:'Successfully signed in'
    },
    position:{
        type:String,
        default:'top-right'
    },
    duration:{
        type:Number,
        default:2000
    },
})

const show = ref(true)

const hide = () => {
    show.value = false
}


</script>

