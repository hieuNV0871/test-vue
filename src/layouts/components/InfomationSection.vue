<template>
    <section class="py-12 px-6">
        <div class="container max-w-[1152px] mx-auto">
            <div :class="`flex p-3 ${props.data.isReverseCol ? 'flex-row-reverse' : ''}`">
                <div class="w-1/3 p-3">
                    <h3 class="mb-8 font-extrabold text-[40px] leading-[44px]">{{ props.data.title }}</h3>
                    <p class="text-xl leading-7">{{ props.data.content }}</p>
                    <router-link  v-if="props.data.btn" :to="props.data.btn.to" class="inline-block hover:border-[#1851b4] hover:text-[#1851b4] text-text-blue font-semibold px-4 mt-6 py-2 capitalize rounded-lg border-2 border-text-blue border-solid text-xl bg-white">{{ props.data.btn.content }}</router-link>
                </div>
                <div :class="`w-2/3 p-3 ${props.data.isReverseCol ? 'flex justify-end' : ''}`">
                    <img class="w-[680px] rounded-xl" :src="props.data.imgUrl" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
 const props = defineProps({
        data: Object
    })
</script>
<style scoped>
    
</style>