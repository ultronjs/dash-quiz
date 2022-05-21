import "../index.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdQuiz, MdLogout, MdLogin } from "react-icons/md";
import { useAuth } from "../contexts/AuthContext";
import {toast} from "react-toastify"

export default function NavBar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate()
  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch(error) {
      toast.error("Failed to Log Out", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error)
    }
  }
  return (
    <nav className="navbar">
      <div className="nav_left_side flex gap-s">
        <Link className="link_wrapper" to="/">
          <MdQuiz size={35} />
          <span className="h3">
            <span className="text-primary">Dash</span>Quizz
          </span>
        </Link>
      </div>
      <div className="pr-small">
        {currentUser !== null ? (
          <MdLogout size={30} onClick={handleLogout} />
        ) : (
          <MdLogin size={30} onClick={() => navigate("/login")} />
        )}
      </div>
    </nav>
  );
}
