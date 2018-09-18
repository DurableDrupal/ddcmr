import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPageArticlesWhatWhy: [],
      loadedPageArticlesCaseStudies: [],
      loadedCaseStudies: [],
    },
    mutations: {
      setPageArticlesWhatWhy(state, articles) {
        state.loadedPageArticlesWhatWhy = articles
      },
      setPageArticlesCaseStudies(state, articles) {
        state.loadedPageArticlesCaseStudies = articles
      },
      setCaseStudies(state, articles) {
        state.loadedCaseStudies = articles
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        const theLoadedPageArticlesWhatWhy = await context.app.$axios.$get (context.env.API_HOST + "/api/articles/tag/what-why")
        vuexContext.commit("setPageArticlesWhatWhy", theLoadedPageArticlesWhatWhy)
        const theLoadedPageArticlesCaseStudies = await context.app.$axios.$get (context.env.API_HOST + "/api/articles/tag/case-studies")
        vuexContext.commit("setPageArticlesCaseStudies", theLoadedPageArticlesCaseStudies)
        const theLoadedCaseStudies = await context.app.$axios.$get (context.env.API_HOST + "/api/case-studies?select=-articles")
        vuexContext.commit("setCaseStudies", theLoadedCaseStudies)
      },
    }
  })
}

export default createStore
