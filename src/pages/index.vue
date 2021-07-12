<template>
  <div class="bg-bridal-heath-100">
    <SmallBanner />
    <Header />
    <HeroSection />
    <DetailSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmallBanner from "../components/modules/SmallBanner.vue";
import Header from "../components/modules/Headers.vue";
import HeroSection from "../components/templates/HeroSection.vue";
import DetailSection from "../components/templates/DetailSection.vue";

export default defineComponent({
  components: {
    SmallBanner,
    Header,
    HeroSection,
    DetailSection,
  },
  setup() {},
});
</script>
