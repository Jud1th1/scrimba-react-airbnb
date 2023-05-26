import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Hero from "./Hero";
import Footer from "./Footer";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  // <Hero />
  return (
    <div>
      <Navbar />
      <Menu />
      <Hero />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}
