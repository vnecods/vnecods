import { defineStore } from 'pinia';

import axios from 'axios';
import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import { useRoute } from 'vue-router';
const Route = useRoute();


export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      domain_Backend: 'http://127.0.0.1:8000', domain_Frontend: '', Path_Route: useRoute(),

      // Social///////////////////////
      khai_niem: 1, data_list: '', search: '', data_one: {
        "id": 2,
        "image_post": [
          {
            "id": 3,
            "Image_post": "/location/13422376_1793535440881898_5847850819310404880_o.jpg",
            "Post_link": 2
          },
          {
            "id": 4,
            "Image_post": "/location/aaaaa.png",
            "Post_link": 2
          }
        ],
        "Sites": "Hạ Long",
        "Location": "Quảng Ninh, Việt Nam",
        "Title": "Hạ Long đẹp quá",
        "Body": "<ul>\r\n\t<li>Chiều 22.5, với 468/469 đại biểu Quốc hội t&aacute;n th&agrave;nh (chiếm 94,74% tổng số đại biểu Quốc hội), Quốc hội đ&atilde; th&ocirc;ng qua Nghị quyết bầu &ocirc;ng L&ecirc; Quang Mạnh, B&iacute; thư Th&agrave;nh ủy Cần Thơ, giữ chức Ủy vi&ecirc;n Ủy ban Thường vụ Quốc hội, Chủ nhiệm&nbsp;<a href=\"https://thanhnien.vn/quoc-hoi-bau-chu-nhiem-uy-ban-tai-chinh-ngan-sach-thay-ong-nguyen-phu-cuong-185230519093026479.htm\" title=\"Ủy ban Tài chính - Ngân sách\">Ủy ban T&agrave;i ch&iacute;nh - Ng&acirc;n s&aacute;ch</a>&nbsp;Quốc hội, thay &ocirc;ng Nguyễn Ph&uacute; Cường.</li>\r\n\t<li>ththt</li>\r\n\t<li>tththth\r\n\t<ul>\r\n\t\t<li><em>ththth</em></li>\r\n\t\t<li><em>hththt</em></li>\r\n\t\t<li><em>ư</em></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "Map": "https://www.google.com/maps/place/Th%C3%A1c+Khe+V%E1%BA%B1n/@21.4865512,107.4801654,17z/data=!3m1!4b1!4m6!3m5!1s0x314b3aab3177f361:0xa368ed7593a9b367!8m2!3d21.4865512!4d107.4801654!16s%2Fg%2F11fn1t28_8?hl=vi"
      }, image_show: 0, user_one: '', legacySystemHTML: '', arrow: 0, vt: 0,
    }
  },

  getters: {
    // cookievalue: (state) => state.openthongtincanhan.token + "(Theta)" + state.openthongtincanhan.id,
  },

  actions: {
    async F_data_list() {
      this.data_list = await axios({ method: 'get', params: { search: this.search }, url: this.domain_Backend + '/post-data' });
      this.data_list = this.data_list.data;
    },
    async F_keep() {
      this.data_one = await axios({ method: 'get', params: { user_one: this.user_one }, url: this.domain_Backend + '/keep' });
      this.data_one = await this.data_one.data.Data;
      this.image_show = this.data_one.image_post[0].id;
    },
    async F_keep1(aa) {
      this.user_one = aa;
      this.data_one = await axios({ method: 'get', params: { user_one: this.user_one }, url: this.domain_Backend + '/keep' });
      this.data_one = await this.data_one.data.Data;
      this.image_show = this.data_one.image_post[0].id;
    },
  }
})


