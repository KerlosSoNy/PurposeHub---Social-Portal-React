import { createBrowserRouter } from "react-router";
import Home from "../../pages/homePage/home";
import SignIn from "../../pages/signIn/signIn";
import ForgetPassword from "../../pages/forget-password/forgetPassword";
import ChangePassword from "../../pages/change-password/changePassword";
import SignUp from "../../pages/signUp/signUp";
import YourProfile from "../../pages/yourProfile/yourProfile";


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
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/complete-profile",
        element: <YourProfile />
    }
])
