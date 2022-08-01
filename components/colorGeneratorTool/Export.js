import { useState } from "react";
import ExportCompose from "./ExportCompose";
import ExportCSS from "./ExportCSS";
import ExportFlutter from "./ExportFlutter";
import ExportManual from "./ExportManual";
import ExportXML from "./ExportXML";

export default function Export({
	primary,
	secondary,
	tertiary,
	error,
	background,
	outline,
	primaryDark,
	secondaryDark,
	tertiaryDark,
	errorDark,
	backgroundDark,
	outlineDark,
}) {
	const [mode, setMode] = useState(0);

	const modeSelectors = [];
	for (let i = 0; i < modes.length; i++) {
		modeSelectors.push(
			<div
				key={"Mode" + i}
				className="Toggle"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
				onClick={() => {
					setMode(i);
				}}
			>
				{i === mode ? (
					<p
						style={{
							marginBottom: 0,
							color: "white",
							background: "#307987",
							padding: "5px 20px",
							borderRadius: 5,
						}}
					>
						{modes[i]}
					</p>
				) : (
					<p
						style={{
							marginBottom: 0,
							padding: "5px 20px",
						}}
					>
						{modes[i]}
					</p>
				)}
			</div>
		);
	}

	function Content() {
		switch (mode) {
			case 0: {
				return (
					<ExportXML
						primary={primary}
						secondary={secondary}
						tertiary={tertiary}
						error={error}
						background={background}
						outline={outline}
						primaryDark={primaryDark}
						secondaryDark={secondaryDark}
						tertiaryDark={tertiaryDark}
						errorDark={errorDark}
						backgroundDark={backgroundDark}
						outlineDark={outlineDark}
					/>
				);
			}
			case 1: {
				return (
					<ExportCompose
						primary={primary}
						secondary={secondary}
						tertiary={tertiary}
						error={error}
						background={background}
						outline={outline}
						primaryDark={primaryDark}
						secondaryDark={secondaryDark}
						tertiaryDark={tertiaryDark}
						errorDark={errorDark}
						backgroundDark={backgroundDark}
						outlineDark={outlineDark}
					/>
				);
			}
			case 2: {
				return (
					<ExportFlutter
						primary={primary}
						secondary={secondary}
						tertiary={tertiary}
						error={error}
						background={background}
						outline={outline}
						primaryDark={primaryDark}
						secondaryDark={secondaryDark}
						tertiaryDark={tertiaryDark}
						errorDark={errorDark}
						backgroundDark={backgroundDark}
						outlineDark={outlineDark}
					/>
				);
			}
			case 3: {
				return (
					<ExportCSS
						primary={primary}
						secondary={secondary}
						tertiary={tertiary}
						error={error}
						background={background}
						outline={outline}
						primaryDark={primaryDark}
						secondaryDark={secondaryDark}
						tertiaryDark={tertiaryDark}
						errorDark={errorDark}
						backgroundDark={backgroundDark}
						outlineDark={outlineDark}
					/>
				);
			}
			case 4: {
				return (
					<ExportManual
						primary={primary}
						secondary={secondary}
						tertiary={tertiary}
						error={error}
						background={background}
						outline={outline}
						primaryDark={primaryDark}
						secondaryDark={secondaryDark}
						tertiaryDark={tertiaryDark}
						errorDark={errorDark}
						backgroundDark={backgroundDark}
						outlineDark={outlineDark}
					/>
				);
			}
			default: {
				return <p>Coming Soon</p>;
			}
		}
	}

	return (
		<div
			style={{
				padding: 20,
				background: "#E3ECF0",
				borderRadius: 10,
				marginBottom: 50,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignItems: "center",
				}}
			>
				{modeSelectors}
			</div>
			<br />
			<Content />
		</div>
	);
}

const modes = ["XML", "Compose", "Flutter", "CSS", "Manual"];
