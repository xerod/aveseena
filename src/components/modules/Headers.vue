<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover open="true" class="relative bg-white font-lato">
    <div class="max-w-7xl mx-auto">
      <div
        class="
          flex
          justify-between
          items-center
          border-b border-bridal-heath-600
          py-6
          px-4
          sm:px-6
          md:justify-start md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <Logo />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              bg-white
              p-2
              inline-flex
              items-center
              justify-center
              text-warm-gray-400
              hover:text-warm-gray-500 hover:bg-warm-gray-100
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-inset
              focus-visible:ring-gold-sand-500
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10 z-30">
          <a href="#" class="text-base text-black hover:text-gray-700">
            Shop Now
          </a>
          <a href="#" class="text-base text-black hover:text-gray-700">
            Pricing
          </a>
          <a href="#" class="text-base text-black hover:text-gray-700">
            Shipping
          </a>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-black' : 'text-gray-900',
                'group bg-white  inline-flex items-center text-base hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-sand-500 hover:cursor-pointer',
              ]"
            >
              <span>More</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-800',
                  'ml-2 h-5 w-5 group-hover:text-gray-700',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="
                  absolute
                  z-10
                  left-1/2
                  transform
                  -translate-x-1/2
                  mt-3
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                "
              >
                <div
                  class="
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    overflow-hidden
                  "
                >
                  <div
                    class="
                      relative
                      grid
                      gap-6
                      bg-white
                      px-5
                      py-6
                      sm:gap-8 sm:p-8
                    "
                  >
                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start hover:bg-warm-gray-50"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-gold-sand-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-warm-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-warm-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3
                        class="
                          text-sm
                          tracking-wide
                          text-warm-gray-500
                          uppercase
                        "
                      >
                        Recent Posts
                      </h3>
                      <ul class="mt-4 space-y-4">
                        <li
                          v-for="post in recentPosts"
                          :key="post.id"
                          class="text-base truncate"
                        >
                          <a
                            :href="post.href"
                            class="text-gray-900 hover:text-gray-700"
                          >
                            {{ post.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a
                        href="#"
                        class="text-gold-sand-600 hover:text-gold-sand-500"
                      >
                        View all posts <span aria-hidden="true">&rarr;</span></a
                      >
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div
          class="
            hidden
            space-x-8
            md:flex
            items-center
            justify-end
            md:flex-1
            lg:w-0
          "
        >
          <ShoppingBagIcon class="h-6 w-6" />
          <HeartIcon class="h-6 w-6" />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
          z-30
        "
      >
        <div
          class="
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div></div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-warm-gray-400
                    hover:text-warm-gray-500 hover:bg-warm-gray-100
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-inset
                    focus-visible:ring-gold-sand-500
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in resources"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center hover:bg-warm-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-gold-sand-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base text-gray-900 hover:text-gray-700">
                Our Story
              </a>

              <a href="#" class="text-base text-gray-900 hover:text-gray-700">
                Docs
              </a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div>
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  shadow-sm
                  text-base text-white
                  bg-black
                  hover:bg-warm-gray-800
                "
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base text-warm-gray-500">
                Got Questions?
                {{ " " }}
                <a href="#" class="text-gold-sand-600 hover:text-gold-sand-500">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
// @ts-ignore
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/vue/outline"; // @ts-ignore
import { ChevronDownIcon } from "@heroicons/vue/solid"; // @ts-ignore
import Logo from "../elements/Logo.vue";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Get our e-book on how to Sit aliquid et qui repellat ut debitis adipisci.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See our meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Privacy",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  {
    id: 1,
    name: "Safe beauty's impact on the clean beauty movement",
    href: "#",
  },
  {
    id: 2,
    name: "Everything you need to know to save your skin microbiome",
    href: "#",
  },
  {
    id: 3,
    name: "Why should I care about endocrine disruptors in my skin care?",
    href: "#",
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    Logo,
    ShoppingBagIcon,
    HeartIcon,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
    };
  },
};
</script>
