import React, { useState } from "react";
import "./profile.css";
import { Navbar, Nav } from "react-bootstrap";
import UserInfo from "./UserInfo";
import Favorites from "./Favorites";
import Watchlist from "./Watchlist";
import Wishlist from "./Wishlist";
import Settings from "./Settings";

const ProfilePage = () => {
  const [section, setSection] = useState("UserInfo");

  const displaySection = (section) => {
    switch (section) {
      case "UserInfo":
        return <UserInfo />;
      case "Favorites":
        return <Favorites />;
      case "Watchlist":
        return <Watchlist />;
      case "Wishlist":
        return <Wishlist />;
      case "Settings":
        return <Settings />;
      default:
        break;
    }
  };

  return (
    <div id="profile-layout">
      <Navbar
        id="profile-nav"
        className="d-flex flex-column"
        bg="dark"
        variant="dark"
        onSelect={(key) => setSection(key)}
      >
        <Nav id="inner-profile-nav">
          <Nav.Link eventKey="UserInfo">User Info</Nav.Link>
          <Nav.Link eventKey="Favorites">Favorites</Nav.Link>
          <Nav.Link eventKey="Watchlist">Watchlist</Nav.Link>
          <Nav.Link eventKey="Wishlist">Wishlist</Nav.Link>
          <Nav.Link eventKey="Settings">Settings</Nav.Link>
        </Nav>
      </Navbar>
      <main className="container d-flex flex-column align-items-center">
        {displaySection(section)}
      </main>
    </div>
  );
};

export default ProfilePage;
