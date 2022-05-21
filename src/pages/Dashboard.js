import React, { useEffect, useState } from "react";
import { Card, Button, Alert, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useCategory } from "../contexts/CategoryContext";
import  NavBar  from "../components/NavBar";
import "../index.css"
import { db } from "../firebase";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { categories, getCategoriesData } = useCategory();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="dashboard_container">
        {categories.length > 0 ? (
          categories.map((item) => (
            <>
              <Card
                style={{
                  width: "18rem",
                  height: "20rem",
                  borderRadius: "1rem",
                  color: "white",
                  backgroundColor: "#19212C",
                }}
                onClick={() => navigate(`/rules/${item.category.name}`)}
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
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
