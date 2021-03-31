import React from "react";

const Navbar=(infor) =>{
    return(


<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 ">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">{infor.inicio}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

            <ul class="navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link" href="#">{infor.home}<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{infor.about}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{infor.services}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{infor.contact}</a>
      </li>
      
    </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;