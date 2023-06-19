import Link from "next/link";
import { FC } from "react";
import UserAuthForm from "./UserAuthForm";

const SignUp = () => {
	return (
		<div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
			<div className="flex flex-col space-y-2 text-center">
				<p className="text-zinc-900 text-lg font-bold md:block">
					<b>AskQuery</b>
				</p>
				<h1 className="text 2xl font-semibold tracking-right">Sign Up</h1>
				<p className="text-sm max-w-xs mx-auto">
					By continuing, You are setting up a AskQuery account and agree to our
					user Agreement and Privacy Policy
				</p>

				<UserAuthForm />

				<p className="px-8 text-center text-sm text-zinc-700">
					Already a User?{" "}
					<Link
						href="/sign-in"
						className="hover:text-zinc-800 text-sm underline underline-offset-4"
					>
						SignIn
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
