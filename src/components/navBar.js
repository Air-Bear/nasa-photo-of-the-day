import React from "react";
import Option from "./option";


function NavBar(props){
	var dateArr = [];

	if(props.date){
		var date = new Date(props.date.split("-").map(x=>+x));
		console.log(date.toLocaleDateString());

		for(var i = 0; i < 30; i++){
			dateArr.push(date.toLocaleDateString());
			date.setDate(date.getDate()-1);
		}
	}

	return(
		<nav>
			<select name="dates" onChange={e => console.log("&date=" + e.target.value.toISOString())} >
				{dateArr.map(date => <Option date={date} />)}
			</select>
		</nav>
	);
}

export default NavBar;
