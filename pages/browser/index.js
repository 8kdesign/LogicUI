import Head from "next/head";
import Image from "next/image";
import Browser from "../../components/LogicUI/Browser";

export default function LogicUICamera() {
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
			<div className="Image--banner">
				<Image
					src={app.image.default}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="Line--horizontal" />
			<div className="Buffer--20px" />
			<div className="Container--center">
				<div className="Container--scale">
					<div className="Buffer--20px" />
					<p className="Text--header-article">{app.name}</p>
					<div className="Buffer--10px" />
					<p className="Text--subheader">{app.slogan}</p>
					<Browser />
					<div className="Buffer--50px" />
				</div>
			</div>
		</>
	);
}

export const app = {
	image: require("../../assets/logicui/browser/browser_banner.jpg"),
	codename: "browser",
	name: "LogicUI TV Browser",
	slogan: "Surf Web on Android TV",
	description:
		"TV Browser app is built to address the lack of a browser on Android TV's play store. Designed to be used with the D-pad on remotes.",
};
