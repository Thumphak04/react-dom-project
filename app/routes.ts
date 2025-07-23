import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
     
    route("login","routes/auth/login.tsx"),
    layout("./layout/default.tsx", [
        index("routes/admin/index.tsx"),
        ...prefix("admin", [
            route("transactions", "routes/admin/transaction/page.tsx"),
        ])
    ]),
    
] satisfies RouteConfig;
