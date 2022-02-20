import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Bluetooth } from "react-bootstrap-icons";

import ImageMain from "../../assets/logicui/recorder/main.png";
import ImagePlayStore from "../../assets/google-play-badge.png";

export default function AudioRecorder() {
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
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Frecorder_banner.png?alt=media&token=3bee5e17-c8ea-4528-b3c4-5611eaf03c16"
				/>
			</Head>
			<div
				className="Container--background Color--recorder"
				style={{ height: "auto" }}
			>
				<Container className="Container--center">
					<div className="Buffer--50px" />
					<div className="Buffer--50px" />
					<p
						className="Text--header-article"
						style={{
							padding: 0,
							color: "white",
							textAlign: "center",
						}}
					>
						{app.name}
					</p>
					<p
						className="Text--paragraph"
						style={{
							padding: 0,
							color: "white",
							textAlign: "center",
						}}
					>
						{app.slogan}
					</p>
					<div style={{ maxHeight: 500 }}>
						<Image
							src={ImageMain}
							layout="intrinsic"
							objectFit="cover"
						/>
					</div>
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
					Get LogicUI Audio Recorder on Play Store now!
				</p>
				<div className="Buffer--20px" />
				<a
					href="https://play.google.com/store/apps/details?id=com.logicui.audiorecorder"
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
			<div
				className="Container--background"
				style={{ backgroundColor: "#346dad", height: "auto" }}
			>
				<Container>
					<div className="Buffer--50px" />
					<Row>
						<Col sm={12} md={12} lg={6}>
							<p
								className="Text--header-article"
								style={{ padding: 0, color: "white" }}
							>
								Bluetooth Support
							</p>
							<div className="Buffer--20px" />
							<p
								className="Text--paragraph"
								style={{ padding: 0, color: "white" }}
							>
								LogicUI Audio Recorder makes recording with
								Bluetooth accessories easy. Simply select
								Bluetooth as your audio source and the app will
								connect to your Bluetooth device. If
								disconnected, the app will switch to your
								device&apos;s microphone before attempting to
								reconnect again.
							</p>
						</Col>
						<Col
							sm={12}
							md={6}
							lg={6}
							style={{
								display: "flex",
								alignItem: "center",
								justifyContent: "center",
							}}
						>
							<Bluetooth
								width={180}
								height={180}
								color="white"
								style={{ margin: 20 }}
							/>
						</Col>
					</Row>

					<div className="Buffer--50px" />
				</Container>
			</div>
			<Container>
				<div className="Buffer--50px" />
				<p className="Text--header-article" style={{ padding: 0 }}>
					Other Optimizations
				</p>
				<div className="Buffer--20px" />
				<Row style={{ width: "100%" }}>
					<Col
						xs={12}
						sm={12}
						md={12}
						lg={6}
						style={{ paddingBottom: 10, display: "flex" }}
					>
						<div className="Container--feature">
							<p className="Text--subheader">Audio Preview</p>
							<p className="Text--paragraph">
								To ensure that your microphone is connected and
								working, simply refer to preview. It is
								available even when you are not recording, so
								there is no need to start and stop a recording
								just to check it.
							</p>
						</div>
					</Col>
					<Col
						xs={12}
						sm={12}
						md={12}
						lg={6}
						style={{ paddingBottom: 10, display: "flex" }}
					>
						<div className="Container--feature">
							<p className="Text--subheader">Quick Cancel</p>
							<p className="Text--paragraph">
								It can be frustrating when you make an error
								when recording and have to go through a tedious
								process to delete it before resuming. On this
								app, simply press the cancel toggle during
								recording, and the current recording will end
								without saving.
							</p>
						</div>
					</Col>
				</Row>
				<div className="Buffer--50px" />
			</Container>
		</>
	);
}

export const app = {
	image: require("../../assets/logicui/recorder/banner.png"),
	codename: "recorder",
	name: "LogicUI Audio Recorder",
	slogan: "Record With Ease",
	description:
		"Audio recording app that can be used with Bluetooth earphones, with optimizations that brings greater conveniences.",
};
