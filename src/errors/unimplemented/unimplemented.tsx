import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Victory from "./victory.jpg";

import Error from "../error";

function Unimplemented() {
  useEffect(() => {
    document.title = "Devin Mui | Where is the Content?";
  });
  return (
    <Error>
      <img src={Victory} alt="Victory" className="img-fluid" />
      <div className="text-center">
        <p>"What other victory is there besides domination?" -- Devin</p>
        <p>
          Looks like this isn't finished yet. <Link to="/">Return home.</Link>
        </p>
      </div>
    </Error>
  );
}

export default Unimplemented;
