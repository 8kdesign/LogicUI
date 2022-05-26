import Head from "next/head";
import Image from "next/image";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import { app } from "./index";

export default function Privacy() {
	return (
		<>
			<Head>
				<title>{app.name} | LogicUI</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:title" content={app.name + " | LogicUI"} />
				<meta property="description" content={app.description} />
				<meta property="og:description" content={app.description} />
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Fbrowser_banner.jpg?alt=media&token=d5e9b1d1-f134-4da6-a832-a94d73e1c86f"
				/>
			</Head>
			<div className="Line--horizontal" />
			<div className="Buffer--20px" />
			<div className="Container--center">
				<div className="Container--scale">
					<div className="Buffer--20px" />
					<p className="Text--header-article">{app.name}</p>
					<div className="Buffer--10px" />
					<p className="Text--subheader">{app.slogan}</p>
					<PrivacyPolicy name={app.name} />
					<div className="Buffer--50px" />
				</div>
			</div>
		</>
	);
}
