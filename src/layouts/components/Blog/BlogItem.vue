<template lang="">
        
        <div class="border bg-white w-2/3 relative px-32 py-20 mt-28">
      <img
        class="w-20 h-20 rounded-full absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2"
        :src="props.data.avatar"
        alt=""
      />
      <div class="">
        <h3 class="font-bold text-[30px] leading-[40px] mb-4 text-center">
          {{props.data.title}}
        </h3>
        <span class="flex justify-center mb-12">
          <a
            class="text-text-blue hover:text-[#1851B4] hover:underline"
            href=""
            >{{props.data.author}}</a
          >
          <span class="mx-1"> on </span>
          <span>09 Mar 2023</span>
        </span>
      </div>
      <div>
        <img
          :src="props.data.img"
          alt=""
        />
      </div>
      <div class="mt-8 mb-10">
        <p>
          {{props.data.desc}}
        </p>
      </div>
      <div>
        <router-link
          class="text-text-blue hover:text-[#1851B4] hover:underline"
          :to="`/blog/${props.data.detailSlug}`"
          >Read more...</router-link
        >
      </div>
    </div>

</template>
<script setup>
  const props = defineProps({
    data: Object
  })
</script>
<style lang="">
    
</style>