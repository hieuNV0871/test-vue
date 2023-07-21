<template>
    <nav class="fixed top-0 right-0 left-0 py-4 z-[99] h-[85px] bg-white border-b">
      <div class="flex justify-around container max-w-[1152px] mx-auto">
        <div>
          <router-link to="/">
            <img
                class="w-[150px] h-[50px]"
              src="https://signal.org/assets/header/logo-f7ef605fe417d5520d38d546b3b774b4261c75220b9904da4d8b2ffc19a761ff.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="flex flex-grow flex-shrink-0 justify-end">
          <template v-for="(navItem, index) in navList" :key="index">
            <a
              v-if="navItem.href"
              :href="navItem.href"
              :target="navItem.target"
              class="flex justify-center items-center hover:text-text-blue px-3 py-2 capitalize"
            >
              <component :is="navItem.icon" />
              <span v-if="navItem.title">{{ navItem.title }}</span>
            </a>
            <router-link
              v-else-if="navItem.to"
              :to="navItem.to"
              class="flex justify-center items-center hover:text-text-blue px-3 py-2 capitalize"
            >
              <component :is="navItem.icon" />
              <span v-if="navItem.title">{{ navItem.title }}</span>
            </router-link>
          </template>
        </div>
      </div>
    </nav>
</template>
<script setup>
import { ref } from "vue";
import config from "../../configs/config";
import { TwitterCircleFilled, InstagramFilled } from "@ant-design/icons-vue";
const navList = ref([
  {
    to: config.route.download,
    title: "Get Signal",
  },
  {
    to: config.route.support,
    title: "Help",
  },
  {
    to: config.route.blog,
    title: "blog",
  },
  {
    to: config.route.docs,
    title: "Developers",
  },
  {
    to: config.route.work,
    title: "careers",
  },
  {
    to: config.route.donate,
    title: "donate",
  },
  {
    href: "https://www.facebook.com/10007I871295000",
    target: 'target="_blank"',
    icon: TwitterCircleFilled,
  },
  {
    href: "https://www.facebook.com/10007I871295000",
    target: 'target="_blank"',
    icon: InstagramFilled,
  },
  {
    to: "#",
    title: "english",
    icon: InstagramFilled,
  },
]);
</script>
<style></style>
