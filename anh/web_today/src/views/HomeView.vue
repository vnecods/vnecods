<template>
    <div class="flex flex-col w-full h-full grow ">
      <div class="flex relative h-[430px] w-full bg-[url('@/assets/caycoi.png')]">
        <div class="flex flex-col absolute z-30 h-[430px] w-full bg-black opacity-40 text-white">
        </div>
        <div class="flex flex-col justify-center items-center absolute z-40 h-[430px] w-full  text-white">
          <h1 class="font-bold text-[#acdeaa] text-[40px]">Xin Chào !</h1>
          <p class="font-medium text-[25px]">Bạn đã sẵn sàng trở thành một vị khách du lịch sinh thái chưa ?</p>
        </div>
      </div>
      <div class="flex flex-col w-full h-full grow bg-[#6b7b8e]  items-center">
        <div class="flex flex-col items-center  max-w-[1200px] min-w-[1200px]  py-5">
          <div class="flex flex-col w-full gap-3">
            <div class="flex justify-between w-full border-b-[1px] border-gray-600 py-1">
              <h1 class="text-[#acdeaa] font-bold text-[25px]">Du lịch sinh thái là gì ?</h1>
              <svg v-show="counter.khai_niem==2" v-on:click="counter.khai_niem=1" class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" focusable="false" ><path d="M18.59 16.41L20 15l-8-8-8 8 1.41 1.41L12 9.83"></path></svg>
              <svg v-show="counter.khai_niem==1" v-on:click="counter.khai_niem=2" class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" focusable="false" ><path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path></svg>
            </div>
            <p v-show="counter.khai_niem==2" class="text-[#acdeaa] font-medium text-[18px] pb-5 text-justify ">Du lịch sinh thái là loại hình du lịch dựa vào thiên nhiên và văn hoá bản địa gắn với giáo dục môi trường, có đóng góp cho nỗ lực bảo tồn và phát triển bền vững với sự tham gia tích cực của cộng đồng địa phương. (Nguồn: Wikipedia)</p>
          </div>
          <h1 class="flex justify-center text-[23px] font-semibold py-5 border-t-[1px] border-gray-100 w-full text-gray-100">Nào, mình cùng khám phá một số địa điểm du lịch sinh thái nổi tiếng của Việt Nam nhé!</h1>
          <div class="grid grid-cols-2 gap-5 ">
            <div v-for="i in counter.data_list" class="flex flex-col  justify-center items-center ">
              <router-link :to="'/EU2ANBK/Profile/'+i.Sites" v-on:click="this.F_keep1(i.Sites);"><img :src="i.image_post[0].Image_post" class="w-[600px] h-[337px]" /></router-link>
              <h1 class="text-[#acdeaa] font-semibold text-[20px] mt-5">{{ i.Sites }}</h1>
              <p class="text-[#c4eac3] font-medium text-[18px]">{{ i.Location }}</p>
            </div>
          </div>
          <!-- <h1>{{ counter.data_list }}</h1> -->
          <div class="flex justify-center mt-5 w-full text-gray-100 font-bold text-[20px]">EU2ANBK</div>
        </div>
      </div>
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
    };
    },
    setup() {
        const counter = useCounterStore();
        return { counter }
    },
    mounted: function () {
      this.counter.F_data_list();
    },
    methods:{
    },
    components: {
    }
}
</script>

<style>
#cjss::-webkit-scrollbar {
  width: 5px;
  height: 8px;               /* Chiều rộng vùng chứa scrollbar */
}
#cjss::-webkit-scrollbar-track {
  background: #393636;        /* Màu nền ngoài của thanh scrollbar */
}
#cjss::-webkit-scrollbar-thumb {
  background-color: #595857;    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}
#cjss::-webkit-scrollbar-thumb:hover {
    background-color: #655f58; /* Hiệu ứng di chuột đổi màu*/
}

#cjss1::-webkit-scrollbar {
  width: 5px;
  height: 8px;               /* Chiều rộng vùng chứa scrollbar */
}
#cjss1::-webkit-scrollbar-track {
  background: #393636;        /* Màu nền ngoài của thanh scrollbar */
}
#cjss1::-webkit-scrollbar-thumb {
  background-color: #595857;    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}
#cjss1::-webkit-scrollbar-thumb:hover {
    background-color: #655f58; /* Hiệu ứng di chuột đổi màu*/
}

#video
{
    transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg); /* Safari and Chrome */
    -moz-transform:rotateY(180deg); /* Firefox */
}
</style>


