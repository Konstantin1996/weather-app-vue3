import { Path } from "@/interfaces/Path";

export const routes: Array<Path> = [
    {
        path: "/",
        name: "Home",
        component: () => import("./pages/home-page.vue"),
    },
    {
        path: "/location/:id",
        name: "LdpPage",
        component: () => import("./pages/location-details-page.vue"),
    },
];
