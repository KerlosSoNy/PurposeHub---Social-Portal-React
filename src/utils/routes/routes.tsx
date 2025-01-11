import { createBrowserRouter } from "react-router";
import Home from "../../pages/homePage/home";
import SignIn from "../../pages/signIn/signIn";
import ForgetPassword from "../../pages/forget-password/forgetPassword";
import ChangePassword from "../../pages/change-password/changePassword";
import SignUp from "../../pages/signUp/signUp";
import YourProfile from "../../pages/yourProfile/yourProfile";
import Profile from "../../pages/profile/profile";
import Setting from "../../pages/setting/setting";
import PersonalInformation from "../../pages/setting/subpages/personalInformation/personalInformation";
import Experience from "../../pages/setting/subpages/experience/experience";
import AddExperience from "../../pages/setting/subpages/experience/add/addExperience";
import Certificates from "../../pages/setting/subpages/certificates/certificates";
import AddCertificates from "../../pages/setting/subpages/certificates/add/addCertificates";
import ContactUs from "../../pages/contactSupport/contactUs";
import Faqs from "../../pages/faq/faqs";


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
    },
    {
        path: "/contact-support",
        element: <ContactUs />
    },
    {
        path: "/faqs",
        element: <Faqs />
    },
    {
        path: "/settings",
        element: <Setting />,
        children: [
            {
                path: "",
                element: <PersonalInformation />
            },
            {
                path: "experiences",
                element: <Experience />
            }, {
                path: "experiences/:func/:id?",
                element: <AddExperience />
            }, {
                path: "certificates",
                element: <Certificates />
            },
            {
                path: "certificates/:func/:id?",
                element: <AddCertificates />
            }
        ]
    },
    {
        path: "/profile/:id?",
        element: <Profile />
    }
])
