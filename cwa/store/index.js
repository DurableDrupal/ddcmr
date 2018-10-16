import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPageArticlesWhatWhy: [],
      loadedPageArticlesCaseStudies: [],
      loadedCaseStudies: [],
      loadedPageArticlesBooks: [],
      loadedBooks: []
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
      },
      setPageArticlesBooks(state, articles) {
        state.loadedPageArticlesBooks = articles
      },
      setBooks(state, books) {
        state.loadedBooks = books
      },
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        const theLoadedPageArticlesWhatWhy = await context.app.$axios.$get (context.env.API_HOST + "/api/articles/tag/what-why")
        vuexContext.commit("setPageArticlesWhatWhy", theLoadedPageArticlesWhatWhy)
        const theLoadedPageArticlesCaseStudies = await context.app.$axios.$get (context.env.API_HOST + "/api/articles/tag/case-studies")
        vuexContext.commit("setPageArticlesCaseStudies", theLoadedPageArticlesCaseStudies)
        const theLoadedCaseStudies = await context.app.$axios.$get (context.env.API_HOST + "/api/case-studies?select=-articles")
        vuexContext.commit("setCaseStudies", theLoadedCaseStudies)
        const theLoadedPageArticlesBooks = await context.app.$axios.$get (context.env.API_HOST + "/api/articles/tag/books")
        vuexContext.commit("setPageArticlesBooks", theLoadedPageArticlesBooks)
        const theLoadedBooks = await context.app.$axios.$get (context.env.API_HOST + "/api/books?select=-articles")
        vuexContext.commit("setBooks", theLoadedBooks)
      },
    }
  })
}

export default createStore
