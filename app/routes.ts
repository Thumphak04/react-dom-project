import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout("./layout/default.tsx", [
        index("routes/admin/index.tsx"),
        ...prefix("admin", [
            route("transactions", "routes/admin/transaction/page.tsx"),
        ])
    ]),
    route("login", "./auth/login.tsx"),
] satisfies RouteConfig;
