import Head from "next/head";
import Image from "next/image";
import Screenshot from "../../components/LogicUI/Screenshot";

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
					<Screenshot />
					<div className="Buffer--50px" />
				</div>
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
