/**
 * @file entry
 * @author tim760255458(760255458@qq.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';
import moment from 'moment/min/moment-with-locales'

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';
import Vuetify from 'vuetify';
import { dealStringTime } from '../utils/dealTime'

Vue.use(Meta);

Vue.use(Vuetify);

Vue.filter('dealStringTime', dealStringTime);

Vue.prototype.$moment = moment;
Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
