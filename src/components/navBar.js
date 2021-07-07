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
			<select name="dates" onChange={e => console.log("&date=" + dateFormatting(e.target.value))} >
				{dateArr.map(date => <Option date={date} />)}
			</select>
		</nav>
	);
}

function dateFormatting(date){
	// var arr = date.split("/"); //original solution, not DRY
	// var year = arr[2];
	// var month = arr[0];
	// var day = arr[1];
	// var arr2 = year+"-"+month+"-"+day;

	// return arr2;

	var arr = date.split("/");
	arr.unshift(arr.pop());

	return arr.join("-");
}

export default NavBar;
