import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
	const [counter, setCounter] = useState(0);
	const onClickCounter = () => {
		setCounter((prev) => prev + 1);
	};
	return (
		<div style={{ textAlign: "center" }}>
			<h1>The count is {counter}</h1>
			<button onClick={onClickCounter}>Increment counter</button>
		</div>
	);
};

export default Home;
