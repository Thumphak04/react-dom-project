import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login","./auth/login.tsx"),
    route("dashboard", "./admin/dashboard.tsx")
] satisfies RouteConfig;
