import * as VueRouter from 'vue-router';

import config from '../configs/config';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import EmptyLayout from '../layouts/EmptyLayout.vue'




const routes = [
  {
    path: config.route.home,
    component: () => import('../pages/Home.vue'),
    meta: {
      layout: DefaultLayout,
      title: 'Home'
    },
  },
  {
    path: config.route.blog,
    component: () => import('../pages/Blog/index.vue'),
    meta: {
      layout: DefaultLayout,
      title: 'Blog',
    },
    children: [
      {
        path: "",
        component: () => import("../pages/Blog/Blog.vue"),
        meta: {
          title: 'Blog'
        }
      },
      {
        path: ":slug",
        component: () => import("../pages/Blog/BlogDetail.vue"),
        meta: {
          title: "Blog",
          layout: DefaultLayout
        }
      }
    ]
  },
  {
    path: config.route.download,
    component: () => import('../pages/Download.vue'),
    meta: {
      layout: DefaultLayout,
      title: 'Download'
    },
  },
  {
    path: config.route.docs,
    component: () => import('../pages/Docs.vue'),
    meta: {
      layout: DefaultLayout,
      title: 'Documentation'
    },
  },
  {
    path: config.route.donate,
    component: () => import('../pages/Donate.vue'),
    meta: {
      layout: DefaultLayout,
      title: 'Donate'
    },
  },
  {
    path: config.route.support,
    component: () => import('../pages/Support.vue'),
    meta: {
      layout: DefaultLayout,
      title: 'Support'
    },
  },
  {
    path: config.route.work,
    component: () => import('../pages/Work.vue'),
    meta: {
      layout: DefaultLayout,
      title: 'Work'
    },
  },
  {
    path: config.route.pageNotFound,
    component: () => import('../pages/404NotFound.vue'),
    meta: {
      layout: EmptyLayout,
      title: 'Not found'
    },
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Signal >> ${to.meta.title}`  || "Signal";
  return next();
});

export default router;
