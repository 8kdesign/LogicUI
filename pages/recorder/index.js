import Head from "next/head";
import Image from "next/image";
import Recorder from "../../components/LogicUI/Recorder";

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
			<div className="Image--banner">
				<Image
					src={app.image.default}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="Line--horizontal" />
			<div className="Buffer--20px" />
			<div className="Container--center">
				<div className="Container--scale">
					<div className="Buffer--20px" />
					<p className="Text--header-article">{app.name}</p>
					<div className="Buffer--10px" />
					<p className="Text--subheader">{app.slogan}</p>
					<Recorder />
					<div className="Buffer--50px" />
				</div>
			</div>
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
