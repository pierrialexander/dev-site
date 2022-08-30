import Vue from 'vue';
import VueRouter from 'vue-router';

// Dizemos ao Vue usar o Router
Vue.use(VueRouter);

// IMPORTAÇÃO DOS COMPONENTES
import Home from '@/pages/Home';
import VideosSite from '@/pages/Videos';
import ContatoSite from '@/pages/Contato';
import SobreSite from '@/pages/Sobre';


// dizemos qual componente correponde a qual rota
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/video',
        component: VideosSite
    },
    {
        path: '/contato',
        component: ContatoSite
    },
    {
        path: '/sobre',
        component: SobreSite
    }
];

// CRIAMOS O ROUTER PROPRIAMENTE.
// INSTANCIAMOS O ROUTER E APONTAMOS QUAL A CONSTANTE COM AS ROTAS DEFINIDAS
const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;