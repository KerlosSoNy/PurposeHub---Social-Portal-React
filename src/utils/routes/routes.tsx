import { createBrowserRouter } from "react-router";
import Home from "../../pages/homePage/home";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/home",
        element: <Home />
    }
])
