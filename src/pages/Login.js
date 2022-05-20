import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"
import NavBar from "../components/NavBar";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, loginWithGuestCreds } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const guestCreds = {
    email: "test@gmail.com",
    password: 123456,
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch(error) {
      console.log(error)
      setError("Failed to log in");
    }

    setLoading(false);
  }

    async function handleGuestLogin(e) {
      try {
        setError("");
        setLoading(true);
        await loginWithGuestCreds(guestCreds.email,guestCreds.password)
        navigate("/");
      } catch(error) {
        console.log(error);
        setError("Failed to log in");
      }
      setLoading(false);
    }

  return (
    <>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" ,height:"fit-content"}}>
          <Card
            style={{
              color: "white",
              backgroundColor: "#19212C",
            }}
          >
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <Button
                disabled={loading}
                className="w-100 mt-4"
                onClick={() => handleGuestLogin()}
              >
                Log In With Guest Creds
              </Button>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
