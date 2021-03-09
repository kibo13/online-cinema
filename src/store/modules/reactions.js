import reactions from '@/mocks/reactions'

const getReactions = time => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reactions)
    }, time)
  })
}

const state = {
  data: []
}

const mutations = {
  SET_REACTIONS(state, payload) {
    state.data = payload
  }
}

const actions = {
  async getReactions(context, payload) {
    try {
      const reactions = await getReactions(payload)
      context.commit('SET_REACTIONS', reactions)
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
