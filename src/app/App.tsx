import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PlanosPage } from "./pages/PlanosPage";
import { FaqPage } from "./pages/FaqPage";
import { InstalacaoPage } from "./pages/InstalacaoPage";
import { DevicePage } from "./pages/DevicePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TesteGratisPage } from "./pages/TesteGratisPage";
import { BlogPage } from "./pages/BlogPage";
import { ArticlePage } from "./pages/ArticlePage";
import { AppsPage } from "./pages/AppsPage";
import { AppGuidePage } from "./pages/AppGuidePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="planos" element={<PlanosPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="instalacao" element={<InstalacaoPage />} />
        <Route path="instalacao/:slug" element={<DevicePage />} />
        <Route path="teste-gratis" element={<TesteGratisPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<ArticlePage />} />
        <Route path="apps" element={<AppsPage />} />
        <Route path="apps/:slug" element={<AppGuidePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
