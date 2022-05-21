import React from "react";
import NavBar from "../components/NavBar";
import { Link, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../index.css"
function Rules() {
  const { quizName } = useParams();
  return (
    <main className="container">
      <NavBar />
      <section className="rules_container">
        <div className="rules_heading">
          <h1>Quiz Rules</h1>
          <ol className="rules-list">
            <li> There are 10 questions in total.</li>
            <li>Each question carries 10 mark.</li>
            <li>There is a negative marking for wrong answer i.e 5 marks.</li>
            <li>
              You won't be able to go back to previous questions after
              attempting so.
              <li>Please do carefully</li>
            </li>
          </ol>
          <div className="btn_center">
            <Link to={`/quiz/${quizName}`} className="btn btn-primary w-100">
              Start Quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Rules;
