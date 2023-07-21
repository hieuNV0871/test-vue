<template>
    <BlogList :datas = "fakeDataBlogPosts"/>
</template>
<script setup>
import {ref} from 'vue'
import BlogList from '../../layouts/components/Blog/BlogList.vue';
const fakeDataBlogPosts = ref([
  {
    avatar: "https://avatars.githubusercontent.com/nina-signal",
    title: "Signal is for everyone, and everyone is different",
    author: "Nina signal",
    dateCreated: "",
    img: "https://signal.org/blog/images/global-header.png",
    desc: "The tech industry–its products, conceptual frameworks, linguistic conventions, and cultural norms–is largely centered in the US (and, increasingly, China. But we’re focused here on the US, where Signal is based). This is not because the US has better programmers or more visionary entrepreneurs, but due primarily to historical material conditions. For example, early investments in networked computation from the US military, which happened around the same time that the US was becoming a global superpower, which was followed by the privatization and then commercialization of networked computation, then the dot com boom, etc. etc., and here we are.",
    detailSlug: "Signal-is-for-everyone"
  },{
    avatar: "https://avatars.githubusercontent.com/meredith-signal",
    title: "Standing firm against threats to private and safe communication",
    author: "meredith-signal",
    dateCreated: "",
    img: "https://signal.org/blog/images/uk-online-safety-bill.png",
    desc: "Signal exists to provide people everywhere with a tool for real private communication. That’s our only goal, and we take it very seriously. We’re structured as a nonprofit to ensure that market forces can never put profit or expediency over the safety of those who rely on us. Our work also resonates beyond the Signal app. The Signal Protocol has become the foundation for end-to-end encryption technology that is used and trusted by many private messaging services to protect billions of messages every day.",
    detailSlug: "uk-online-safety-bill"
  }
])
</script>
<style>
</style>
