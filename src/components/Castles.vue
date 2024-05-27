<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-[1280px] h-full mx-10 flex flex-col items-center min-w-0">
            <div class="w-full h-[200px] md:h-[125px] space-y-10 min-w-0">
                <h1 class="text-white font-playfair text-2xl">Our Real Estate Listings of Castles - Châteaux For Sale</h1>
                <h2 class="text-white font-playfair text-base">Castle Selling, specialized in the sale of luxury homes, has selected for you some of the most beautiful castles for sale in the world, some of which are Historical Monuments.</h2>
            </div>
            <div class="w-[1280px] mt-10 flex items-center justify-center min-w-0 mx-10 max-w-full">
                <img src="/src/assets/Images/Divider.png"/>
            </div>
            <div class="w-[1280px] mt-10 h-fit grid-cols-1 md:grid-cols-2 grid gap-10 mx-10 min-w-0 max-w-full">
                <button class="text-black bg-white hover:bg-[#121212] hover:text-white w-32 rounded-2xl h-10" @click="filterMax">Filter Max</button>
                <button class="text-black bg-white hover:bg-[#121212] hover:text-white w-32 rounded-2xl h-10" @click="filterMin">Filter Min</button>
                <div class="w-full h-full flex" v-for="castle in estates">
                    <div v-show="castle.main === false" class="relative w-full flex items-end md:w-[620px] h-full">
                        <img class="w-full h-full rounded-xl" :src="castle.pictures"/>
                        <div class="w-full h-1/4 bg-black/70 text-white absolute rounded-b-xl font-playfair text-base flex flex-col justify-center items-center space-y-1">
                            <p>Castle</p>
                            <p class="text-lg">{{ castle.name }}</p>
                            <p>{{ castle.price }}€</p>
                        </div>
                        <div class="w-full h-1/4 text-white absolute rounded-b-xl font-playfair text-base flex flex-col justify-center items-center space-y-1">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import castlesData from '/src/assets/jsonData/estateData.json'
export default {
    components: {

    },
    data() {
      return {
        filterSearch: false,
        estates: castlesData.availableEstates,
      }
    },
    methods: {
        filterMax(){
            const sorted = this.estates.reduce(function(sorted, current){

                let index = sorted.findIndex(x => x.price.split(',').join('') < Number(current.price.split(',').join('')));
                if (index === -1){
                    sorted.push(current);
                }
                else{
                    sorted.splice(index, 0, current);
                }
                console.log(Number(current.price))
                return sorted;
            },[])
            this.estates = sorted;
            
        },
        filterMin(){

            const sorted = this.estates.reduce(function(sorted, current){

                let index = sorted.findIndex(x => x.price.split(',').join('') > Number(current.price.split(',').join('')))
                if (index === -1){
                    sorted.push(current)
                }
                else{
                    sorted.splice(index, 0, current)
                }
                console.log(Number(current.price))
                return sorted;
            },[])
            this.estates = sorted;

        }
  
    },
    mounted() {
    },
    computed: {
  
    }
  
}  
</script>

<style>
</style>