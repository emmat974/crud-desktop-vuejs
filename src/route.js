import Home from './pages/PageHome';
import Adherent from './pages/PageAdherent';
import Connexion from './pages/PageConnexion';
import Search from './pages/PageSearch';
import DetailAdherent from './components/adherents/DetailAdherent'
import NewAdherent from './components/adherents/NewAdherent'

// On défini les routes
const routes = [
    {
        path: '/',
        name: 'Connexion',
        component: Connexion
    },
    {
        path: '/home',
        name: 'Home',
        title: 'Accueil',
        component: Home,
    },
    {
        path: '/adherent',
        name: 'Adherent',
        title: 'Adhérents',
        component: Adherent
    },
    {
        path: '/adherent/:id',
        name: 'DetailAdherent',
        title: 'Fiche d\'adhérent',
        component: DetailAdherent,
        props: true
    },
    {
        path: '/adherent/add',
        name: 'AddAdherent',
        title: 'Nouveau adhérent',
        component: NewAdherent
    },
    {
        path: '/search',
        name: 'Search',
        title: 'Recherche',
        component: Search
    }
];

export default routes;