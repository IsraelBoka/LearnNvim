import Head from "next/head";
import { useState } from "react";

export const Spinner = () => {
	return (
		<div className="rounded-full p-4 border-4 duration-100 animate-spin border-gray-700 border-t-red-800 m-2 "></div>
	)
}
export default function Home() {
	const [liste, setListe] = useState<String[]>([]);

	const [name, setName] = useState("");
	const [errors, setErrors] = useState('');
	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (name.length > 0) {
			setListe([...liste, name]);
			setName("");
		} else {
			setErrors("Avoir au minimum un charactère")
		}
	}
	const handleDeletion = (i: number) => {
		liste.splice(i, 1);
		setListe([...liste])
	}

	return (

		<>
			<Head>
				<title>Mon projet VIM </title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div>
					<h1 className="text-red-500 bg-gray-900 "> Try Vim for the first time </h1>
					<h2 className="bg-gray-800 text-red-400">
						Premier problème
					</h2>
					<h3 className="bg-gray-700 text-red-300">
						Second problème
					</h3>
					<h4 className="bg-gray-600 text-red-200">
						Troisième problème
					</h4>
					<form action="">
						<input type="text" className="border bg-red-500  border-gray-800" />
						<button>Valider </button>
					</form>

				</div>
			</main>
		</>
	);
}
