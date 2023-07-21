<template lang="">
    <div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
    <div class="bg-white rounded p-4 m-w-64 flex flex-col">
        <div class="flex items-center justify-between mb-5">
            <h3 class="font-semibold text-xl">Select your language</h3>
            <button class="float-right top-2 right-2 text-gray-500" @click="closeModal">
                X
            </button>
        </div>
      <ul class="grid grid-cols-4 gap-5">
        <li v-for="language in props.lang" :key="language" @click="selectLanguage(language)" class="cursor-pointer hover:text-text-blue">
          {{ language.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
    const props = defineProps({
        lang: Array
    })
function selectLanguage(language) {
  emit('language-selected', language);
  localStorage.setItem("selectedLanguage", language.title);
  closeModal();
}
  
const closeModal = () => {
  emit('close');
};



const emit = defineEmits(['close','language-selected']);
</script>
<style lang="">
    
</style>