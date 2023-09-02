import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div>
      <h1>PageLayout</h1>
      <Outlet />
    </div>
  );
}

export default PageLayout;
