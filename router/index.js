import { createRouter, createWebHistory } from 'vue-router'
import Home from '..src/components/Home.vue'

const router = createRouter({
    routes:[
        {
            path: '/home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/Supplier',
            component: Supplier
        },
        {
            path: '/SuppliersList',
            component: SuppliersList
        },
        {
            path: '/SuppliersMap',
            component: SuppliersMap
        },
        {
            path: '/Reseller',
            component: Supplier
        },
        {
            path: '/ResellersList',
            component: SuppliersList
        },
        {
            path: '/ResellersMap',
            component: SuppliersMap
        },
        {
            path: '/Customer',
            component: Supplier
        },
        {
            path: '/CustomersList',
            component: SuppliersList
        },
        {
            path: '/CustomersMap',
            component: SuppliersMap
        },
        {
            path: '/Order',
            component: Supplier
        },
        {
            path: '/OrdersList',
            component: SuppliersList
        }
    ],
    history: createWebHistory()
})

export default router 