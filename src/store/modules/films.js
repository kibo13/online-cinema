import films from '@/mocks/films'

const getFilms = time => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(films)
    }, time)
  })
}

const state = {
  data: []
}

const mutations = {
  SET_FILMS(state, payload) {
    state.data = payload
  }
}

const actions = {
  async getFilms(context, payload) {
    try {
      const films = await getFilms(payload)
      context.commit('SET_FILMS', films)
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
