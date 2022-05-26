import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import ImageMain from "../../assets/logicui/camera/main.png";
import ImagePlayStore from "../../assets/google-play-badge.png";
import ImageFocus from "../../assets/logicui/camera/focus.gif";
import ImageZoom from "../../assets/logicui/camera/zoom.gif";
import ImageSmile from "../../assets/logicui/camera/smile.gif";

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
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Fcamera_banner.jpg?alt=media&token=e149470f-595e-41b6-ae86-fd8e4c10f458"
				/>
			</Head>
			<div
				className="Container--background Color--camera"
				style={{ height: "auto" }}
			>
				<Container className="Container--center">
					<Image
						src={ImageMain}
						layout="intrinsic"
						objectFit="cover"
					/>
					<div className="Buffer--20px" />
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
					Get Screenshot Framer on Play Store now!
				</p>
				<div className="Buffer--20px" />
				<a
					href="https://play.google.com/store/apps/details?id=com.logicui.logicuicamera"
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
			<Container>
				<div className="Buffer--50px" />
				<Row>
					<Col sm={12} md={6} lg={6}>
						<p className="Text--subheader" style={{ padding: 0 }}>
							One-Handed Focus
						</p>
						<div className="Buffer--20px" />
						<p className="Text--paragraph" style={{ padding: 0 }}>
							Ever wanted to take a photo of a beautiful scene,
							but struggled to focus the camera because your other
							hand is occupied? If only there was a way to select
							focus with just one hand. With the this camera
							concept, you can. Simply drag on the shutter button
							to adjust focus.
						</p>
					</Col>
					<Col sm={12} md={6} lg={6}>
						<Image src={ImageFocus} />
					</Col>
					<Col sm={12} md={6} lg={6}>
						<p className="Text--subheader" style={{ padding: 0 }}>
							One-Handed Zoom
						</p>
						<div className="Buffer--20px" />
						<p className="Text--paragraph" style={{ padding: 0 }}>
							Adjusting zoom and exposure is just as easy using
							only one hand. Simply drag the gallery or switch
							camera icon upwards/downwards respectively to adjust
							them.
						</p>
					</Col>
					<Col sm={12} md={6} lg={6}>
						<Image src={ImageZoom} />
					</Col>
					<Col sm={12} md={6} lg={6}>
						<p className="Text--subheader" style={{ padding: 0 }}>
							Smile Selfie
						</p>
						<div className="Buffer--20px" />
						<p className="Text--paragraph" style={{ padding: 0 }}>
							Take selfies without using your hand! Enable
							smile-detection and the app will automatically take
							a shot when everyone in frame is smiling. This
							feature is implemented with Google&apos;s ML Kit
							face detection API.
						</p>
					</Col>
					<Col sm={12} md={6} lg={6}>
						<Image src={ImageSmile} />
					</Col>
				</Row>

				<div className="Buffer--50px" />
			</Container>
		</>
	);
}

export const app = {
	codename: "camera",
	name: "LogicUI Camera Concept",
	slogan: "One-Handed Convenience",
	description:
		"Camera app designed for one-handed use. Includes optimizations for single-hand control of focus and exposure, as well as triggering of shutter with a smile.",
};
