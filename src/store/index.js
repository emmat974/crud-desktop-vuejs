import { createStore } from "vuex";

// Création de store pour les data de la base de données
const store = createStore({
    state: {
        searchResults: [],
        user: null,
        adherents: []
    },
    mutations: {
        setSearchResults(state, results) {
            state.searchResults = results
        },
        setUser(state, user) {
            state.user = user
        },
        setAdherents(state, adherents) {
            state.adherents = adherents;
        },
        addAdherent(state, adherent) {
            state.adherents.unshift(adherent)
        },
        updateAdherent(state, adherent) {
            const index = state.adherents.findIndex(a => a.id === adherent.id)

            if (index !== -1) {
                state.adherents.splice(index, 1, adherent)
            }
        },
        deleteAdherent(state, adherentId) {
            const index = state.adherents.findIndex((adherent) => adherent.id === adherentId);
            if (index !== -1) {
                state.adherents.splice(index, 1);
            }
        },
    },
    actions: {
        setSearchResults(context, results) {
            context.commit('setSearchResults', results)
        },
        setUser(context, user) {
            context.commit('setUser', user)
        },
        setAdherents(context, adherents) {
            context.commit('setAdherents', adherents)
        },
        addAdherent(context, adherent) {
            context.commit('addAdherent', adherent)
        },
        updateAdherent(context, adherent) {
            context.commit('updateAdherent', adherent)
        },
        deleteAdherent(context, adherentId) {
            context.commit('deleteAdherent', adherentId)
        }
    },
    getters: {
        searchResults(state) {
            return state.searchResults
        },
        getUser(state) {
            return state.user
        },
        getAdherents(state) {
            return state.adherents
        }
    }
})

export default store;