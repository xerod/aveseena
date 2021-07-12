<template>
  <img class="absolute" src="../../assets/hero-pattern.svg" />
  <div class="relative pb-8 sm:pb-12 lg:pb-12 font-lato">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative z-10">
      <div
        class="
          mx-auto
          max-w-md
          px-4
          sm:max-w-3xl sm:px-6
          lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24
        "
      >
        <div>
          <div class="mt-4">
            <div>
              <a href="#" class="inline-flex space-x-4">
                <span
                  class="
                    rounded
                    bg-linen-500
                    px-2.5
                    py-1
                    text-xs
                    font-semibold
                    text-gold-sand-900
                    tracking-wide
                    uppercase
                  "
                >
                  15% OFF
                </span>
                <span
                  class="
                    inline-flex
                    items-center
                    text-sm
                    font-medium
                    italic
                    text-gold-sand-900
                    space-x-1
                  "
                >
                  <span>Special for our new members</span>
                  <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div class="mt-6 sm:max-w-xl">
              <p
                class="
                  text-4xl text-gray-900
                  tracking-wide
                  sm:text-6xl
                  font-ogg
                  sm:max-w-sm
                "
              >
                Switch to
              </p>
              <p
                class="
                  mt-2
                  text-4xl text-gray-900
                  sm:text-6xl
                  font-ogg
                  sm:max-w-sm
                "
              >
                Clean Beauty
              </p>
              <p class="mt-6 text-xl text-linen-900 font-lato italic">
                Because we care so deeply about your skin, we make it easier to
                switch by recommending different product tailored to your needs.
                All directly to your email!
              </p>
            </div>
            <form action="#" class="mt-12 sm:max-w-lg sm:w-full sm:flex">
              <div class="min-w-0 flex-1">
                <label for="hero_email" class="sr-only">Email address</label>
                <input
                  id="hero_email"
                  type="email"
                  class="
                    block
                    w-full
                    border border-gray-300
                    px-5
                    py-3
                    text-base text-gray-900
                    placeholder-gray-500
                    shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500
                  "
                  placeholder="Enter your email"
                />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  class="
                    block
                    w-full
                    px-5
                    py-3
                    bg-black
                    text-base
                    font-medium
                    text-white
                    shadow
                    hover:bg-warm-gray-900
                    focus:outline-none
                    focus:ring-2
                    focus:ring-warm-gray-500
                    focus:ring-offset-2
                    sm:px-10
                  "
                >
                  SIGN ME UP
                </button>
              </div>
            </form>
            <div class="mt-6">
              <div class="inline-flex items-center divide-x divide-gray-300">
                <div class="flex-shrink-0 flex pr-5">
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div
                  class="
                    min-w-0
                    flex-1
                    pl-5
                    py-1
                    text-sm text-linen-900
                    sm:py-3
                  "
                >
                  <span class="font-medium text-gray-900">Rated 5 stars</span>
                  by over
                  <span class="font-medium text-gold-sand-900"
                    >30k customers</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:block sm:mx-auto sm:max-w-3xl sm:px-6 my-12">
        <div class="sm:relative lg:absolute lg:inset-y-8 lg:right-0 lg:w-1/2">
          <div
            class="
              relative
              pl-4
              -mr-40
              sm:mx-auto sm:max-w-3xl sm:px-0
              lg:max-w-none lg:h-full lg:pl-12
            "
          >
            <img
              class="
                w-full
                rounded-md
                shadow-xl
                ring-1 ring-black ring-opacity-5
                lg:h-full lg:w-auto lg:max-w-none
              "
              src="../../assets/cover.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ts-ignore
import { ChevronRightIcon, StarIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronRightIcon,
    StarIcon,
  },
};
</script>
