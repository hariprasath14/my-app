import Error from "../pages/error";
import Home from "../pages/home";
import Movies from "../pages/test/getInput";

const pageRoutes = [
    {path:"/",component:<Home/>},
    {path:"/movies",component:<Movies/>},
    {path:"*",component:<Error/>},
]
 
export default pageRoutes;