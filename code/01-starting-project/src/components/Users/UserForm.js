import React, { useState } from "react";

import Button from "../UI/Button";

const UserForm = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0) {
			props.onError({
				title: "Invalid input",
				message: "Please enter a valid name (non-empty values).",
			});
			return;
		}
		if (enteredAge.trim().length === 0 || enteredAge < 1) {
			props.onError({
				title: "Invalid age",
				message: "Please enter a valid age.",
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					value={enteredUsername}
					onChange={usernameChangeHandler}
				/>
				<label htmlFor="age">Age (Years)</label>
				<input
					id="age"
					type="number"
					value={enteredAge}
					onChange={ageChangeHandler}
				/>
				<Button type="submit">Add User</Button>
			</form>
		</>
	);
};

export default UserForm;
