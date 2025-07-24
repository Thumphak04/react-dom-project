import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
     
    route("login","routes/auth/login.tsx"),
    layout("./layout/default.tsx", [
        index("routes/admin/index.tsx"),
        ...prefix("admin", [
            route("transactions", "routes/admin/transaction/page.tsx"),
            route("onboarding/add","routes/admin/autodebitRegistrity/addnew.tsx"),
            route("onboarding/add-bulk","routes/admin/autodebitRegistrity/bulkUpload.tsx"),
            route("onboarding/data","routes/admin/autodebitRegistrity/history.tsx"),
            route("user-management/add","routes/admin/user/adduser.tsx"),
        ])
    ]),
    
] satisfies RouteConfig;
