import Head from "next/head";
import { useState } from "react";
import { Container } from "react-bootstrap";
import DarkModeSelector from "../../components/colorGeneratorTool/DarkModeSelector";
import Export from "../../components/colorGeneratorTool/Export";
import MainSetup from "../../components/colorGeneratorTool/MainSetup";
import Preview from "../../components/colorGeneratorTool/Preview";
import ToolHeader from "../../components/colorGeneratorTool/ToolHeader";

export default function ColorGenerator() {
	const [primary, setPrimary] = useState(defaultColors[0]);
	const [secondary, setSecondary] = useState(defaultColors[1]);
	const [tertiary, setTertiary] = useState(defaultColors[2]);
	const [error, setError] = useState(defaultColors[3]);
	const [background, setBackground] = useState(defaultColors[4]);
	const [outline, setOutline] = useState(defaultColors[5]);
	const [primaryDark, setPrimaryDark] = useState(defaultColorsDark[0]);
	const [secondaryDark, setSecondaryDark] = useState(defaultColorsDark[1]);
	const [tertiaryDark, setTertiaryDark] = useState(defaultColorsDark[2]);
	const [errorDark, setErrorDark] = useState(defaultColorsDark[3]);
	const [backgroundDark, setBackgroundDark] = useState(defaultColorsDark[4]);
	const [outlineDark, setOutlineDark] = useState(defaultColorsDark[5]);

	const [showDark, setShowDark] = useState(false);
	var previewBackgroundColor = "#E3ECF0";
	if (showDark) {
		previewBackgroundColor = "#24212D";
	}

	return (
		<>
			<Head>
				<title>Material 3 Color Generator | LogicUI</title>
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
					Select the key colors for your app. These colors are used to
					generate a color palette based on the Material Design 3
					guidelines.
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
					setPrimaryDark={setPrimaryDark}
					setSecondaryDark={setSecondaryDark}
					setTertiaryDark={setTertiaryDark}
					setErrorDark={setErrorDark}
					setBackground={setBackground}
					setOutline={setOutline}
					setBackgroundDark={setBackgroundDark}
					setOutlineDark={setOutlineDark}
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
					Preview and fine-tune the color palette before exporting.
				</p>
				<div
					style={{
						padding: 20,
						background: previewBackgroundColor,
						borderRadius: 10,
					}}
				>
					<DarkModeSelector
						showDark={showDark}
						setShowDark={setShowDark}
					/>
					<br />
					<Preview
						primary={showDark ? primaryDark : primary}
						secondary={showDark ? secondaryDark : secondary}
						tertiary={showDark ? tertiaryDark : tertiary}
						error={showDark ? errorDark : error}
						background={showDark ? backgroundDark : background}
						outline={showDark ? outlineDark : outline}
						setPrimary={showDark ? setPrimaryDark : setPrimary}
						setSecondary={
							showDark ? setSecondaryDark : setSecondary
						}
						setTertiary={showDark ? setTertiaryDark : setTertiary}
						setError={showDark ? setErrorDark : setError}
						setBackground={
							showDark ? setBackgroundDark : setBackground
						}
						setOutline={showDark ? setOutlineDark : setOutline}
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
					primaryDark={primaryDark}
					secondaryDark={secondaryDark}
					tertiaryDark={tertiaryDark}
					errorDark={errorDark}
					backgroundDark={backgroundDark}
					outlineDark={outlineDark}
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

const defaultColors = [
	["#6750A4", "#FFFFFF", "#CBC0E6", "#201933"],
	["#625B71", "#FFFFFF", "#DCD8E6", "#2C2933"],
	["#7D5260", "#FFFFFF", "#E6CDD5", "#332227"],
	["#B3261E", "#FFFFFF", "#E6ACA9", "#330B09"],
	["#FFFBFE", "#1C1B1F", "#FFFBFE", "#1C1B1F"],
	["#E7E0EC", "#49454E", "#79747E"],
];

const defaultColorsDark = [
	["#C0B1E6", "#30254C", "#403266", "#CBC0E6"],
	["#D8D2E6", "#433E4C", "#595366", "#DCD8E6"],
	["#E6C3CE", "#4C323B", "#66434F", "#E6CDD5"],
	["#E69490", "#4C100D", "#661511", "#E6ACA9"],
	["#1C1B1E", "#E6E1E5", "#1C1B1E", "#E6E1E5"],
	["#49454F", "#CAC4CF", "#948F99"],
];
