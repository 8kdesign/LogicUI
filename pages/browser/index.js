import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import ImageSurf from "../../assets/logicui/browser/surf.webp";
import ImagePlayStore from "../../assets/google-play-badge.png";

export default function Browser() {
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
			<div
				className="Container--background Color--browser"
				style={{ height: "auto" }}
			>
				<Container className="Container--center">
					<div className="Buffer--50px" />
					<div className="Buffer--50px" />
					<p
						className="Text--header-article"
						style={{
							padding: 0,
							textAlign: "center",
							color: "white",
						}}
					>
						{app.name}
					</p>
					<p
						className="Text--paragraph"
						style={{
							padding: 0,
							textAlign: "center",
							color: "white",
						}}
					>
						{app.slogan}
					</p>
					<Image
						src={ImageSurf}
						layout="intrinsic"
						objectFit="cover"
					/>
					<div className="Buffer--50px" />
				</Container>
			</div>
			<Container className="Container--center">
				<div className="Buffer--50px" />
				<div className="Buffer--50px" />
				<p
					className="Text--header"
					style={{ padding: 0, textAlign: "center" }}
				>
					Get LogicUI TV Browser on Play Store now!
				</p>
				<div className="Buffer--20px" />
				<a
					href="https://play.google.com/store/apps/details?id=com.logicui.tvbrowser2"
					target="_blank"
					rel="noreferrer"
				>
					<Row>
						<Col
							xs={{ span: 6, offset: 3 }}
							sm={{ span: 6, offset: 3 }}
							md={{ span: 6, offset: 3 }}
							lg={{ span: 4, offset: 4 }}
						>
							<Image
								src={ImagePlayStore}
								className="Image--playstore"
							/>
						</Col>
					</Row>
				</a>
				<div className="Buffer--50px" />
				<div className="Buffer--50px" />
			</Container>
		</>
	);
}

export const app = {
	codename: "browser",
	name: "LogicUI TV Browser",
	slogan: "Surf Web on Android TV",
	description:
		"TV Browser app is built to address the lack of a browser on Android TV's play store. Designed to be used with the D-pad on remotes.",
};
