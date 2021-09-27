/* Navegation */
const Home = () => import ('./components/Home.vue');
const Contact = () => import ('./components/Contact.vue');

/* Components */
const EditProduct = () => import ('./components/products/EditProduct.vue');
const IndexProduct = () => import ('./components/products/Index.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'indexProduct',
        path: '/products',
        component: IndexProduct
    },
    {
        name: 'editProduct',
        path: '/edit/:id',
        component: EditProduct
    }
];