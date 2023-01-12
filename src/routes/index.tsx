import { Routes, Route, Outlet } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { HomePage } from "../pages/HomePage";
import { LadingPage } from "../pages/LadingPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RecipePage } from "../pages/RecipePage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LadingPage />} />
      
      <Route path="/login" element={<LoginPage />} />
     
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Route>
      
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
