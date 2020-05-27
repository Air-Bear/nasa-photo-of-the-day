import React, {useState, useEffect} from "react";

function InfoCard(props){

	return(
		<div className="infoCard">
			<h1>{props.data.title}</h1>
			<h3>{props.data.date}</h3>
			<div>
				<img src={props.data.hdurl} />
			</div>

			<p>{props.data.explanation}</p>
		</div>
		
	);

}

export default InfoCard;