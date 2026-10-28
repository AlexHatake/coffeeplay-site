import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PlanosPage } from "./pages/PlanosPage";
import { FaqPage } from "./pages/FaqPage";
import { InstalacaoPage } from "./pages/InstalacaoPage";
import { DevicePage } from "./pages/DevicePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="planos" element={<PlanosPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="instalacao" element={<InstalacaoPage />} />
        <Route path="instalacao/:slug" element={<DevicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
