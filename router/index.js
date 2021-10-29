import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/Home.vue'
import Supplier from '../src/components/Suppliers/Supplier.vue'
import SuppliersList from '../src/components/Suppliers/SuppliersList.vue'
// import SuppliersMap from '../src/components/Suppliers/SuppliersMap.vue'
// import Reseller from '../src/components/Resellers/Resellers.vue'
// import ResellersList from '../src/components/Resellers/ResellersList.vue'
// import ResellersMap from '../src/components/Resellers/ResellersMap.vue'
// import Customer from '../src/components/Customers/Customers.vue'
// import CustomersList from '../src/components/Customers/CustomersList.vue'
// import CustomersMap from '../src/components/Customers/CustomersMap.vue'
// import Order from '../src/components/Orders/Orders.vue'
// import OrdersList from '../src/components/Orders/OrdersList.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/supplier',
        component: Supplier
    },
    {
        path: '/suppliers',
        component: SuppliersList
    }//,
    // {
    //     path: '/SuppliersMap',
    //     component: SuppliersMap
    // },
    // {
    //     path: '/Reseller',
    //     component: Reseller
    // },
    // {
    //     path: '/ResellersList',
    //     component: ResellersList
    // },
    // {
    //     path: '/ResellersMap',
    //     component: ResellersMap
    // },
    // {
    //     path: '/Customer',
    //     component: Customer
    // },
    // {
    //     path: '/CustomersList',
    //     component: CustomersList
    // },
    // {
    //     path: '/CustomersMap',
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