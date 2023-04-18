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
        name: 'Home',
        component: Home,
    },
    {
        path: '/adherent',
        name: 'Adherent',
        component: Adherent
    },
    {
        path: '/adherent/:id',
        name: 'DetailAdherent',
        component: DetailAdherent,
        props: true
    },
    {
        path: '/adherent/add',
        name: 'AddAdherent',
        component: NewAdherent
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion
    },
    {
        path: '/search/:nom',
        name: 'Search',
        component: Search,
        props: true
    }
];

export default routes;