import React, { useState } from "react";
import userService from "../../utils/userService";
import { Button } from "../";

const LoginForm = ({ setShowSong, toggle }) => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const submittingUser = {
			identifier: email,
			password,
		};

		try {
			const user = await userService.login(submittingUser);
			if (user) {
				setShowSong(true);
				toggle();
			}
		} catch (error) {
			setError("Something isn't right--please try again");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="w-100 flex flex-column justify-center items-center">
				<h2 className="white tc">
					Welcome back <br /> Login to hear the demo!
				</h2>

				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="email">
						Email address
					</label>
					<input
						className="pa2 input-reset white bb b--white br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="phoneNumber">
						Password
					</label>
					<input
						className="pa2 input-reset white bb b--white br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{error && (
					<div className=" w-100 fw9 red tc">
						<p>{error}</p>
					</div>
				)}
				<div className="mv4 w-100 flex justify-center items-center">
					<Button>Login</Button>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
