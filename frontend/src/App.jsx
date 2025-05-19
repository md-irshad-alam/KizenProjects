import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./Componants/auth/auth";
import Dashboard from "./Componants/dashboard";
import Navbar from "./Componants/navbar";
import apiclient from "./utils/apiclint";
import LeadForm from "./Componants/LeedGenerations/productPage";
import ProtectedRoute from "./utils/protechroutes";
import useTokenExpiry from "./utils/tokenExpire";
import UserProfile from "./Componants/UserProfile";

function App() {
  const [profile, setProfile] = useState(null);
  const token = sessionStorage.getItem("token");
  useTokenExpiry();
  useEffect(() => {
    if (token) {
      apiclient
        .get("/auth/profile")
        .then((res) => setProfile(res.data))
        .catch(() => {
          setProfile(null);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("expiry");
        });
    }
  }, [token]);

  return (
    <div>
      <Navbar profile={profile} />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute element={Dashboard} isAuthenticated={!!token} />
          }
        />
        <Route
          path="/lead-generate"
          element={
            <ProtectedRoute element={LeadForm} isAuthenticated={!!token} />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute element={UserProfile} isAuthenticated={!!token} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
