import { useState } from "react";
import { Container } from "react-bootstrap";
import ColorPalette from "../../../components/tools/ColorPalette";
import Export from "../../../components/tools/Export";
import ToolHeader from "../../../components/tools/ToolHeader";

export default function ColorGenerator() {
	const [primary, setPrimary] = useState(defaultColors[0]);
	const [secondary, setSecondary] = useState(defaultColors[1]);
	const [tertiary, setTertiary] = useState(defaultColors[2]);
	const [error, setError] = useState(defaultColors[3]);
	const [background, setBackground] = useState(defaultColors[4]);
	const [outline, setOutline] = useState(defaultColors[5]);

	return (
		<Container>
			<ToolHeader tool={tool} />
			<div
				style={{ padding: 20, background: "#E3ECF0", borderRadius: 10 }}
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
			<p style={{ fontSize: 27, marginTop: 20, marginBottom: 20 }}>
				Export to Code
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
	);
}

const tool = {
	name: "App Color Generator",
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
	["#256677", "#FFFFFF", "#AFECFF", "#001F27"],
	["#546064", "#FFFFFF", "#D8E5EA", "#111D21"],
	["#5B5D71", "#FFFFFF", "#E1E1F9", "#181A2B"],
	["#B3261E", "#FFFFFF", "#F9DEDC", "#410E0B"],
	["#FCFCFC", "#1A1C1D", "#FCFCFC", "#1A1C1D"],
	["#DFE3E5", "#434749", "#767778"],
];
