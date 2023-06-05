<template>
    <div class="flex fixed z-50 top-0 justify-between h-[74px] w-full items-center px-5 py-3 bg-zinc-900">
        <div class="flex gap-4 items-center">
            <router-link to="/EU2ANBK" class="flex justify-center items-center relative">
                <img src="@/assets/llgg.png" class="w-[40px] h-[40px]"/>
                <h1 class="absolute font-bold text-[10px] top-[17px] my-auto text-gray-100">EU2</h1>
            </router-link>
            <router-link to="/EU2ANBK" class="font-bold text-[20px] text-gray-100">EU2ANBK</router-link>
        </div>
        <router-link to="/EU2ANBK" class="flex w-[300px] justify-center items-center gap-2 bg-gray-200 px-3 py-2 rounded-full">
            <input v-model="counter.search" placeholder="Tìm kiếm " @keyup.enter="counter.F_data_list();" class="outline-none bg-gray-200 grow"/>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_data_list();" class="cursor-pointer" />
        </router-link>
    </div>
</template>


<script >

    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'


    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    mounted: function () {
        // src="https://cse.google.com/cse.js?cx=55c97eef5881f4231"
    },
    }
</script>


