import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import "./App.css";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import PageLayout from "./layout/PageLayout";
import AuthenLayout from "./layout/AuthenLayout";
import SignIn from "./pages/SignIn/SignIn";
import Registration from "./pages/Registration/Registration";
import PostDetail from "./pages/PostDetail/PostDetail";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import translationEn from "./locales/en/translation.json";
import translationVn from "./locales/vn/translation.json";

import { defaultLanguageState } from "./recoil/atoms/recoils";

import HomeLoader from "./pages/Home/HomeLoader";


function App() {
  const defaultLanguage = useRecoilValue(defaultLanguageState);

  //SECTION - i18n setup session
  i18n.use(LanguageDetector).init({
    resources: {
      en: {
        translation: translationEn,
      },
      vn: {
        translation: translationVn,
      },
    },
    lng:defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
  //!SECTION

  //SECTION - routing session
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<Error />}>
        //ANCHOR - Page
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} loader={HomeLoader}/>
        </Route>
        //ANCHOR - Authen
        <Route path="/" element={<AuthenLayout />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="Registration" element={<Registration />} />
        </Route>
        //ANCHOR - PostDetail
        <Route path="/post/:id" element={<PageLayout />}>
          <Route index element={<PostDetail />}/>
        </Route>
        //ANCHOR - ProductDetail
        <Route path="/product/:id" element={<PageLayout />}>
          <Route index element={<ProductDetail />}/>
        </Route>
        //ANCHOR - Admin
        <Route path="/admin">
          <Route />
        </Route>
        //ANCHOR - Error
        <Route path="*" element={<Error />} />
      </Route>
    ),
    { basename: "" } //setup base name of router
    //!SECTION
  );
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} fallbackElement={<p>Loadings</p>} />
    </I18nextProvider>
  );
}

export default App;
