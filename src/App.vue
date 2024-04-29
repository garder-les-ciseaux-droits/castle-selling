<template>
  <div class="w-screen h-screen bg-black overflow-y-auto overflow-x-hidden">
    <div class="w-full h-[1000px]">
      <MainPage/>
    </div>
    <div class="w-full h-[660px] mt-10">
      <AboutUs/>
    </div>
    <div class="w-full h-[700px] bg-gradient-to-b from-black to-white mt-10">
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

<style scoped>

</style>
