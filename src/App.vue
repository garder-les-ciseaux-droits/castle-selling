<template>
   <router-view></router-view>

</template>

<script>
import MainLanding from '/src/components/MainLanding.vue'


export default {
  components: {
    MainLanding,
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
