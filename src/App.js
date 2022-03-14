import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import * as actionTypes from "./components/store/actions";

function App() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const addOneHandler = () => {
		dispatch({
			type: actionTypes.ADD_ONE,
		});
	};
	const addFiveHandler = () => {
		dispatch({
			type: actionTypes.ADD_FIVE,
		});
	};
	const removeOneHandler = () => {
		if (counter > 0)
			dispatch({
				type: actionTypes.REMOVE_ONE,
			});
	};
	const removeFiveHandler = () => {
		if (counter > 4)
			dispatch({
				type: actionTypes.REMOVE_FIVE,
			});
	};
	const resetHandler = () => {
		dispatch({
			type: actionTypes.RESET,
		});
	};

	return (
		<div className="App">
			<header>Redux Counter App</header>
			<main>
				<div className={`number ${counter % 2 === 0 ? "even" : "odd"}`}>
					{counter}
				</div>
				<div className="buttons">
					<button onClick={addOneHandler}>Add one</button>
					<button onClick={addFiveHandler}>Add five</button>
					<button onClick={removeOneHandler}>Remove one</button>
					<button onClick={removeFiveHandler}>Remove five</button>
					<button onClick={resetHandler}>Reset</button>
				</div>
			</main>
			<footer>&copy; Remu Ollinen 2022</footer>
		</div>
	);
}

export default App;
