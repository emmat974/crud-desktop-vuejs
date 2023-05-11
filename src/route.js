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
        component: Home,
        meta: { title: 'Accueil' }
    },
    {
        path: '/adherent',
        name: 'Adherent',
        meta: { title: 'Adhérents' },
        component: Adherent
    },
    {
        path: '/adherent/:id',
        name: 'DetailAdherent',
        meta: { title: 'Fiche d\'adhérent' },
        component: DetailAdherent,
        props: true
    },
    {
        path: '/adherent/add',
        name: 'AddAdherent',
        meta: { title: 'Nouveau adhérent' },
        component: NewAdherent
    },
    {
        path: '/search',
        name: 'Search',
        meta: { title: 'Recherche' },
        component: Search
    }
];

export default routes;