import "../styles/globals.css";
import "../App.css";

import AppBar from "../components/AppBar";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Toaster position="bottom-center" />
			<AppBar />
			<div className="Container--content">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
