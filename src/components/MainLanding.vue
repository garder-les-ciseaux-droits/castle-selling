<template>
    <div class="w-screen h-screen bg-black justify-center overflow-y-auto overflow-x-hidden">
      <header class="w-full flex justify-center mt-2">
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
            <p class="text-sm w-full h-full"><a class="w-full h-full flex justify-center items-center" href="#/catalog">Catalog</a></p>
          </button>  
        </div>
          </div>
        </div>
      </header>
      <main>
        <div class="w-full h-[560px] md:h-[1000px]">
          <MainPage/>
        </div>
        <div class="w-full h-[450px] md:h-[660px] mt-0 md:mt-10">
          <AboutUs/>
        </div>
        <div class="w-full h-[500px] md:h-[700px] bg-gradient-to-b from-black to-white mt-10">
          <OurRegions/>
        </div>
     </main>
      <footer class="w-full h-[320px]">
        <Footer/>
      </footer>
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
  