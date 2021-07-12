<template>
  <div class="bg-bridal-heath-300 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-4xl text-gold-sand-800 tracking-wide font-antro">
          Join Our
        </h2>
        <p
          class="
            mt-1
            text-4xl text-gray-900
            sm:text-5xl sm:tracking-tight
            lg:text-6xl
            font-ogg
          "
        >
          Clean Beauty Movement
        </p>
        <p
          class="
            max-w-xl
            mt-5
            mx-auto
            text-xl text-linen-900
            font-lato font-light
          "
        >
          In Europe, roughly 1300 toxic ingredients are banned from beauty
          products. Surprisingly, only 11 are banned in the US.
        </p>
      </div>
    </div>
    <div
      class="
        flex flex-col
        lg:flex-row
        max-w-lg
        md:max-w-2xl
        lg:max-w-5xl
        mx-auto
        divide-y
        lg:divide-x lg:divide-y-0
        divide-linen-500
        mt-4
        lg:mt-16
      "
    >
      <div
        v-for="item in items"
        v-bind:key="item.id"
        class="font-lato text-left lg:text-center py-8 lg:py-0 lg:px-14"
      >
        <p class="uppercase text-gold-sand-800 font-semibold">
          {{ item.title }}
        </p>
        <p class="mt-2.5 text-bridal-heath-800 font-light">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const items = [
  {
    title: "No Harmfull Chemicals",
    description:
      "Sit aliquid et qui repellat ut debitis adipisci. Distinctio voluptatum quia aut ut. Provident qui nisi architecto accusamus totam sequi minus quis et.",
  },
  {
    title: "No Harmfull Chemicals",
    description:
      "Sit aliquid et qui repellat ut debitis adipisci. Distinctio voluptatum quia aut ut. Provident qui nisi architecto accusamus totam sequi minus quis et.",
  },
  {
    title: "No Harmfull Chemicals",
    description:
      "Sit aliquid et qui repellat ut debitis adipisci. Distinctio voluptatum quia aut ut. Provident qui nisi architecto accusamus totam sequi minus quis et.",
  },
];

export default defineComponent({
  setup() {
    return {
      items,
    };
  },
});
</script>
