import React from "react";


function NavBar(props){
	var date = props.date.split("-");
	return(
		<nav>
			<select name="dates">
				<option>{props.date}</option>
				<option>example</option>
				<option>example</option>
			</select>
		</nav>
	);
}

export default NavBar;
