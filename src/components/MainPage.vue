<template>
  <div class="w-full h-full items-center flex mt-2 max-w-full min-w-0 overflow-x-hidden">
    <div class="w-full h-full max-w-full min-w-0 flex flex-col items-center mx-10">


      <div class="relative w-[1280px] h-[200px] md:h-[600px] mx-10 min-w-0 max-w-full">
        <div class="w-full h-full min-w-0">
          <Carousel :autoplay="5000" :wrap-around="true">
            <Slide class="h-[200px] md:h-[600px] w-full min-w-0" v-for="(item, index) in castleData.specialEstates" :key="item.id">
              <img class="w-full h-full rounded-2xl" :src="item.pictures" />
              <div class="bg-gradient-to-l from-black md:w-full absolute inset-0 flex justify-start items-center min-w-0 min-h-0">
                  
              </div>
              <div class="w-1/2 left-0 h-full absolute flex text-start">
                <div class="w-full flex h-full items-center justify-center md:pl-20 ">
                  <h1 v-show="index === 0" class="hidden md:flex  w-full text-white font-playfair text-wrap text-xl md:text-5xl drop-shadow-2xl min-w-0 max-h-full">
                    LUXURY CASTLES
                  </h1>
                </div>
              </div>
              <div class="w-1/2 h-full absolute right-0 flex flex-col justify-center items-end space-y-4 md:space-y-10 text-end">
                <div class="w-full flex flex-col items-end space-y-1 md:space-y-4 pr-10 md:pr-20">
                 
                  <h1 class="text-white font-playfair text-lg md:text-4xl drop-shadow-md">
                    {{ item.name }}
                  </h1>
                  <h2 class="text-white font-playfair text-xs md:text-2xl">
                    {{ item.location }}
                  </h2>
                  <h3 class="text-white font-playfair text-xs md:text-4xl">
                    {{ item.price }}€
                  </h3>
                </div>
                <div class="flex w-full justify-end items-start pr-10 md:pr-20">
                  <button class="bg-white rounded-xl w-24 h-8 md:w-36 md:h-12 md:text-base text-xs hover:bg-[#181818] hover:text-white">
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
        <Carousel :autoplay="10000" class="w-full h-full" :wrap-around="true"  :breakpoints="breakpoints" v-bind="settings"  :transition="500">
          <Slide class="w-full md:w-[300px] h-full flex flex-col" v-for="item in castleData.availableEstates" :key="item.id">
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

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}



.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}


</style>
