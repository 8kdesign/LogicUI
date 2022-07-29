import { useState } from "react";
import ExportCompose from "./ExportCompose";
import ExportXML from "./ExportXML";

export default function Export({
	primary,
	secondary,
	tertiary,
	error,
	background,
	outline,
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
				<input
					type="radio"
					style={{ marginRight: 10 }}
					checked={mode === i}
					onChange={() => {}}
				/>
				<p style={{ marginRight: 30 }}>{modes[i]}</p>
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
				marginBottom: 100,
			}}
		>
			<div
				style={{
					overflowX: "auto",
					display: "flex",
					flexDirection: "row",
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

const modes = ["XML", "Compose"];
