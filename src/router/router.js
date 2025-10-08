"use strict";

import {createRouter, createWebHistory} from "vue-router";

// existing views
import HomePage from "@/views/HomePage.vue";
import ContractsReport from "@/views/ContractsReport.vue";
import LogIn from "@/views/LogIn.vue";
import ContractDetail from "@/views/ContractDetail.vue";
import SearchPage from "@/views/SearchPage.vue";
import TransparencyPage from "@/views/TransparencyPage.vue";
import CarTable from "@/views/CarTable.vue";
import DashBoard from "@/views/DashBoard.vue";
import EditContractText from "@/views/EditContractText.vue";
import NewUser from "@/views/NewUser.vue";
import PishFarakhan from "@/views/pishfarakhan/PishFarakhan.vue";
import AllContracts from "@/views/AllContracts.vue";
import MovableProperties from "@/views/MovableProperties.vue";
import ImmovableProperties from "@/views/ImmovableProperties.vue";
import RentalProperties from "@/views/RentalProperties.vue";

const routes = [
    {path: "/", component: HomePage, name: "HomePage"},
    {path: "/reports", component: ContractsReport, name: "ContractsReport", props: true},
    {path: "/login", component: LogIn, name: "Login"},
    {path: "/contract/:id", component: ContractDetail, name: "ContractDetail", props: true},
    {path: "/search", component: SearchPage, name: "SearchPage", props: true},
    {path: "/transparency", component: TransparencyPage, name: "TransparencyPage"},
    {path: "/cartable", component: CarTable, name: "CarTable", props: true},
    {path: "/admin", component: DashBoard, name: "DashBoard", props: true},
    {path: "/admin/edit/contract/template", component: EditContractText, name: "EditContractText", props: true},
    {path: "/admin/create/user", component: NewUser, name: "NewUser", props: true},
    {path: "/cartable/all", component: AllContracts, name: "AllContracts", props: true},
    {path: "/cartable/movable", component: MovableProperties, name: "MovableProperties", props: true},
    {path: "/cartable/immovable", component: ImmovableProperties, name: "ImmovableProperties", props: true},
    {path: "/cartable/rental", component: RentalProperties, name: "RentalProperties", props: true},

    // New Contract (source page)
    {path: "/pishfarakhan", component: PishFarakhan, name: "PishFarakhan"},
    {
        path: '/pishfarakhan/step-:step(\\d+)/:id',
        name: 'PishfarakhanStep',
        component: () => import('@/views/pishfarakhan/PishfarakhanStepLoader.vue'),
        props: true,
    },
    {
        path: '/pishfarakhan/step-8-edit/:id',
        name: 'PishfarakhanStep8Edit',
        component: () => import('@/views/pishfarakhan/Pishfarakhan-step-8-edit.vue'),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
