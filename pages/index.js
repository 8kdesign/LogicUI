import Head from "next/head";
import Image from "next/image";
import { Col, Row, Container, Badge } from "react-bootstrap";
import Link from "next/link";

import ImageLMPLogo from "../assets/logicui/lmp/logo.jpg";
import ImageScreenshotLogo from "../assets/logicui/screenshot/logo.jpg";
import ImageRecorderLogo from "../assets/logicui/recorder/logo.jpg";
import ImageCameraLogo from "../assets/logicui/camera/logo.jpg";
import ImageTVBrowserLogo from "../assets/logicui/browser/logo.jpg";
import ImageLectureRecorderLogo from "../assets/logicui/lecture_recorder/logo.jpg";

import ImageScreenshotBanner from "../assets/logicui/screenshot/banner.jpg";
import ImageTVBrowserBanner from "../assets/logicui/browser/banner.jpg";
import ImageCameraBanner from "../assets/logicui/camera/banner.jpg";
import ImageRecorderBanner from "../assets/logicui/recorder/banner.jpg";
import ImageLMPBanner from "../assets/logicui/lmp/banner.jpg";
import ImageLectureRecorderBanner from "../assets/logicui/lecture_recorder/banner.jpg";

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
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Flogicui_banner.png?alt=media&token=506832a0-2425-4125-b0b8-13e3e8266dff"
				/>
			</Head>
			<Container>
				<div className="Container--space-between">
					<p style={{ marginLeft: 20, fontSize: 21 }}>Android Apps</p>
				</div>
				<Row style={{ margin: 0 }}>
					<Content />
				</Row>
			</Container>
		</>
	);
}

function Content() {
	const array = [];
	apps.forEach((app) => {
		array.push(
			<Col xs={12} md={6} lg={4} style={{ padding: 0 }} key={app.name}>
				<Link href={app.codename}>
					<div
						className="Toggle"
						style={{
							padding: 20,
						}}
					>
						<Image
							src={app.banner}
							className="Image--app-icon"
							objectFit="fill"
						/>

						<div
							className="Container--row"
							style={{ marginTop: 10 }}
						>
							<div style={{ paddingTop: 5 }}>
								<Image
									src={app.image}
									height={50}
									width={50}
									className="Image--app-icon"
									objectFit="fill"
								/>
							</div>
							<div
								className="Contianer--column"
								style={{ marginLeft: 15 }}
							>
								<p
									style={{
										fontSize: 21,
										width: "100%",
										fontWeight: 500,
										marginBottom: 5,
									}}
								>
									{app.name}
								</p>
								<div>
									{app.installs !== undefined ? (
										<Badge
											bg="warning"
											text="dark"
											style={{
												fontSize: 13,
												fontWeight: 500,
												borderRadius: 20,
												marginBottom: 10,
											}}
										>
											{app.installs}
										</Badge>
									) : null}
								</div>
								<p
									style={{
										fontSize: 17,
										width: "100%",
										fontWeight: 300,
									}}
								>
									{app.description}
								</p>
							</div>
						</div>
					</div>
				</Link>
			</Col>
		);
	});
	return array;
}

export const apps = [
	{
		image: ImageTVBrowserLogo,
		banner: ImageTVBrowserBanner,
		codename: "browser",
		name: "TV Browser",
		description:
			"TV Browser app is built to address the lack of a good free browser on Android TV's play store. Supports controlling from your phone.",
		installs: "10K+ Installs",
		link: "https://play.google.com/store/apps/details?id=com.logicui.tvbrowser2",
	},
	{
		image: ImageScreenshotLogo,
		banner: ImageScreenshotBanner,
		codename: "screenshot",
		name: "Screenshot Framer",
		description:
			"Add a frame around your screenshot the easy way! Screenshot Framer intelligently adds a frame around your screenshots without skewing or cropping it.",
		installs: "500+ Installs",
		link: "https://play.google.com/store/apps/details?id=com.logicui.screenshotframer",
	},
	{
		image: ImageLMPLogo,
		banner: ImageLMPBanner,
		codename: "musicplayer",
		name: "Music Player",
		description:
			"Music player that makes maintaining playlists simple. LMP also supports a variety of artist metadata delimiters and flexible Chinese character search.",
		link: "https://play.google.com/store/apps/details?id=com.logicui.musicplayer",
	},
	{
		image: ImageRecorderLogo,
		banner: ImageRecorderBanner,
		codename: "recorder",
		name: "Recorder",
		description:
			"Audio recorder that makes recording audio with Bluetooth microphone/headphones a breeze on Android devices.",
		link: "https://play.google.com/store/apps/details?id=com.logicui.audiorecorder",
	},
	{
		image: ImageLectureRecorderLogo,
		banner: ImageLectureRecorderBanner,
		codename: "lecturerecorder",
		name: "Lecture Recorder",
		description:
			"Record videos/audio in picture-in-picture mode while you work on other apps. Then, playback in picture-in-picture mode.",
		link: "https://play.google.com/store/apps/details?id=com.logicui.lecturerecorder",
	},
	{
		image: ImageCameraLogo,
		banner: ImageCameraBanner,
		codename: "camera",
		name: "Camera Concept",
		description:
			"DISCONTINUED. Camera app concept designed for one-handed use, from shuttle to focus and exposure.",
		link: "https://play.google.com/store/apps/details?id=com.logicui.logicuicamera",
	},
];
