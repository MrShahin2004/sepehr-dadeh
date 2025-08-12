"use strict";

import HomePage from "@/components/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: "/", component: HomePage, name: "HomePage"}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
