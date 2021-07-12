<template>
  <div class="relative">
    <div class="relative bg-black max-w-6xl mx-auto font-lato z-10">
      <div
        class="
          max-w-7xl
          mx-auto
          py-12
          px-4
          sm:px-6
          lg:py-24 lg:px-12 lg:flex lg:items-center
        "
      >
        <div class="lg:w-0 lg:flex-1">
          <p class="text-4xl font-ogg text-white sm:text-5xl">
            Sign up and get 15% off
          </p>
          <p class="mt-3 max-w-xl text-lg text-warm-gray-400">
            Get discounted product, articles, and recommendations of different
            product tailored to your needs. All directly to your email!
          </p>
        </div>
        <div class="mt-8 lg:mt-0 lg:ml-8">
          <form class="sm:flex">
            <label for="emailAddress" class="sr-only">Email address</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autocomplete="email"
              required=""
              class="
                w-full
                px-5
                py-3
                border border-gray-300
                shadow-sm
                placeholder-gray-400
                focus:ring-1 focus:ring-gold-sand-800 focus:border-gold-sand-800
                sm:max-w-xs
              "
              placeholder="Enter your email"
            />
            <div
              class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"
            >
              <button
                type="submit"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  py-3
                  px-5
                  border border-warm-gray-800
                  text-base
                  font-medium
                  text-black
                  bg-white
                  hover:bg-warm-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-warm-gray-100
                "
              >
                Notify me
              </button>
            </div>
          </form>
          <p class="mt-3 text-sm text-warm-gray-400">
            We care about the protection of your data. Read our
            {{ " " }}
            <a href="#" class="font-medium underline"> Privacy Policy. </a>
          </p>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 h-1/2 w-full bg-bridal-heath-500 z-0"></div>
  </div>
</template>
