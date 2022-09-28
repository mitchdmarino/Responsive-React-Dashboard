import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

// components/pages
import Login from "./components/user/pages/Login";
import Register from "./components/user/pages/Register";
import Profile from "./components/user/pages/Profile";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // useEffect -- If the User navigates away from the page, we will log them back in.
  useEffect(() => {
    // The token is checked to see if it is currently in storage.
    const token = localStorage.getItem("jwt");
    if (token) {
      // If it is, we will decode it and set the Account in app state.
      const loggedInUser = jwt_decode(token);
      setCurrentUser(loggedInUser);
      //  The authorization headers are created.
      const options = {
        headers: {
          Authorization: token,
        },
      };
      // The app is updated with the account's latest information.
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/user/${loggedInUser.id}`,
          options
        )
        .then((response) => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCurrentUser(null);
    }
  }, []);

  // This event handler is used to log out the Account when the user has completed their session.
  const handleLogout = () => {
    // Local storage is checked for a token.
    if (localStorage.getItem("jwt")) {
      // If it exists, delete it.
      localStorage.removeItem("jwt");
    }
    setCurrentUser(null);
  };

  return (
    <Router>
      <header>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/register"
            element={
              <Register
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          {/* if current user is logged in, proceed to profile page. Otherwise, redirect to login page */}
          <Route
            path="/profile"
            element={
              currentUser ? (
                <Profile
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
