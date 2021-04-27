import React from "react";
import Cards from "./Cards";
import "./Graph.css";
import MainCard from "./MainCard";

function Graph() {
  return (
    <div className="graph_container">
      <div className="cards">
        <Cards />
        <MainCard />
      </div>
    </div>
  );
}

export default Graph;
