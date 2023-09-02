import { Outlet } from "react-router-dom";

function AuthenLayout() {
  return (
    <div>
      <h1>AuthenLayout</h1>
      <Outlet />
    </div>
  );
}

export default AuthenLayout;
