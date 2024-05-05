<template>
  <div class="w-full h-full items-center flex mt-2 max-w-full min-w-0 overflow-x-hidden">
    <div class="w-full h-full max-w-full min-w-0 flex flex-col items-center mx-10">
      <div class="w-full md:w-[1280px] h-[60px] md:h-[80px] flex max-w-full min-w-0 mt-4">
        <div class="w-1/4 h-full flex items-center md:justify-start justify-center max-w-full min-w-0">
          <img class="w-24 h-24 md:w-32 md:h-32" src="/src/assets/Logo/castleLogoWithTextWhite.png"/>
        </div>
        <div class="w-1/2 md:w-3/4 h-full max-w-full min-w-0">
          <nav class="hidden w-full h-full md:flex justify-center items-center">
            <div class="w-full h-full flex items-center justify-center space-x-16 text-sm">
              <a class="text-white font-playfair">CASTLES</a>
              <a class="text-white font-playfair">MANOR HOUSES</a>
              <a class="text-white font-playfair">SERVICES</a>
              <a class="text-white font-playfair">CONTACT US</a>
            </div>
          </nav>
        </div>
        <div class="w-1/4 h-full flex items-center justify-center md:justify-end max-w-full min-w-0">
          <button class="w-full h-full flex md:hidden flex justify-end mr-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#b1acab"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <button class="w-[100px] h-[40px] md:flex hidden rounded-xl bg-white justify-center items-center hover:bg-[#181818] hover:text-white text-black">
            <p class="text-sm">Catalog</p>
          </button>  
        </div>
      </div>
      <div class="w-[1280px] h-[30px] flex justify-center items-center min-w-0 max-w-full">
               
      </div>
      <div class="relative w-[1280px] h-[200px] md:h-[600px] mx-10 min-w-0 max-w-full">
        <div class="w-full h-full">
          <Carousel :autoplay="5000" :wrap-around="true">
            <Slide class="h-[200px] md:h-[600px] w-full min-w-0" v-for="(item, index) in castleData.availableEstates.filter(c => c.main === true)" :key="item.id">
              <img class="w-full h-full rounded-2xl" :src="item.pictures" />
              <div class="bg-gradient-to-l from-black w-full absolute inset-0 flex justify-start items-center">
                <h1 v-show="index === 0" class="hidden md:flex w-10 text-white font-playfair text-xl md:text-7xl ml-10 md:ml-24 drop-shadow-2xl">
                  LUXURY CASTLES
                </h1>
              </div>
              <div class="w-full absolute inset-0 flex flex-col justify-center items-end space-y-4 md:space-y-10">
                <div class="w-full h-1/2 flex flex-col justify-end items-end space-y-1 md:space-y-4">
                  <h1 class="text-white font-playfair text-xl md:text-4xl mr-10 md:mr-24 drop-shadow-md">
                    {{ item.name }}
                  </h1>
                  <h2 class="text-white font-playfair text-base md:text-2xl mr-10 md:mr-24">
                    {{ item.location }}
                  </h2>
                  <h3 class="text-white font-playfair text-base md:text-4xl mr-10 md:mr-24">
                    {{ item.price }}€
                  </h3>
                </div>
                <div class="flex w-full h-1/4 justify-end items-start">
                  <button class="bg-white rounded-xl w-24 h-8 md:w-36 md:h-12 mr-10 md:mr-24 md:text-base text-xs hover:bg-[#181818] hover:text-white">
                    Learn more
                  </button>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation class="z-50 absolute" />
              <Pagination class="z-50 flex" />
            </template>
          </Carousel>
        </div>
      </div>
      <div class="w-[1280px] h-[160px] md:h-[220px] mt-12 min-w-0 max-w-full flex">
        <Carousel class="w-full h-full" :wrap-around="true"  :breakpoints="breakpoints" v-bind="settings"  :transition="500">
          <Slide class="w-full md:w-[300px] h-full flex flex-col" v-for="item in castleData.availableEstates.filter(c => c.main === false)" :key="item.id">
              <img class="w-[200px] md:w-full h-[130px] md:h-[160px] rounded-2xl" :src="item.pictures" />
              <div class="text-white w-[300px] flex justify-center mt-2">
                <h1 class="text-white font-playfair text-base drop-shadow-md">
                        {{ item.name }}
                </h1>
              </div>
          </Slide>
            <template #addons>

            </template>        
        </Carousel>
        <!-- <div v-for="(item, index) in castleData.availableEstates.filter(c => c.main === false)" :key="item.id" class="w-full h-full flex flex-col">
          <div class="relative w-[300px] h-[160px] rounded-xl shrink-0 flex justify-center items-center">
            <img class="w-full h-full rounded-xl" :src="item.pictures"/>
          </div>
          <div class="text-white w-[300px] flex justify-center mt-2">
            <h1 class="text-white font-playfair text-base drop-shadow-md">
                    {{ item.name }}
            </h1>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import jsonData from "/src/assets/jsonData/estateData.json";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      castleData: jsonData,
      settings: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    }
    };
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>

<style>

.carousel__slide {
  padding: 5px;
}

</style>
