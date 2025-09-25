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
import EditContractText from "@/views/EditContractText.vue";
import AllContracts from "@/views/AllContracts.vue";
import MovableProperties from "@/views/MovableProperties.vue";
import ImmovableProperties from "@/views/ImmovableProperties.vue";
import RentalProperties from "@/views/RentalProperties.vue";

const routes = [
    { path: "/", component: HomePage, name: "HomePage" },
    { path: "/login/", component: LogIn, name: "Login" },
    { path: "/contract/:id", component: ContractDetail, name: "ContractDetail", props: true },
    { path: "/search", component: SearchPage, name: "SearchPage", props: true },
    { path: "/transparency", component: TransparencyPage, name: "TransparencyPage" },
    { path: "/cartable", component: CarTable, name: "CarTable", props: true },
    { path: "/admin", component: DashBoard, name: "DashBoard", props: true }, // NEW
    { path: "/admin/edit/contract/template", component: EditContractText, name: "EditContractText", props: true },
    { path: "/new-contract", component: NewContract, name: "NewContract", props: true },
    { path: "/admin/create/user", component: NewUser, name: "NewUser", props: true },
    { path: "/cartable/all", component: AllContracts, name: "AllContracts", props: true },
    { path: "/cartable/movable", component: MovableProperties, name: "MovableProperties", props: true },
    { path: "/cartable/immovable", component: ImmovableProperties, name: "ImmovableProperties", props: true },
    { path: "/cartable/rental", component: RentalProperties, name: "RentalProperties", props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
