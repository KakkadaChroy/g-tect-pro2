<template>
  <div>
    <MainHome/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import MainHome from "~/components/home/MainHome.vue";

export default defineComponent({
  components: {MainHome}
})
</script>