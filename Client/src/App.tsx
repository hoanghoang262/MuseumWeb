import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useRecoilValue } from "recoil";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import PageLayout from "./layout/PageLayout";
import AuthenLayout from "./layout/AuthenLayout";
import SignIn from "./pages/SignIn/SignIn";
import Registration from "./pages/Registration/Registration";
import PostDetail from "./pages/PostDetail/PostDetail";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Artifacts from "./pages/Artifacts/Artifacts";
import News from "./pages/News/News";

import translationEn from "./locales/en/translation.json";
import translationVn from "./locales/vn/translation.json";

import { defaultLanguageState, accountAtom } from "./recoil/atoms/recoils";

import HomeLoader from "./pages/Home/HomeLoader";
import ArtifactsLoader from "./pages/Artifacts/ArtifactsLoader";
import NewsLoader from "./pages/News/NewLoader";
import SignInAction from "./pages/SignIn/SignInAction";
import NewsWithCategory from "./pages/News/NewsWithCategory";
import ArtifactsWithTag from "./pages/Artifacts/ArtifactsWithTag";
import Search from "./pages/Search/Search";
import ArtifactsManagement from "./pages/Admin/ArtifactsManagement/ArtifactsManagement";
import ArtifactsManagementLoader from "./pages/Admin/ArtifactsManagement/ArtifactsManagementLoader";
import NewsManagement from "./pages/Admin/NewsManagement/NewsManagement";
import NewManagementLoader from "./pages/Admin/NewsManagement/NewsManagementLoader";
import CreateArtifact from "./pages/Admin/CreateArtifact/CreateArtifact";
import CreateArtifactAction from "./pages/Admin/CreateArtifact/CreateArtifactAction";
import CreateArtifactLoader from "./pages/Admin/CreateArtifact/CreateArtifactLoader";
import UpdateArtifact from "./pages/Admin/UpdateArtifact/UpdateArtifact";
import UpdateArtifactAction from "./pages/Admin/UpdateArtifact/UpdateArtifactAction";
import ArtifactsManagementAction from "./pages/Admin/ArtifactsManagement/ArtifactsManagementAction";
import CreateNews from "./pages/Admin/CreateNews/CreateNews";
import CreateNewsAction from "./pages/Admin/CreateNews/CreateNewsAction";
import CreateNewsLoader from "./pages/Admin/CreateNews/CreateNewsLoader";
import UpdateNews from "./pages/Admin/UpdateNews/UpdateNews";
import UpdateNewsAction from "./pages/Admin/UpdateNews/UpdateNewsAction";
import NewsManagementAction from "./pages/Admin/NewsManagement/NewsManagementAction";
import PostDetailAction from "./pages/PostDetail/PostDetailAction";
import Favorites from "./pages/Favorites/Favorites";

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
    lng: defaultLanguage,
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
          <Route index element={<Home />} loader={HomeLoader} />
          <Route path="Favorite" element={<Favorites />} />
        </Route>
        //ANCHOR - Authen
        <Route path="/" element={<AuthenLayout />}>
          <Route path="signIn" element={<SignIn />} action={SignInAction} />
          <Route path="Registration" element={<Registration />} />
        </Route>
        //ANCHOR - Artifacts
        <Route path="/product" element={<PageLayout />}>
          <Route index element={<Artifacts />} loader={ArtifactsLoader} />
          <Route path="tags/:id" element={<ArtifactsWithTag />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        //ANCHOR - News
        <Route path="/post" element={<PageLayout />}>
          <Route index element={<News />} loader={NewsLoader} />
          <Route path="categories/:id" element={<NewsWithCategory />} />
          <Route path=":id" element={<PostDetail />} action={PostDetailAction}/>
        </Route>
        //ANCHOR - Search
        <Route path="/search" element={<PageLayout />}>
          <Route index element={<Search />} />
        </Route>
        //ANCHOR - Admin admin/ArtifactsManagement/CreateArtifact
        <Route path="/admin" element={<PageLayout />}>
          <Route
            path="ArtifactsManagement"
            element={<ArtifactsManagement />}
            loader={ArtifactsManagementLoader}
            action={ArtifactsManagementAction}
          />
          <Route
            path="CreateArtifact"
            element={<CreateArtifact />}
            action={CreateArtifactAction}
            loader={CreateArtifactLoader}
          />

          <Route
            path="UpdateArtifact/:id"
            element={<UpdateArtifact />}
            action={UpdateArtifactAction}
            loader={CreateArtifactLoader}
          />

          <Route
            path="NewsManagement"
            element={<NewsManagement />}
            loader={NewManagementLoader}
            action={NewsManagementAction}
          />

          <Route
            path="CreateNews"
            element={<CreateNews />}
            action={CreateNewsAction}
            loader={CreateNewsLoader}
          />

          <Route
            path="UpdateNews/:id"
            element={<UpdateNews />}
            action={UpdateNewsAction}
            loader={CreateNewsLoader}
          />
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
      <ToastContainer />
    </I18nextProvider>
  );
}

export default App;
