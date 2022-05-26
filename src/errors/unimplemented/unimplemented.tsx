import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Error from "../error";

function Unimplemented() {
  useEffect(() => {
    document.title = "Devin Mui | Where is the Content?";
  });
  return (
    <Error>
      <div className="text-center">
        <p>
          Looks like this isn't finished yet. <Link to="/">Return home.</Link>
        </p>
      </div>
    </Error>
  );
}

export default Unimplemented;
