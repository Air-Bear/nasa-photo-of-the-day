import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/navBar"
import InfoCard from "./components/infoCard";

function App() {
	const [data, setData] = useState("");
	const [query, setQuery] = useState("");

	useEffect(()=>{
		const getData = () => {
			axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" + query)
			.then(res => setData(res.data));
		};

		getData();
	}, [query]);

	console.log(data);

  return (
    <div className="App">
    	<NavBar date={data.date} setQuery={setQuery}/>
    	<InfoCard data={data} />
    </div>
  );
}

export default App;
