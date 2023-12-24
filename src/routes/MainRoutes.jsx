import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import Sidebar from "../component/Sidebar";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Sidebar />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/courses',
                element: <Courses />
            },
        ]}
])

export default router;