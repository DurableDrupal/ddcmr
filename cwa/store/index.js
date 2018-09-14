import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPageArticlesWhatWhy: []
    },
    mutations: {
      setPageArticlesWhatWhy(state, articles) {
        state.loadedPageArticlesWhatWhy = articles
      },
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        const theLoadedPageArticlesWhatWhy = await context.app.$axios.$get (context.env.API_HOST + "/api/articles/tag/what-why")
        vuexContext.commit("setPageArticlesWhatWhy", theLoadedPageArticlesWhatWhy)
      },
    }
  })
}

export default createStore
