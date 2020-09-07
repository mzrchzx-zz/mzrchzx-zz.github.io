/**
 * import and init global plugins
 */

import Vue from 'vue'

import globalEventBus from '../plugins/globalEventBus'
Vue.use(globalEventBus)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)