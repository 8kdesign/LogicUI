import Head from "next/head";
import { useState } from "react";
import { Container } from "react-bootstrap";
import ColorPalette from "../../../components/colorGeneratorTool/ColorPalette";
import Export from "../../../components/colorGeneratorTool/Export";
import MainSetup from "../../../components/colorGeneratorTool/MainSetup";
import ToolHeader from "../../../components/colorGeneratorTool/ToolHeader";

export default function ColorGenerator() {
	const [primary, setPrimary] = useState(defaultColors[0]);
	const [secondary, setSecondary] = useState(defaultColors[1]);
	const [tertiary, setTertiary] = useState(defaultColors[2]);
	const [error, setError] = useState(defaultColors[3]);
	const [background, setBackground] = useState(defaultColors[4]);
	const [outline, setOutline] = useState(defaultColors[5]);

	return (
		<>
			<Head>
				<title>Color Generator | LogicUI</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:title" content="Color Generator | LogicUI" />
				<meta
					property="description"
					content="Color generator for Material Design 3"
				/>
				<meta
					property="og:description"
					content="Color generator for Material Design 3"
				/>
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Fbanner.jpg?alt=media&token=23d3abfa-56cb-41be-857f-e45d9b13413d"
				/>
			</Head>
			<Container>
				<ToolHeader tool={tool} />
				<p style={{ fontSize: 27, marginTop: 20, marginBottom: 0 }}>
					{"1) Select Main Colors"}
				</p>
				<p
					style={{
						fontSize: 17,
						fontWeight: 300,
						marginTop: 10,
						marginBottom: 20,
					}}
				>
					Selected the key colors for your app. These colors will be
					used to generate a suggested color palette.
				</p>
				<MainSetup
					primary={primary}
					secondary={secondary}
					tertiary={tertiary}
					error={error}
					setPrimary={setPrimary}
					setSecondary={setSecondary}
					setTertiary={setTertiary}
					setError={setError}
				/>
				<br />
				<p style={{ fontSize: 27, marginTop: 20, marginBottom: 0 }}>
					{"2) Preview & Modify Colors"}
				</p>
				<p
					style={{
						fontSize: 17,
						fontWeight: 300,
						marginTop: 10,
						marginBottom: 20,
					}}
				>
					Preview and modify the color palette before exporting.
				</p>
				<div
					style={{
						padding: 20,
						background: "#E3ECF0",
						borderRadius: 10,
					}}
				>
					<ColorPalette
						colors={primary}
						setColors={setPrimary}
						name={names[0]}
					/>
					<ColorPalette
						colors={secondary}
						setColors={setSecondary}
						name={names[1]}
					/>
					<ColorPalette
						colors={tertiary}
						setColors={setTertiary}
						name={names[2]}
					/>
					<ColorPalette
						colors={error}
						setColors={setError}
						name={names[3]}
					/>
					<br />
					<ColorPalette
						colors={background}
						setColors={setBackground}
						name={names[4]}
					/>
					<ColorPalette
						colors={outline}
						setColors={setOutline}
						name={names[5]}
					/>
				</div>
				<br />
				<p style={{ fontSize: 27, marginTop: 20, marginBottom: 0 }}>
					{"3) Export to Code"}
				</p>
				<p
					style={{
						fontSize: 17,
						fontWeight: 300,
						marginTop: 10,
						marginBottom: 20,
					}}
				>
					Select the platform which you are building for and copy and
					paste the code below into the specified files.
				</p>
				<Export
					primary={primary}
					secondary={secondary}
					tertiary={tertiary}
					error={error}
					background={background}
					outline={outline}
				/>
			</Container>
		</>
	);
}

const tool = {
	name: "Material 3 Color Generator",
	description:
		"Select a color palette for your app and generate code to import the colors.",
};

const names = [
	["Primary", "On Primary", "Primary Container", "On Primary Container"],
	[
		"Secondary",
		"On Secondary",
		"Secondary Container",
		"On Secondary Container",
	],
	["Tertiary", "On Tertiary", "Tertiary Container", "On Tertiary Container"],
	["Error", "On Error", "Error Container", "On Error Container"],
	["Background", "On Background", "Surface", "On Surface"],
	["Surface Variant", "On Surface Variant", "Outline"],
];

const defaultColors = [
	["#6750A4", "#FFFFFF", "#CBC0E6", "#201933"],
	["#625B71", "#FFFFFF", "#DCD8E6", "#2C2933"],
	["#7D5260", "#FFFFFF", "#E6CDD5", "#332227"],
	["#B3261E", "#FFFFFF", "#E6ACA9", "#330B09"],
	["#FCFCFC", "#1A1C1D", "#FCFCFC", "#1A1C1D"],
	["#DFE3E5", "#434749", "#767778"],
];
