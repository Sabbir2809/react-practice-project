import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import gitHubInfoAPI from "./../pages/About/gitHubInfoAPI.js";

const router = createBrowserRouter(
  // [{
  //   path: "/",
  //   element: <Layout></Layout>,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home></Home>,
  //     },
  //     {
  //       path: "about",
  //       element: <About></About>,
  //     },
  //     {
  //       path: "contact",
  //       element: <Contact></Contact>,
  //     },
  //     {
  //       path: "/:typing",
  //       element: <Home></Home>,
  //     },
  //   ],
  // },]

  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" loader={gitHubInfoAPI} element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/:typing" element={<Home />} />
    </Route>
  )
);

export default router;
