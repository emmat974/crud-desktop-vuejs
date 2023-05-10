import { createStore } from "vuex";

// Création de store pour les data de résultat & d'utilisateur
const store = createStore({
    state: {
        searchResults: [],
        user: null
    },
    mutations: {
        setSearchResults(state, results) {
            state.searchResults = results
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        setSearchResults(context, results) {
            context.commit('setSearchResults', results)
        },
        setUser(context, user) {
            context.commit('setUser', user)
        }
    },
    getters: {
        searchResults(state) {
            return state.searchResults
        },
        getUser(state) {
            return state.user
        }
    }
})

export default store;