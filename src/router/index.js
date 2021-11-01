import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
// import Supplier from '../components/Suppliers/Supplier.vue'
import SuppliersList from '../components/Suppliers/SuppliersList.vue'
import SuppliersMap from '../components/Suppliers/SuppliersMap.vue'
// import Reseller from '../components/Resellers/Resellers.vue'
// import ResellersList from '../components/Resellers/ResellersList.vue'
// import ResellersMap from '../components/Resellers/ResellersMap.vue'
// import Customer from '../components/Customers/Customers.vue'
// import CustomersList from '../components/Customers/CustomersList.vue'
// import CustomersMap from '../components/Customers/CustomersMap.vue'
// import Order from '../components/Orders/Orders.vue'
// import OrdersList from '../components/Orders/OrdersList.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        redirect: '/home'
    },
    // {
    //     path: '/supplier',
    //     component: Supplier
    // },
    {
        path: '/suppliers',
        component: SuppliersList
    },
    {
        path: '/suppliers-map',
        component: SuppliersMap
    }// ,
    // {
    //     path: '/Reseller',
    //     component: Reseller
    // },
    // {
    //     path: '/resellers',
    //     component: ResellersList
    // },
    // {
    //     path: '/resellers-map',
    //     component: ResellersMap
    // },
    // {
    //     path: '/customer',
    //     component: Customer
    // },
    // {
    //     path: '/customers',
    //     component: CustomersList
    // },
    // {
    //     path: '/customers-map',
    //     component: CustomersMap
    // },
    // {
    //     path: '/Order',
    //     component: Order
    // },
    // {
    //     path: '/OrdersList',
    //     component: OrdersList
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 