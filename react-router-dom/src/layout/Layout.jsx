import { Outlet } from "react-router-dom";
import Footer from "../pages/Common/Footer";
import Header from "../pages/Common/Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
