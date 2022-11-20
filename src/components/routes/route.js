import Error from "../pages/error";
import Home from "../pages/home";
import Movies from "../pages/test/getInput";
import Tournament from "../pages/tournament";

const pageRoutes = [
    {path:"/",component:<Home/>},
    // {path:"/movies",component:<Movies/>},
    {path:"/tournament",component:<Tournament/>},
    {path:"*",component:<Error/>},
]
 
export default pageRoutes;