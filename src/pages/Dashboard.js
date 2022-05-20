import React, { useEffect, useState } from "react";
import { Card, Button, Alert, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useCategory } from "../contexts/CategoryContext";
import  NavBar  from "../components/NavBar";
import "../index.css"

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { categories, getCategoriesData } = useCategory();
  const navigate = useNavigate();

  useEffect(() => {
      getCategoriesData()
    
  },[])

  console.log(categories);
  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await logout();
  //     navigate("/login");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <>
      <NavBar />
      <div className="dashboard_container">
        {categories.length > 0 ? (
          categories.map((item) => (
            <Card
              style={{
                width: "18rem",
                height: "20rem",
                borderRadius: "1rem",
                color: "white",
                backgroundColor: "#19212C",
              }}
            >
              <Card.Img
                style={{
                  height: "180px",
                  borderRadius: "0.8rem 0.8rem 0rem 0rem",
                }}
                variant="top"
                src={item.category.imageUrl}
              />
              <Card.Body>
                <Card.Title>{item.category.title}</Card.Title>
                <Card.Text>
                  <div className="font-weight-light">
                    Take this quiz to test yourself
                  </div>
                  <div className="font-weight-light">
                    {item.category.noOfQuestion} Question
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <></>
        )}

        {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
      </div>
    </>
  );
}
