import React from "react";
import "./App.css"
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { RequireAuth } from "./pages/RequireAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./pages/Quiz";
import Rules from "./pages/Rules";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/quiz/:quizName"
          element={
            <RequireAuth>
              <Quiz />
            </RequireAuth>
          }
        />
        <Route
          path="/rules/:quizName"
          element={
            <RequireAuth>
              <Rules />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
