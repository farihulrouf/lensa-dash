import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "../layouts/AppLayout.vue"; // Import the AppLayout component

const routes = [
  {
    path: "/",
    component: AppLayout, // Use AppLayout as the layout for all routes
    children: [
      {
        path: "/monitoring", // Define the path for the Monitoring page
        component: () => import("../views/Monitoring.vue"), // Import the Monitoring component
      },
      {
        path: "/data-master", // Define the path for the Monitoring page
        component: () => import("../views/Datamaster.vue"), // Import the Monitoring component
      },
      {
        path: "/penyedia", // Define the path for the Monitoring page
        component: () => import("../views/Penyedia.vue"), // Import the Monitoring component
      },
      {
        path: "/dashboard", // Define the path for the Monitoring page
        component: () => import("../views/Dashboard.vue"), // Import the Monitoring component
      },
      {
        path: "/laporan", // Define the path for the Monitoring page
        component: () => import("../views/Laporan.vue"), // Import the Monitoring component
      },
      {
        path: "/pengadaanlangsung", // Define the path for the Monitoring page
        component: () => import("../views/PengadaanLangsung.vue"), // Import the Monitoring component
      },
      {
        path: "/tender", // Define the path for the Monitoring page
        component: () => import("../views/Tender.vue"), // Import the Monitoring component
      },
      {
        path: "/pengadaan-seleksi", // Define the path for the Monitoring page
        component: () => import("../views/Seleksi.vue"), // Import the Monitoring component
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
