import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/JobDetails";
import AddJobs from "../pages/AddJobs";
import ApplicationPage from "../pages/ApplicationPage";
import MyApplication from "../pages/MyApplication";
import MyJobPost from "../pages/MyJobPost";
import ReviewApplication from "../pages/ReviewApplication";
import UpdateJob from "../pages/UpdateJob";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allJobs",
        Component: AllJobs,
      },
      {
        path: "/addJobs",
        Component: AddJobs,
      },
      {
        path: "/applicationPage",
        Component: ApplicationPage,
      },
      {
        path: "/myApplication",
        Component: MyApplication,
      },
      {
        path: "/myJobPost",
        Component: MyJobPost,
      },
      {
        path: "/reviewApplication",
        Component: ReviewApplication,
      },
      {
        path: "/updateJob",
        Component: UpdateJob,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        hydrateFallbackElement: <p>Loading...</p>,
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
