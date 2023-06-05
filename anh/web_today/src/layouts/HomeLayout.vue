<template>
  <div class="flex flex-col relative  min-h-screen h-full min-w-screen w-full  items-center bg-[#6b7b8e]">
    <top-ter />
    <router-view  id="slider2"  />
  </div>
</template>
  

  <script>
  // Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
  import TopTer from '@/components/TopTer.vue'

  import { useCounterStore } from '@/stores/counter';

  
  // Để sử dụng được các thẻ (tag) của các component tương ứng
  // <nav-bar />     -> component NavBar
  // <side-bar />    -> component SideBar
  // <footer-bar />  -> component FooterBar
  // Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
  export default {
    setup() {
    const counter = useCounterStore();
    return {counter}
  },
  mounted: function () {
        // this.counter.keep_login();
    },
  methods:{
    },
    components: {
      TopTer,
    }
  }
  </script>
  
<style>
body::-webkit-scrollbar {
  width: 14px;               /* Chiều rộng vùng chứa scrollbar */
}
body::-webkit-scrollbar-track {
  background: #E5E7EB;        /* Màu nền ngoài của thanh scrollbar */
}
body::-webkit-scrollbar-thumb {
  background-color: #bcbcbc;    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}
body::-webkit-scrollbar-thumb:hover {
    background-color: #bcbcbc; /* Hiệu ứng di chuột đổi màu*/
}

#slider2::-webkit-scrollbar {
  width: 6px;               /* Chiều rộng vùng chứa scrollbar */
}
#slider2::-webkit-scrollbar-track {
  background: #F3F4F6;        /* Màu nền ngoài của thanh scrollbar */
}
#slider2::-webkit-scrollbar-thumb {
  background-color: v-bind(cvb);    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}
</style>
