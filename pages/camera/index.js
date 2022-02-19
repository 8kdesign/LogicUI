import Head from "next/head";
import Image from "next/image";
import Camera from "../../components/LogicUI/Camera";

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
					<Camera />
					<div className="Buffer--50px" />
				</div>
			</div>
		</>
	);
}

export const app = {
	image: require("../../assets/logicui/camera/banner.jpg"),
	codename: "camera",
	name: "LogicUI Camera Concept",
	slogan: "One-Handed Convenience",
	description:
		"Camera app designed for one-handed use. Includes optimizations for single-hand control of focus and exposure, as well as triggering of shutter with a smile.",
};
