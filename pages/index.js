import Head from "next/head";
import BannerImage from "../assets/logo_banner.png";
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
				<meta property="og:description" content="Official blog by 8K" />
				<meta property="og:image" content={BannerImage} />
			</Head>
		</>
	);
}
