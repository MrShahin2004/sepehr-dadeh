"use strict";

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LogIn from "@/views/LogIn.vue";
import ContractDetail from "@/views/ContractDetail.vue";
import SearchPage from "@/views/SearchPage.vue";
import TransparencyPage from "@/views/TransparencyPage.vue";
import CarTable from "@/views/CarTable.vue";
import NewContract from "@/views/NewContract.vue";
import DashBoard from "@/views/DashBoard.vue";
import NewUser from "@/views/NewUser.vue";

const routes = [
    { path: "/", component: HomePage, name: "HomePage" },
    { path: "/login/", component: LogIn, name: "Login" },
    { path: "/contract/:id", component: ContractDetail, name: "ContractDetail", props: true },
    { path: "/search", component: SearchPage, name: "SearchPage", props: true },
    { path: "/transparency", component: TransparencyPage, name: "TransparencyPage" },
    { path: "/cartable", component: CarTable, name: "CarTable", props: true },
    { path: "/admin", component: DashBoard, name: "DashBoard" }, // NEW
    { path: "/new-contract", component: NewContract, name: "NewContract" },
    { path: "/admin/create/user", component: NewUser, name: "NewUser" },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
