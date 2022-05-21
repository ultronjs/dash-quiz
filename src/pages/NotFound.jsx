import React from 'react'
import NavBar from "../components/NavBar"
import { Link } from 'react-router-dom';
import "../index.css"

function NotFound() {
  return (
    <div className="container">
      <NavBar />
      <div className="flex flex-col flex_jc_flex-start flex-ai-center p-small">
        <Link to="/">
          <button className="btn btn-primary">Go Back to Home</button>
        </Link>
        <img className="not_found_image" src="/assets/404.png" alt="404" />
      </div>
    </div>
  );
}
export default NotFound