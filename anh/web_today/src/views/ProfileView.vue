<template>
  <div class="flex justify-center  gap-5 min-w-[1200px] max-w-[1200px] h-full pt-[90px]">
    <div class="flex flex-col gap-5">
      <div @mouseover="counter.arrow=1"  class="relative flex flex-col justify-center items-center">
        <img v-for="i in counter.data_one.image_post" :src="counter.domain_Backend+i.Image_post" v-show="counter.image_show==i.id"  class="min-w-[500px] max-w-[500px] min-h-[337px] max-h-[337px] rounded"/>
        <div v-show="counter.arrow==1"  @mouseleave="counter.arrow=0" class="flex justify-between px-3 items-center min-w-[500px] max-w-[500px] min-h-[337px] max-h-[337px] absolute ">
          <font-awesome-icon icon="fa-solid fa-chevron-left" class="w-[30px] h-[30px] text-[13px] bg-gray-600 text-gray-300 font-bold rounded-full px-2 py-2 cursor-pointer" />
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="w-[30px] h-[30px] text-[13px] bg-gray-600 text-gray-300 font-bold rounded-full px-2 py-2 cursor-pointer" />
        </div>
      </div>
      <div class="flex justify-center items-center gap-3">
        <font-awesome-icon icon="fa-solid fa-circle" v-for="j in counter.data_one.image_post" v-on:click="counter.image_show=j.id" :class="{'text-[#acdeaa]':counter.image_show==j.id,'text-gray-300':counter.image_show!=j.id}"  class="cursor-pointer  text-[11px]"/>
      </div>
      <a class="flex justify-center items-center w-full py-2 rounded bg-[#8fbbaf] font-semibold text-[18px]" :href="counter.data_one.Map" target="_blank">Chỉ đường</a>
    </div>
    <div class="flex flex-col w-full ">
      <h1 class="text-[35px] font-bold text-[#acdeaa]">{{ counter.data_one.Title }}</h1>
      <div v-html="legacySystemHTML" class="text-[#acdeaa]"></div>
    </div>
    <!-- {{ counter.data_one }} -->
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter';
import axios from 'axios';
import VueCookies from 'vue-cookies'


export default {
    data() {
    return {
        url_image: [],
        url_image_inset:[{ "id": 4, "Image_post": "", "post": 4 }],
        url_image_inset_one:'',
        legacySystemHTML: '',
    };
    },
    setup() {
        const counter = useCounterStore();
        return { counter }
    },
    mounted: function () {
        this.keep();
        this.keep1();
    },
    methods:{
      async keep() {
        this.counter.user_one = this.$route.params.Sites;
        await this.counter.F_keep();
        this.legacySystemHTML=this.counter.data_one.Body;
    },
    async keep1() {
        this.legacySystemHTML=this.counter.data_one.Body;
    },
    
    },
    components: {
    }
}
</script>

<style>
#slider3::-webkit-scrollbar {
  width: 6px;               /* Chiều rộng vùng chứa scrollbar */
}
#slider3::-webkit-scrollbar-track {
  background: #F3F4F6;        /* Màu nền ngoài của thanh scrollbar */
}
#slider3::-webkit-scrollbar-thumb {
  background-color: #dbdcdf;    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}


</style>