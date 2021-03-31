import React from "react";

const Navbar=(infor) =>{
    return(


<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{infor.inicio}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <a class="nav-link active"  href="#">{infor.home}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">{infor.about}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">{infor.services}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">{infor.contact}</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;