import { createBrowserRouter } from "react-router";
import Home from "../../pages/homePage/home";
import SignIn from "../../pages/signIn/signIn";
import ForgetPassword from "../../pages/forget-password/forgetPassword";
import ChangePassword from "../../pages/change-password/changePassword";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/forget-password",
        element: <ForgetPassword />
    },
    {
        path: "/change-password",
        element: <ChangePassword />
    }
])
