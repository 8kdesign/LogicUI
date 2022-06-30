import Head from "next/head";
import PrivacyPolicy from "../../components/PrivacyPolicy";

export default function Privacy() {
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
			<div className="Line--horizontal" />
			<div className="Buffer--20px" />
			<div className="Container--center">
				<div className="Container--scale">
					<div className="Buffer--20px" />
					<p className="Text--header-article">{app.name}</p>
					<div className="Buffer--10px" />
					<p className="Text--subheader">{app.slogan}</p>
					<PrivacyPolicy name={app.name} />
					<div className="Buffer--50px" />
				</div>
			</div>
		</>
	);
}

export const app = {
	codename: "lecturerecorder",
	name: "LogicUI Lecture Recorder",
	slogan: "Record & Work",
	description: "Record video in picture-in-picture mode.",
};
