<script setup>
import { onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

const internalInstance = getCurrentInstance();
const router = useRouter();
const progressBarProp =
  internalInstance.appContext.config.globalProperties.$Progress;

progressBarProp.start();

onMounted(() => {
  const origin = window.location.origin;

  if (origin.includes("business.bimpe.ai")) {
    window.location.href = "https://bimpe.ai/restaurant";
    return;
  }

  if (origin.includes("restaurant.bimpe.ai")) {
    window.location.href = "https://bimpe.ai/restaurant";
    return;
  }

  progressBarProp.finish();
});

router.beforeEach((to, from, next) => {
  //  does the page we want to go to have a meta.progress object
  if (to.meta.progress !== undefined) {
    let meta = to.meta.progress;
    // parse meta tags
    progressBarProp.parseMeta(meta);
  }
  //  start the progress bar
  progressBarProp.start();
  //  continue to next page
  next();
});

router.afterEach((to, from) => {
  //  finish the progress bar
  progressBarProp.finish();
});
</script>

<template>
  <v-app>
    <v-main>
      <router-view />
      <vue-progress-bar></vue-progress-bar>
    </v-main>
  </v-app>
</template>
