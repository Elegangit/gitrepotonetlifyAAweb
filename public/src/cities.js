import React from "react";
import Header from "./header";
import Footer from "./Footer";
import "./styles.css";

export default function cities() {
  return (
    <div className="cities">
      <Header />
      <ul>
        <li>Paris</li>
        <li>Moscow</li>
        <li>San Francisco</li>
        <li>Sydney</li>
      </ul>
      <Footer />
    </div>
  );
}
