import { Navigate } from "react-router-dom";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Error from "../pages/error";
import Home from "../pages/home";
import Movies from "../pages/test/getInput";
import Tournament from "../pages/tournament";
import MiniMiltia from "../pages/tournament/minimiltia";

const pageRoutes = [
    { path: "/", component: <Navigate to="/tournament" /> },
    // {path:"/movies",component:<Movies/>},
    { path: "/tournament", component: <Tournament /> },
    { path: "/tournament/minimiltia", component: <MiniMiltia /> },
    { path: "*", component: <Error /> },
]
export const authRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
]
export const commonRoutes = [
    { path: "/profile", component: <Home /> },
]

export default pageRoutes;