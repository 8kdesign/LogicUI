import Image from "next/image";
import Head from "next/head";

import { Col, Container, Row } from "react-bootstrap";
import ImageMain from "../../assets/logicui/screenshot/main.png";
import ImageTransparent from "../../assets/logicui/screenshot/transparent.png";
import ImageSize1 from "../../assets/logicui/screenshot/1.jpg";
import ImageSize2 from "../../assets/logicui/screenshot/2.jpg";
import ImageSize3 from "../../assets/logicui/screenshot/3.jpg";
import ImageSize4 from "../../assets/logicui/screenshot/4.jpg";
import ImageGif from "../../assets/logicui/screenshot/video_to_gif.gif";
import ImagePlayStore from "../../assets/google-play-badge.png";

export default function ScreenshotFramer() {
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
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Fscreenshot_banner.jpg?alt=media&token=af514080-1b13-4033-a4c6-de3f8e373412"
				/>
			</Head>
			<div
				className="Container--background Color--screenshot"
				style={{ height: "auto" }}
			>
				<Container className="Container--center">
					<div className="Buffer--50px" />
					<div className="Buffer--50px" />
					<p
						className="Text--header-article"
						style={{ padding: 0, textAlign: "center" }}
					>
						{app.name}
					</p>
					<p
						className="Text--paragraph"
						style={{ padding: 0, textAlign: "center" }}
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
					Get Screenshot Framer on Play Store now!
				</p>
				<div className="Buffer--20px" />
				<a
					href="https://play.google.com/store/apps/details?id=com.logicui.screenshotframer"
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
				style={{
					backgroundImage: "url('/transparent_tiles.png')",
					backgroundRepeat: "repeat",
					height: "auto",
				}}
			>
				<Container
					style={{
						display: "flex",
						flexDirection: "column",
						position: "relative",
					}}
				>
					<div className="Buffer--50px" />
					<p className="Text--header-article">
						Clear Background (Default)
					</p>
					<div className="Buffer--20px" />
					<div style={{ position: "relative", height: 150 }}>
						<Image
							src={ImageTransparent}
							objectFit="cover"
							objectPosition="top"
						/>
					</div>
				</Container>
			</div>
			<Container>
				<div className="Buffer--50px" />
				<p className="Text--header-article" style={{ padding: 0 }}>
					One Frame, Multiple Devices
				</p>
				<div className="Buffer--20px" />
				<p className="Text--paragraph" style={{ padding: 0 }}>
					LogicUI Screenshot Framer makes it super easy to frame your
					screenshots. With flexible frames, there is no need to worry
					about choosing a frame with the correct aspect ratio. All
					frames scale intelligently to fit screenshots instead of
					stretching or cropping them.
				</p>
				<Row style={{ width: "100%" }}>
					<Col xs={6} sm={6} md={3}>
						<Image src={ImageSize1} />
					</Col>
					<Col xs={6} sm={6} md={3}>
						<Image src={ImageSize2} />
					</Col>
					<Col xs={6} sm={6} md={3}>
						<Image src={ImageSize3} />
					</Col>
					<Col xs={6} sm={6} md={3}>
						<Image src={ImageSize4} />
					</Col>
				</Row>
				<div className="Buffer--50px" />
			</Container>
			<div
				className="Container--background"
				style={{ backgroundColor: "black", height: "auto" }}
			>
				<Container>
					<div className="Buffer--50px" />
					<Row>
						<Col sm={12} md={12} lg={6}>
							<p
								className="Text--header-article"
								style={{ padding: 0, color: "white" }}
							>
								Video to GIF
							</p>
							<div className="Buffer--20px" />
							<p
								className="Text--paragraph"
								style={{ padding: 0, color: "white" }}
							>
								Another feature that is unique to Screenshot
								Framer is the ability to convert video
								screenshots to GIF, while adding a device frame
								to it at the same time. This is a must have
								feature for UI designers and app developers
								looking to demonstrate their designs or
								prototypes.
							</p>
						</Col>
						<Col sm={12} md={12} lg={6}>
							<Image src={ImageGif} />
						</Col>
					</Row>

					<div className="Buffer--50px" />
				</Container>
			</div>
		</>
	);
}

export const app = {
	image: require("../../assets/logicui/screenshot/screenshot_banner.jpg"),
	codename: "screenshot",
	name: "Screenshot Framer",
	slogan: "Frame Your Screenshots Intelligently",
	description:
		"Add a frame around your screenshot the smart way! Screenshot Framer intelligently adds a frame around your screenshots without skewing or cropping it.",
};
