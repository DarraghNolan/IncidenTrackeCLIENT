import React from "react";
import { Link } from "react-router-dom";

function Navbar(){;
    return(
        <div>
            <Link to="/searchdriveoffs">Search Drive Off Reports</Link>
            <h3></h3>
            <Link to="/driveoffs">Back to Home</Link>
        </div>
    )
}

export default Navbar;