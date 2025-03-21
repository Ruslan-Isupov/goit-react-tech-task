import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));


const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
