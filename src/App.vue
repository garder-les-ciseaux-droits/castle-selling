<template>
  <div class="w-screen h-screen bg-black justify-center overflow-y-auto overflow-x-hidden">
    <div class="w-full h-[560px] md:h-[1000px]">
      <MainPage/>
    </div>
    <div class="w-full h-[450px] md:h-[660px] mt-0 md:mt-10">
      <AboutUs/>
    </div>
    <div class="w-full h-[500px] md:h-[700px] bg-gradient-to-b from-black to-white mt-10">
      <OurRegions/>
    </div>
    <div class="w-full h-[320px]">
      <Footer/>
    </div>
  </div>
  
</template>

<script>
import MainPage from '/src/components/MainPage.vue'
import AboutUs from '/src/components/AboutUs.vue';
import OurRegions from '/src/components/OurRegions.vue'
import Footer from '/src/components/Footer.vue'

export default {
  components: {
    MainPage,
    AboutUs,
    OurRegions,
    Footer
  },
  data() {
    return {
     
    }
  },
  methods: {

  },
  mounted() {
  },
  computed: {

  }

}  

</script>

<style>
::-webkit-scrollbar {
  width: 0px;

}

::-webkit-scrollbar-track {
  background: rgba(241, 241, 241, 0);
}




::-webkit-scrollbar-thumb:hover {
  background: #020202;
  border-radius: 6px;
}
</style>
