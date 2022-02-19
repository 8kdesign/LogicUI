import Head from "next/head";
import { Col, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ImageBanner from "../assets/logo_banner.png";
import ImageLMPLogo from "../assets/logicui/lmp/lmp_logo.jpg";
import ImageScreenshotLogo from "../assets/logicui/screenshot/screenshot_logo.jpg";

export default function Home() {
	return (
		<>
			<Head>
				<title>8K | LogicUI</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:title" content="8K | LogicUI" />
				<meta property="description" content="Official blog by 8K" />
				<meta property="og:description" content="Official blog by 8K" />
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Flogo_banner.png?alt=media&token=8522ecea-b68a-4ced-a4df-538c1d8a92db"
				/>
			</Head>
			<div className="Image--banner">
				<Image src={ImageBanner} layout="fill" objectFit="cover" />
			</div>
			<div className="Line--horizontal"></div>
			<div className="Container--center">
				<div className="Container--scale">
					<div className="Buffer--20px" />
					<div className="Container--space-between">
						<p className="Text--header">Latest Apps</p>
						<Link href={"/logicui"}>
							<Button variant="outline-dark">View More</Button>
						</Link>
					</div>
					<div className="Buffer--20px" />
					<Row>
						<LatestApps />
					</Row>
					<div className="Buffer--20px" />
				</div>
			</div>
			<div
				className="Container--center"
				style={{ backgroundColor: "#111111" }}
			>
				<div className="Container--scale">
					<div className="Buffer--20px" />
					<div className="Container--space-between">
						<p className="Text--header-light">Latest Content</p>
						<Button
							variant="outline-light"
							onClick={() =>
								window.open(
									"https://www.youtube.com/channel/UCNXGgdQeUBfkZTJCYLcGLfA",
									"_blank"
								)
							}
						>
							View More
						</Button>
					</div>
					<div className="Buffer--20px" />
					<Row>
						<LatestContent />
					</Row>
					<div className="Buffer--20px" />
				</div>
			</div>
		</>
	);
}

function LatestApps() {
	const itemArray = [];
	latestApps.forEach((item) => {
		itemArray.push(
			<Col sm={12} lg={6} key={item.image}>
				<Link href={"/" + item.codename}>
					<Card
						className="Card"
						bg="light"
						style={{ cursor: "pointer" }}
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

function LatestContent() {
	const itemArray = [];
	latestContent.forEach((item) =>
		itemArray.push(
			<Col sm={12} md={6} lg={4} key={item.link}>
				<a
					href={item.link}
					target="_blank"
					style={{ textDecoration: "none" }}
				>
					<Card className="Card" bg="dark" text="light">
						<Card.Img variant="top" src={item.image} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>{item.description}</Card.Text>
						</Card.Body>
					</Card>
				</a>
				<div className="Buffer--20px" />
			</Col>
		)
	);
	return itemArray;
}

const latestApps = [
	{
		image: ImageLMPLogo,
		codename: "musicplayer",
		name: "LogicUI Music Player",
		description:
			"Music player designed to make maintaining playlists simple. LMP also supports a variety of artist metadata delimiters and flexible Chinese character search.",
	},
	{
		image: ImageScreenshotLogo,
		codename: "screenshot",
		name: "Screenshot Framer",
		description:
			"Add a frame around your screenshot the smart way! Screenshot Framer intelligently adds a frame around your screenshots without skewing or cropping it.",
	},
];

const latestContent = [
	{
		link: "https://youtu.be/N1ylduD5n5s",
		image: "https://img.youtube.com/vi/N1ylduD5n5s/maxresdefault.jpg",
		title: "OPPO Reno7 Pro Review",
		description:
			"A well rounded device that satisfies the needs of most users.",
	},
	{
		link: "https://youtu.be/XP9SBccbNNw",
		image: "https://img.youtube.com/vi/XP9SBccbNNw/maxresdefault.jpg",
		title: "POCO X3 GT Review",
		description:
			"An in-depth look at POCO's latest device in the X3 series.",
	},
	{
		link: "https://youtu.be/8_sCbDhV7Ng",
		image: "https://img.youtube.com/vi/8_sCbDhV7Ng/maxresdefault.jpg",
		title: "POCO M3 Pro Review",
		description:
			"POCO's new budget device is here. But is it worth your money?",
	},
	{
		link: "https://youtu.be/MBFU7gva_KE",
		image: "https://img.youtube.com/vi/MBFU7gva_KE/maxresdefault.jpg",
		title: "OPPO Find X3 Pro Review",
		description:
			"Controversial design. Cool new innovations. Solid experience.",
	},
	{
		link: "https://youtu.be/3C4ikAkyONc",
		image: "https://img.youtube.com/vi/3C4ikAkyONc/maxresdefault.jpg",
		title: "Mi Band 6 Review",
		description: "The best budget fitness tracker just got even better!",
	},
	{
		link: "https://youtu.be/unkPpp72xzU",
		image: "https://img.youtube.com/vi/unkPpp72xzU/maxresdefault.jpg",
		title: "POCO X3 Pro Review",
		description:
			"The new flagship killer is here! Introducing the POCO X3 Pro",
	},
];
