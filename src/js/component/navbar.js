import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid">
					<Link to="/">
		 				<img className="img border-0" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG11.png" style={{width: "100px"}}></img>
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a className="dropdown-toggle btn btn-outline-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Favorites
								</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><hr className="dropdown-divider" /></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};






		
		{/* // <nav className="navbar navbar-light bg-dark mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">Star Wars</span>
		// 	</Link>
		// 	<div className="ml-auto dropdown">
		// 		<Link to="/demo">
		// 			<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="#favoritesDropDown" aria-expanded="false">Favorites</button>
		// 		</Link>
		// 		<ul className="dropdown-menu dropdown-menu-dark">
		// 			<li><a className="dropdown-item active" href="#">Action</a></li>
		// 			<li><a className="dropdown-item" href="#">Another action</a></li>
		// 			<li><a className="dropdown-item" href="#">Something else here</a></li>
		// 			<li><hr className="dropdown-divider" /></li>
		// 			<li><a className="dropdown-item" href="#">Separated link</a></li>
		// 		</ul>
		// 	</div>
		// </nav> */}
