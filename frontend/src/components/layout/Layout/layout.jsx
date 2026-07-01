import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 140px)",
          paddingTop: "80px",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;