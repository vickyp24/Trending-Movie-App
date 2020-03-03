import React, { useEffect, useReducer } from "react";
import "../App.css";
import Navigation from "./Navbar";
import Movie from "./Movies";
import Search from "./Search";


  return (
    <div className = "App">
      <Navigation search = {Navigation} />
      <Search search={search} />
      <p className="App-intro">Top Ranked Movies</p>

    </div>
  );


export default App;
