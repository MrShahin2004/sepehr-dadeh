"use strict";

import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LogIn from "@/views/LogIn.vue";

const routes = [
    {path: "/", component: HomePage, name: "HomePage"},
    {path: "/login/", component: LogIn, name: "Login"},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
