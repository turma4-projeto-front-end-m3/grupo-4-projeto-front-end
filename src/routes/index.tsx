import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RecipePage } from "../pages/RecipePage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/registerPage" element={<RegisterPage />} />

      <Route path="/homePage" element={<HomePage />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/recipe" element={<RecipePage />} />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
