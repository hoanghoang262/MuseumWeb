import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function PageLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default PageLayout;
