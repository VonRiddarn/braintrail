import "./App.scss";

const resb = await fetch("https://rickandmortyapi.com/api/character/302dsadsadsadsadsadsa");

console.log(await resb.json());

function App() {
	return (
		<>
			<h1>🧠 Braintrail</h1>
			<p>Oh god, what have I gotten myself into?</p>
		</>
	);
}

export default App;
