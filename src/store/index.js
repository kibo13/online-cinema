import Vue from 'vue'
import Vuex from 'vuex'

import films from '@/store/modules/films'
import reactions from '@/store/modules/reactions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films,
    reactions
  }
})
