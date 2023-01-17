import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Error from "../pages/error";
import Home from "../pages/home";
import Movies from "../pages/test/getInput";
import Tournament from "../pages/tournament";
import MiniMiltia from "../pages/tournament/minimiltia";

const pageRoutes = [
    { path: "/", component: <Home /> },
    // {path:"/movies",component:<Movies/>},
    { path: "/tournament", component: <Tournament /> },
    { path: "/tournament/minimiltia", component: <MiniMiltia /> },
    { path: "*", component: <Error /> },
]
export const authRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
]

export default pageRoutes;