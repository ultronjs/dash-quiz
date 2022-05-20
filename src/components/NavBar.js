import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";

export default function NavBar() {
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
    </nav>
  );
}
