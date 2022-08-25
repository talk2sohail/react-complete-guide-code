import React, { useState } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import UserForm from "./UserForm";

const AddUser = (props) => {
	const [error, setError] = useState();

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<UserForm onError={setError} onAddUser={props.onAddUser} />
			</Card>
		</div>
	);
};

export default AddUser;
