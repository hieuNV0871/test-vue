<template lang="">
  <section class="bg-[#f7f7f7] py-12 px-6">
    <div class="container max-w-[1152px] mx-auto">
      <div class="flex justify-center flex-col items-center">
        <BlogItem v-for="(item, index) in props.datas" :key="index" :data = "item"/>
        <!-- <BlogItem/>
        <BlogItem/> -->
      </div>
    </div>
  </section>
</template>
<script setup>
    import BlogItem from "./BlogItem.vue";
    const props = defineProps({
        datas: Array
    })
</script>
<style lang=""></style>
