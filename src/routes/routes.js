import Home from "../pages/Home";
import Launch from "../pages/Launch";
import Result from "../pages/Result";

export const routes = [
    {
        path: '/launch',
        component: Launch,
        permission: "anyallow"
    },
    {
        path: '/home',
        component: Home,
        permission: "anyallow"
    },
    {
        path: '/result',
        component: Result,
        permission: "anyallow"
    }
]