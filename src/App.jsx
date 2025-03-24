import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Navigation from "./components/Navigation/Navigation";
// import Loader from "./components/Loader/Loader";
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const CamperFeatures = lazy(() => import("./components/CamperFeatures/CamperFeatures.jsx"));
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews.jsx")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
             <Route path="features" element={<CamperFeatures />} />
             <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
