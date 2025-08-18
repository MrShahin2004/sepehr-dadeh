"use strict";

import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LogIn from "@/views/LogIn.vue";
import ContractDetail from "@/views/ContractDetail.vue";

const routes = [
    {path: "/", component: HomePage, name: "HomePage"},
    {path: "/login/", component: LogIn, name: "Login"},
    {path: "/contract/:id", component: ContractDetail, name: "ContractDetail", props: true},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
