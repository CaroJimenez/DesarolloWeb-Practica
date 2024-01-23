import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)

const routes =[
    //ruta base
{
    path:'/',
    redirect: '/inicio'
},
{
    path: '/',
    component:{
        render(c){
            return c('router-view');
        },
    },
    children:[
        {
            path:'/inicio',
            name: 'inicio',
            component: () => import('../components/Inicio.vue')
        },
        
    ]
},{
    path: '/home',
    name: 'home',
    component: ()=>import ('../components/Home.vue')
},
{
    path: '/profile',
    name: 'profile',
    component: ()=>import ('../components/Profile.vue')
},
{
    path:'/books',
    name: 'books',
    component: ()=>import('../components/Books.vue')
},{
    path: '/tiendaJuguetes',
    name: 'tiendaJuguetes',
    component: ()=>import ('../components/juguetes/TiendaJuguetes.vue')
},
{
    path: '/electronicos',
    name: 'electronicos',
    component: ()=>import ('../components/juguetes/electronicos.vue')
},
{
    path: '/videojuegos',
    name: 'videojuegos',
    component: ()=>import ('../components/juguetes/videojuegos.vue')
},{
    path: '/electrodomesticos',
    name: 'electrodomesticos',
    component: ()=>import ('../components/electrodomesticos/Electrodomesticos.vue')
},{
    path: '/cocina',
    name: 'cocina',
    component: ()=>import ('../components/electrodomesticos/Cocina.vue')
},{
    path: '/estufas',
    name: 'estufas',
    component: ()=>import ('../components/electrodomesticos/Estufas.vue')
},
{
    path: '/hogar',
    name: 'hogar',
    component: ()=>import ('../components/hogar/Hogar.vue')
},{
    path: '/industriales',
    name: 'industriales',
    component: ()=>import ('../components/hogar/Industriales.vue')
},{
    path: '/limpieza',
    name: 'limpieza',
    component: ()=>import ('../components/hogar/Limpieza.vue')
},{
    path:'*',
    component:()=> import('../views/ErrorPages/Error404.vue')
},
{
    path: '/formulario',
    name:'formulario',
    component: () => import('../components/Formulario.vue')
}
]
const router = new VueRouter({routes,})
export default router;