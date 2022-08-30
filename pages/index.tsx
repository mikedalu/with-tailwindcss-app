import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Marquee from "react-fast-marquee"; //for margue scrolling
import tw from "twin.macro"; // used so we can combine tailwind and styled compoenet
import styled from "styled-components";

const StyledForm = styled.main.attrs({
	className: "flex flex-col h-screen justify-center items-center bg-gray-100 container mx-auto",
})`
	& {
		form {
			${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xl`}
		}
		input {
			${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
		}
		button {
			${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
		}
	}
`;
const Home: NextPage = () => {
	return (
		<StyledForm>
			<form>
				<input type="text" placeholder="Full name" />
				<input type="text" placeholder="Email" />
				<input type="text" placeholder="Password" />
				<button>Sign In</button>
			</form>
		</StyledForm>
	);
};

export default Home;
