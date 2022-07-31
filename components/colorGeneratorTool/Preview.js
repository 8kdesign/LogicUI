import ColorPalette from "./ColorPalette";
import ComponentPreview from "./ComponentPreview";

export default function Preview({
	primary,
	secondary,
	tertiary,
	error,
	background,
	outline,
	setPrimary,
	setSecondary,
	setTertiary,
	setError,
	setBackground,
	setOutline,
}) {
	return (
		<>
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
			<ColorPalette colors={error} setColors={setError} name={names[3]} />
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
			<br />
			<ComponentPreview
				primary={primary}
				secondary={secondary}
				tertiary={tertiary}
				error={error}
				background={background}
				outline={outline}
			/>
		</>
	);
}

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
