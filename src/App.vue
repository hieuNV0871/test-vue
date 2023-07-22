<script setup>
import {ref, onMounted} from 'vue'
const showModal = ref(true)

</script>

<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
    <div class="bg-white rounded p-4 m-w-64 flex flex-col">
        <div class="flex items-center justify-center mb-5">
            <button class="float-right top-2 right-2 text-gray-500" @click="showModal = false">
                Close
            </button>
        </div>
      Trang web chưa responsive, vui lòng xem trên máy tính để có trải nghiệm tốt nhất, xin cảm ơn :V
      <br/>
      <br/>

      Trang web sử dụng i18n để dịch nhưng mới dịch phần navbar
    </div>
  </div>
  <component :is=" $route.meta.layout">
      <router-view/>
  </component>
</template>

<style scoped>

</style>
