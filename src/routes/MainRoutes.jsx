import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import Sidebar from "../component/Sidebar";
import CreateCourse from "../Pages/CreateCourse";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminRoutes from "./AdminRoutes";
import CourseDetails from "../Pages/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "/createCourses",
        element: (
          <AdminRoutes>
            <CreateCourse />{" "}
          </AdminRoutes>
        ),
      },
      {
        path: "/signIn",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
