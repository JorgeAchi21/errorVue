/* Navegacion */
const Home = () => import ('./components/Home.vue');
const Contact = () => import ('./components/Contact.vue');

//http://192.168.1.12/prue06vue/public/  ruta fija para pruebas
//asset: = http://192.168.1.12/prue06vue/public
/* Components */
const EditProduct = () => import ('./components/products/EditProduct.vue');
const IndexProduct = () => import ('./components/products/Index.vue');

export const routes = [
    {
        name: 'home',
        path: '/home',
        //path: 'http://192.168.1.12/prue06vue/public/index.php/',
        //path: '/',
        component: Home
    },
    {
        name: 'contact',    
        path: '/contact',
        //path: 'http://192.168.1.12/prue06vue/public/index.php/contact',
        //path: '/contact',
        component: Contact
 
    },
    {
        name: 'indexProduct',
        path: '/products',
        // path: 'http://192.168.1.12/prue06vue/public/index.php/products',
        //path: '/products',
        component: IndexProduct
    },
    {
        name: 'editProduct',
        path: '/edit/:id',
        //path: 'http://192.168.1.12/prue06vue/public/edit/:id',
        //path: '/edit/:id',
        component: EditProduct
    }
];