import { library } from "@fortawesome/fontawesome-svg-core";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

import {
  faCircle,
  faShoppingCart,
  faLaptop,
  faLock,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
library.add(faCircle, faShoppingCart, faLaptop, faLock, faEnvelope, faPhone);

Vue.use(Vuetify);

export default new Vuetify({});
