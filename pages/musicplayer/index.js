import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import ImageMain from "../../assets/logicui/lmp/main.png";
import ImagePlayStore from "../../assets/google-play-badge.png";
import ImageMusicControl from "../../assets/logicui/lmp/music_control.png";

export default function LogicUIMusicPlayer() {
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
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Flmp_banner.jpg?alt=media&token=3084768a-975c-4cd0-89b2-68ec8ace5ead"
				/>
			</Head>
			<div
				className="Container--background Color--musicplayer"
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
			<div style={{ backgroundColor: "rgb(255, 240, 240)" }}>
				<Container className="Container--center">
					<div className="Buffer--50px" />
					<div className="Buffer--50px" />
					<p
						className="Text--header"
						style={{ padding: 0, textAlign: "center" }}
					>
						Get LogicUI Music Player on Play Store now!
					</p>
					<div className="Buffer--20px" />
					<a
						href="https://play.google.com/store/apps/details?id=com.logicui.musicplayer"
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
			</div>

			<Container>
				<div className="Buffer--50px" />
				<p className="Text--header-article">Key Features</p>
				<div className="Buffer--20px" />
				<Row style={{ width: "100%" }}>
					<Col
						xs={12}
						sm={12}
						md={12}
						lg={4}
						style={{ paddingBottom: 10, display: "flex" }}
					>
						<div className="Container--feature">
							<p className="Text--subheader">Flexible Playlist</p>
							<p className="Text--paragraph">
								LogicUI Music Player (LMP) lets you add artists,
								albums or individual tracks to a playlist. Any
								track corresponding to the selected artists and
								albums will automatically be added to the
								playlist when the app is restarted.
							</p>
						</div>
					</Col>
					<Col
						xs={12}
						sm={12}
						md={12}
						lg={4}
						style={{ paddingBottom: 10, display: "flex" }}
					>
						<div className="Container--feature">
							<p className="Text--subheader">
								Intelligent Sorting
							</p>
							<p className="Text--paragraph">
								LMP supports a variety of delimiters for artist
								metadata. You can use &apos; + &apos;, &apos; /
								&apos; or &apos;;&apos; to seperate artist names
								and the app will be able to allocate each track
								to the corresponding artists properly. Take note
								of the blankspace at the front and back for the
								first two delimiters.
							</p>
						</div>
					</Col>
					<Col
						xs={12}
						sm={12}
						md={12}
						lg={4}
						style={{ paddingBottom: 10, display: "flex" }}
					>
						<div className="Container--feature">
							<p className="Text--subheader">
								Chinese Optimizations
							</p>
							<p className="Text--paragraph">
								Optimizations has been done for Chinese
								characters, from sorting of tracks by pinyin to
								the way search is handled. Both traditional and
								simplified Chinese characters are treated as
								equal in search, allowing for a more flexible
								experience when searching.
							</p>
						</div>
					</Col>
				</Row>
				<div className="Buffer--50px" />
				<div className="Container--center">
					<Image src={ImageMusicControl} />
				</div>
				<div className="Buffer--50px" />
			</Container>
		</>
	);
}

export const app = {
	image: require("../../assets/logicui/lmp/lmp_banner.jpg"),
	codename: "musicplayer",
	name: "LogicUI Music Player",
	slogan: "Work Less, Listen More",
	description:
		"Music player designed to make maintaining playlists simple. LMP also supports a variety of artist metadata delimiters and flexible Chinese character search.",
};
