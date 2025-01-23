import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListing from "./components/JobsListing";
import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My Apppp</h1>} />)
);

const App = () => {
  // return <RouterProvider router={router} />
  return <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobsListing />
    <ViewAllJobs />
  </>;
};

export default App;
