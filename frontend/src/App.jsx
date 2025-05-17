import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./Componants/auth/auth";
import Dashboard from "./Componants/dashboard";
import Dashboard2 from "./Componants/NewDashboard";
import Navbar from "./Componants/navbar";
import apiclient from "./utils/apiclint";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import LeadForm from "./Componants/LeedGenerations/productPage";

function App() {
  const [profile, setProfile] = useState("");
  useEffect(() => {
    apiclient
      .get("/auth/profile")
      .then((res) => setProfile(res.data))
      .catch((error) => {
        console.log(error);
        setProfile(null);
      });
  }, []);

  // ProtectedRoute component
  function ProtectedRoute({ children }) {
    if (profile === "") return null; // or a loading spinner
    if (!profile) return <Navigate to="/login" replace />;
    return children;
  }

  return (
    <div>
      <Navbar profile={profile} />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/lead-generate" element={<LeadForm />} />
      </Routes>
    </div>
  );
}

export default App;
