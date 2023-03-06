import { useState } from "react";

function NameList() {
	const [list, setList] = useState(["Jack", "John", "Jenny"]);
	const [name, setName] = useState("");

	const addNameToList = () => {
		setList([...list, name]);
		setName("");
	}

	return (
		<div>
			<ul>
				{ list.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<input
			type="text"
			value={name}
			onChange={(e) => setName(e.target.value)}>
			</input>
			<button
			onClick={addNameToList}>
				Add name to List
			</button>
		</div>
	)
}

function Counter() {

	let [value, setValue] = useState(0);

	function addOne() {
		setValue(value++);
	}

	return (
		<div>
			<button
				onClick={addOne}> Count = {value}
			</button>
		</div>
	);
}

function UseStateDive() {

	return (
		<div>
			<Counter />
			<NameList />
		</div>
	);
}

export default UseStateDive;
