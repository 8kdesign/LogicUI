import Head from "next/head";
import Image from "next/image";
import { Container, Grid } from "@mui/material";
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

import ImageColorGeneratorBanner from "../assets/tools/colorgenerator/banner.jpg";

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
					content="Apps and concepts by LogicUI"
				/>
				<meta
					property="og:description"
					content="Apps and concepts by LogicUI"
				/>
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2FBanner.png?alt=media&token=b11c779e-a89f-4c3d-a336-c11608b23703"
				/>
			</Head>
			<Container style={{ paddingTop: 50, paddingBottom: 50 }}>
				<div className="Container--space-between">
					<p style={{ marginLeft: 20, fontSize: 27 }}>Android Apps</p>
				</div>
				<Grid container style={{ margin: 0 }}>
					<AppContent />
				</Grid>
				<br />
				<div className="Line--horizontal" />
				<br />
				<div className="Container--space-between">
					<p style={{ marginLeft: 20, fontSize: 27 }}>
						Tools by LogicUI
					</p>
				</div>
				<Grid container style={{ margin: 0 }}>
					<ToolContent />
				</Grid>
			</Container>
		</>
	);
}

function AppContent() {
	const array = [];
	apps.forEach((app) => {
		array.push(
			<Grid
				item
				xs={12}
				md={6}
				lg={4}
				style={{ padding: 0 }}
				key={app.name}
			>
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
										<p
											style={{
												width: "fit-content",
												fontSize: 13,
												fontWeight: 500,
												borderRadius: 20,
												marginBottom: 10,
												padding: "5px 15px",
												background: "#f5b342",
											}}
										>
											{app.installs}
										</p>
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
			</Grid>
		);
	});
	return array;
}

function ToolContent() {
	const array = [];
	tools.forEach((tool) => {
		array.push(
			<Grid
				item
				xs={12}
				md={6}
				lg={4}
				style={{ padding: 0 }}
				key={tool.name}
			>
				<Link href={tool.codename}>
					<div
						className="Toggle"
						style={{
							padding: 20,
						}}
					>
						<Image
							src={tool.banner}
							className="Image--app-icon"
							objectFit="fill"
						/>
						<div
							className="Contianer--column"
							style={{ marginTop: 10 }}
						>
							<p
								style={{
									fontSize: 21,
									width: "100%",
									fontWeight: 500,
									marginBottom: 5,
								}}
							>
								{tool.name}
							</p>
							<p
								style={{
									fontSize: 17,
									width: "100%",
									fontWeight: 300,
								}}
							>
								{tool.description}
							</p>
						</div>
					</div>
				</Link>
			</Grid>
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
		installs: "1K+ Installs",
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

export const tools = [
	{
		banner: ImageColorGeneratorBanner,
		codename: "colorgenerator",
		name: "Material 3 Color Generator",
		description:
			"Tool for generating colors for Material Design 3 and exporting to Android Studio.",
	},
];
