<template>
    <div>
        <section class="max-h-[680px] bg-background-blue text-text-black mb-16">
            <div class="py-12 px-6">
                <div class="container max-w-[1152px] mx-auto">
                    <div class="flex">
                        <div class="w-[40%] p-3">
                            <h1 class="font-extrabold text-6xl mt-32">Speak Freely</h1>
                            <p class="my-4 text-xl">Say "hello" to a different messaging experience. An unexpected focus on privacy, combined with all of the features you expect.</p>
                            <router-link to="/download" class="text-[#2c6bed] px-5 py-2 inline-block rounded-lg bg-white text-xl font-semibold hover:text-[#1851b4] ">Get Signal</router-link>
                        </div>
                        <div class="flex p-3">
                            <img class=" mt-[46px]  w-[320px] rotate-[22.5deg]" src="https://signal.org/assets/features/signal-iphone-eee9210b058079bae2f5972f41b87c68a95cdca5e7bc8c878d9450663b5044c9.png" alt="">
                            <img class=" -ml-[32px] w-[300px] h-[570px]  rotate-[22.5deg]" src="https://signal.org/assets/features/signal-pixel-3ff95be5c1225215416ca118ad5adabce8b61a820f0550b2174ce3fe13831e03.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 px-6">
            <div class="container max-w-[1152px] mx-auto">
                <div class="flex flex-col justify-center items-center py-2">
                    <h2 class="mb-4 text-[40px] font-extrabold">Why use Signal?</h2>
                    <p class="text-xl">Explore below to see why Signal is a simple, powerful, and secure messenger</p>
                </div>
            </div>
        </section>

        <section class="py-12 px-6">
            <div class="container max-w-[1152px] mx-auto">
                <div class="flex gap-x-40">
                    <div class="w-1/3 flex-none">
                        <h2 class="font-extrabold text-[40px] mb-10">Share Without Insecurity</h2>
                        <p class="text-xl">
                            State-of-the-art end-to-end encryption (powered by the open source Signal Protocol) keeps your conversations secure. We can't read your messages or listen to your calls, and no one else can either. Privacy isn’t an optional mode — it’s just the way that Signal works. Every message, every call, every time.
                        </p>
                    </div>
                    <div class="bg-[#a5cad5] rounded-lg w-2/3">

                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 px-6 bg-[#f6f6f6]">
            <div class="container max-w-[1152px] mx-auto">
                <div class="grid grid-cols-2 gap-6">
                    <div class=" p-[30px] rounded-2xl bg-white shadow-custom-shadow flex justify-center items-center flex-col">
                        <img class="w-[370px] h-[370px]" src="https://signal.org/assets/features/Media-9ebea788426f7eabd9756d3f5ec12a5b97b47b6fa8918cdff0004777f27e1fa3.png" alt="">
                        <h3 class="text-[28px] leading-8 font-extrabold mt-[18px] mb-1">Say Anything</h3>
                        <p class="text-center text-base">Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.</p>
                    </div>
                    <div class=" p-[30px] rounded-2xl bg-white shadow-custom-shadow flex justify-center items-center flex-col">
                        <img class="w-[370px] h-[370px]" src="https://signal.org/assets/features/Media-9ebea788426f7eabd9756d3f5ec12a5b97b47b6fa8918cdff0004777f27e1fa3.png" alt="">
                        <h3 class="text-[28px] leading-8 font-extrabold mt-[18px] mb-1">Say Anything</h3>
                        <p class="text-center text-base">Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.</p>
                    </div>
                    <div class=" p-[30px] rounded-2xl bg-white shadow-custom-shadow flex justify-center items-center flex-col">
                        <img class="w-[370px] h-[370px]" src="https://signal.org/assets/features/Media-9ebea788426f7eabd9756d3f5ec12a5b97b47b6fa8918cdff0004777f27e1fa3.png" alt="">
                        <h3 class="text-[28px] leading-8 font-extrabold mt-[18px] mb-1">Say Anything</h3>
                        <p class="text-center text-base">Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.</p>
                    </div>
                    <div class=" p-[30px] rounded-2xl bg-white shadow-custom-shadow flex justify-center items-center flex-col">
                        <img class="w-[370px] h-[370px]" src="https://signal.org/assets/features/Media-9ebea788426f7eabd9756d3f5ec12a5b97b47b6fa8918cdff0004777f27e1fa3.png" alt="">
                        <h3 class="text-[28px] leading-8 font-extrabold mt-[18px] mb-1">Say Anything</h3>
                        <p class="text-center text-base">Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.</p>
                    </div>
                </div>
            </div>
        </section>

            <InfomationSection :data="dt1"/>
            <InfomationSection :data="dt2"/>

    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import InfomationSection from '../layouts/components/InfomationSection.vue';

    const dt1 = ref({
        isReverseCol: false,
        title: "No ads. No trackers. No kidding.",
        content: "There are no ads, no affiliate marketers, and no creepy tracking in Signal. So focus on sharing the moments that matter with the people who matter to you.",
        imgUrl: "https://signal.org/assets/features/No-Ads-3d8c77d5daeadd4c02fd3f4343745812fd4f79406a01b4924cf53549957297e0.png"
    })

    const dt2 = ref({
        isReverseCol: true,
        title: "Free for Everyone",
        content: "Signal is an independent nonprofit. We're not tied to any major tech companies, and we can never be acquired by one either. Development is supported by grants and donations from people like you.",
        imgUrl: "https://signal.org/assets/features/Nonprofit503-876fb51a00d7d9de8a2c23f94394278191947bd56a8048df5d0138cde497332f.png",
        btn: {
            to: '/donate',
            content: 'donate to signal'
        }
    })
</script>
<style >
    
</style>