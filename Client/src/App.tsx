import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import PageLayout from "./layout/PageLayout";
import AuthenLayout from "./layout/AuthenLayout";
import SignIn from "./pages/SignIn/SignIn";
import Registration from "./pages/Registration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        //ANCHOR - Page
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
        //ANCHOR - Authen
        <Route path="/" element={<AuthenLayout />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="Registration" element={<Registration />} />
        </Route>
        //ANCHOR - Error
        <Route path="*" element={<Error />} />
      </Route>
    ),
    { basename: "" } //setup base name of router
  );
  return <RouterProvider router={router} fallbackElement={<p>Loadings</p>} />;
}

export default App;
