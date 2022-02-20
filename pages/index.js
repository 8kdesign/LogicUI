import Head from "next/head";
import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";
import BannerImage from "../assets/home_banner_graphics.png";
import ImageLMPLogo from "../assets/logicui/lmp/lmp_logo.jpg";
import ImageScreenshotLogo from "../assets/logicui/screenshot/screenshot_logo.jpg";
import ImageRecorderLogo from "../assets/logicui/recorder/recorder_logo.jpg";
import ImageCameraLogo from "../assets/logicui/camera/camera_logo.jpg";
import ImageTVBrowserLogo from "../assets/logicui/browser/browser_logo.jpg";
import Link from "next/link";

export default function LogicUI() {
	return (
		<>
			<Head>
				<title>LogicUI</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:title" content="LogicUI" />
				<meta
					property="description"
					content="LogicUI apps and concepts."
				/>
				<meta
					property="og:description"
					content="LogicUI apps and concepts."
				/>
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Flogicui_banner.jpg?alt=media&token=273ba1e6-7d61-457f-82cf-d5506c10f7a7"
				/>
			</Head>
			<div className="Container--background Color--home">
				<Image
					src={BannerImage}
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>
			<div className="Buffer--50px" />
			<Container className="Container--center">
				<p className="Text--header">Apps by LogicUI</p>
				<div className="Buffer--20px" />
				<Row style={{ width: "100%" }}>
					<Content />
				</Row>
			</Container>
			<div className="Buffer--50px" />
		</>
	);
}

function Content() {
	const itemArray = [];
	apps.forEach((item) => {
		itemArray.push(
			<Col
				sm={12}
				md={6}
				lg={4}
				key={item.codename}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<Link href={"/" + item.codename}>
					<Card
						className="Card"
						bg="light"
						style={{ cursor: "pointer", flex: 1 }}
					>
						<Card.Body>
							<div className="Container--row">
								<Image
									src={item.image}
									className="Image--app-icon"
									height={40}
									width={40}
								/>
								<Card.Title style={{ paddingLeft: 10 }}>
									{item.name}
								</Card.Title>
							</div>
							<Card.Text style={{ paddingTop: 10 }}>
								{item.description}
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
				<div className="Buffer--20px" />
			</Col>
		);
	});
	return itemArray;
}

const apps = [
	{
		image: ImageLMPLogo,
		codename: "musicplayer",
		name: "LogicUI Music Player",
		status: "success",
		description:
			"Music player designed to make maintaining playlists simple. LMP also supports a variety of artist metadata delimiters and flexible Chinese character search.",
	},
	{
		image: ImageScreenshotLogo,
		codename: "screenshot",
		name: "Screenshot Framer",
		status: "success",
		description:
			"Add a frame around your screenshot the smart way! Screenshot Framer intelligently adds a frame around your screenshots without skewing or cropping it.",
	},
	{
		image: ImageRecorderLogo,
		codename: "recorder",
		name: "LogicUI Recorder",
		status: "success",
		description:
			"Audio recorder that makes recording audio with Bluetooth microphone/headphones a breeze on Android devices.",
	},
	{
		image: ImageCameraLogo,
		codename: "camera",
		name: "LogicUI Camera Concept",
		status: "danger",
		description:
			"Camera app designed for one-handed use. Includes optimizations for single-hand control of focus and exposure, as well as triggering of shutter with a smile.",
	},
	{
		image: ImageTVBrowserLogo,
		codename: "browser",
		name: "LogicUI TV Browser",
		status: "warning",
		description:
			"TV Browser app is built to address the lack of a browser on Android TV's play store. Designed to be used with the D-pad on remotes.",
	},
];
