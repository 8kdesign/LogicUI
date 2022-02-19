import Head from "next/head";
import Image from "next/image";
import MusicPlayer from "../../components/LogicUI/MusicPlayer";

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
			<Image
				src={app.image.default}
				className="Image--banner"
				layout="responsive"
				height={300}
			/>
			<div className="Line--horizontal" />
			<div className="Buffer--20px" />
			<div className="Container--center">
				<div className="Container--scale">
					<div className="Buffer--20px" />
					<p className="Text--header-article">{app.name}</p>
					<div className="Buffer--10px" />
					<p className="Text--subheader">{app.slogan}</p>
					<MusicPlayer />
					<div className="Buffer--50px" />
				</div>
			</div>
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
