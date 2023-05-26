import React from "react";

export default function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <footer>
      <p>&copy; Airbnb, Inc • {date} • Designed By Judith Jean-Francois</p>
    </footer>
  );
}
