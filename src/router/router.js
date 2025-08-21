"use strict";

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LogIn from "@/views/LogIn.vue";
import ContractDetail from "@/views/ContractDetail.vue";
import SearchPage from "@/views/SearchPage.vue";
import TransparencyPage from "@/views/TransparencyPage.vue";
import AdminPanel from "@/views/AdminPanel.vue";
import NewContract from "@/views/NewContract.vue";

const routes = [
    { path: "/", component: HomePage, name: "HomePage" },
    { path: "/login/", component: LogIn, name: "Login" },
    { path: "/contract/:id", component: ContractDetail, name: "ContractDetail", props: true },
    { path: "/search", component: SearchPage, name: "SearchPage", props: true },
    { path: "/transparency", component: TransparencyPage, name: "TransparencyPage" },
    { path: "/admin", component: AdminPanel, name: "AdminPanel", props: true },
    { path: "/new-contract", component: NewContract, name: "NewContract" },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
