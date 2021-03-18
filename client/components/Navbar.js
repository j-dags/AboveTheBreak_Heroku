import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="nav">
			<div id="navbar" className="row">
				<Link to="/">Rankings</Link>
				<Link to="/stat-charts">Charts</Link>
			</div>
		</nav>
	);
};

export default Navbar;
