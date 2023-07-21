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
              <span v-if="navItem.title">{{ $t(navItem.title) }}</span>
            </a>
            <router-link
              v-else-if="navItem.to"
              :to="navItem.to"
              class="flex justify-center items-center hover:text-text-blue px-3 py-2 capitalize"
            >
              <component :is="navItem.icon" />
              <span v-if="navItem.title">{{ $t(navItem.title) }}</span>
            </router-link>
          </template>
            <a @click="showLanguageModal = true" class="flex justify-center items-center hover:text-text-blue px-3 py-2 capitalize" href="#"><InstagramFilled/>{{selectedLang}}</a>
            <LanguageModal v-if="showLanguageModal" @language-selected="updateSelectedLang" :lang = "languageList" @close="showLanguageModal = false"/>
          </div>
      </div>
    </nav>
</template>
<script setup>
import { ref } from "vue";
import config from "../../configs/config";
import { TwitterCircleFilled, InstagramFilled } from "@ant-design/icons-vue";
import LanguageModal from './LanguageModal.vue'
import { useI18n } from 'vue-i18n'; 
const showLanguageModal = ref(false)
const selectedLang = ref("English")
const languageList = ref([
  {
    locale: 'en',
    title: 'English'
  },
  {
    locale: 'vi',
    title: 'Tiếng việt'
  },
])
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
    title: "Blog",
  },
  {
    to: config.route.docs,
    title: "Developers",
  },
  {
    to: config.route.work,
    title: "Careers",
  },
  {
    to: config.route.donate,
    title: "Donate",
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
  // {
  //   to: "#",
  //   title: "english",
  //   icon: InstagramFilled,
  // },
]);
const { locale } = useI18n();

const updateSelectedLang = (language)=>{
  selectedLang.value = language.title;
  locale.value = language.locale;
  showLanguageModal.value = false
}
</script>
<style></style>
