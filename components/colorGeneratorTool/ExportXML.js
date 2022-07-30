import { Files } from "react-bootstrap-icons";
import { toast } from "react-hot-toast";

export default function ExportXML({
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
	const step1 =
		'<?xml version="1.0" encoding="utf-8"?>\n' +
		"<resources>\n" +
		'    <color name="primary">' +
		primary[0] +
		"</color>\n" +
		'    <color name="onPrimary">' +
		primary[1] +
		"</color>\n" +
		'    <color name="primaryContainer">' +
		primary[2] +
		"</color>\n" +
		'    <color name="onPrimaryContainer">' +
		primary[3] +
		"</color>\n" +
		'    <color name="secondary">' +
		secondary[0] +
		"</color>\n" +
		'    <color name="onSecondary">' +
		secondary[1] +
		"</color>\n" +
		'    <color name="secondaryContainer">' +
		secondary[2] +
		"</color>\n" +
		'    <color name="onSecondaryContainer">' +
		secondary[3] +
		"</color>\n" +
		'    <color name="tertiary">' +
		tertiary[0] +
		"</color>\n" +
		'    <color name="onTertiary">' +
		tertiary[1] +
		"</color>\n" +
		'    <color name="tertiaryContainer">' +
		tertiary[2] +
		"</color>\n" +
		'    <color name="onTertiaryContainer">' +
		tertiary[3] +
		"</color>\n" +
		'    <color name="error">' +
		error[0] +
		"</color>\n" +
		'    <color name="onError">' +
		error[1] +
		"</color>\n" +
		'    <color name="errorContainer">' +
		error[2] +
		"</color>\n" +
		'    <color name="onErrorContainer">' +
		error[3] +
		"</color>\n" +
		'    <color name="background">' +
		background[0] +
		"</color>\n" +
		'    <color name="onBackground">' +
		background[1] +
		"</color>\n" +
		'    <color name="surface">' +
		background[2] +
		"</color>\n" +
		'    <color name="onSurface">' +
		background[3] +
		"</color>\n" +
		'    <color name="surfaceVariant">' +
		outline[0] +
		"</color>\n" +
		'    <color name="onSurfaceVariant">' +
		outline[1] +
		"</color>\n" +
		'    <color name="outline">' +
		outline[2] +
		"</color>\n" +
		"</resources>";

	const step2 =
		'<?xml version="1.0" encoding="utf-8"?>\n' +
		"<resources>\n" +
		'    <color name="primary">' +
		primaryDark[0] +
		"</color>\n" +
		'    <color name="onPrimary">' +
		primaryDark[1] +
		"</color>\n" +
		'    <color name="primaryContainer">' +
		primaryDark[2] +
		"</color>\n" +
		'    <color name="onPrimaryContainer">' +
		primaryDark[3] +
		"</color>\n" +
		'    <color name="secondary">' +
		secondaryDark[0] +
		"</color>\n" +
		'    <color name="onSecondary">' +
		secondaryDark[1] +
		"</color>\n" +
		'    <color name="secondaryContainer">' +
		secondaryDark[2] +
		"</color>\n" +
		'    <color name="onSecondaryContainer">' +
		secondaryDark[3] +
		"</color>\n" +
		'    <color name="tertiary">' +
		tertiaryDark[0] +
		"</color>\n" +
		'    <color name="onTertiary">' +
		tertiaryDark[1] +
		"</color>\n" +
		'    <color name="tertiaryContainer">' +
		tertiaryDark[2] +
		"</color>\n" +
		'    <color name="onTertiaryContainer">' +
		tertiaryDark[3] +
		"</color>\n" +
		'    <color name="error">' +
		errorDark[0] +
		"</color>\n" +
		'    <color name="onError">' +
		errorDark[1] +
		"</color>\n" +
		'    <color name="errorContainer">' +
		errorDark[2] +
		"</color>\n" +
		'    <color name="onErrorContainer">' +
		errorDark[3] +
		"</color>\n" +
		'    <color name="background">' +
		backgroundDark[0] +
		"</color>\n" +
		'    <color name="onBackground">' +
		backgroundDark[1] +
		"</color>\n" +
		'    <color name="surface">' +
		backgroundDark[2] +
		"</color>\n" +
		'    <color name="onSurface">' +
		backgroundDark[3] +
		"</color>\n" +
		'    <color name="surfaceVariant">' +
		outlineDark[0] +
		"</color>\n" +
		'    <color name="onSurfaceVariant">' +
		outlineDark[1] +
		"</color>\n" +
		'    <color name="outline">' +
		outlineDark[2] +
		"</color>\n" +
		"</resources>";

	const step3 =
		'<item name="colorPrimary">@color/primary</item>\n' +
		'<item name="colorOnPrimary">@color/onPrimary</item>\n' +
		'<item name="colorPrimaryContainer">@color/primaryContainer</item>\n' +
		'<item name="colorOnPrimaryContainer">@color/onPrimaryContainer</item>\n' +
		'<item name="colorSecondary">@color/secondary</item>\n' +
		'<item name="colorOnSecondary">@color/onSecondary</item>\n' +
		'<item name="colorSecondaryContainer">@color/secondaryContainer</item>\n' +
		'<item name="colorOnSecondaryContainer">@color/onSecondaryContainer</item>\n' +
		'<item name="colorTertiary">@color/tertiary</item>\n' +
		'<item name="colorOnTertiary">@color/onTertiary</item>\n' +
		'<item name="colorTertiaryContainer">@color/tertiaryContainer</item>\n' +
		'<item name="colorOnTertiaryContainer">@color/onTertiaryContainer</item>\n' +
		'<item name="colorError">@color/error</item>\n' +
		'<item name="colorOnError">@color/onError</item>\n' +
		'<item name="colorErrorContainer">@color/errorContainer</item>\n' +
		'<item name="colorOnErrorContainer">@color/onErrorContainer</item>\n' +
		'<item name="android:colorBackground">@color/background</item>\n' +
		'<item name="colorOnBackground">@color/onBackground</item>\n' +
		'<item name="colorSurface">@color/surface</item>\n' +
		'<item name="colorOnSurface">@color/onSurface</item>\n' +
		'<item name="colorSurfaceVariant">@color/surfaceVariant</item>\n' +
		'<item name="colorOnSurfaceVariant">@color/onSurfaceVariant</item>\n' +
		'<item name="colorOutline">@color/outline</item>';

	return (
		<div>
			<p style={{ fontSize: 27, marginBottom: 10 }}>
				Step #1: Replace colors.xml
				<Files
					className="Toggle"
					size={20}
					style={{ marginLeft: 10 }}
					onClick={() => {
						navigator.clipboard.writeText(step1);
						toast("Copied to clipboard");
					}}
				/>
			</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
					whiteSpace: "pre",
				}}
			>
				<p style={{ marginBottom: 0 }}>{step1}</p>
			</div>
			<p style={{ fontSize: 27, marginBottom: 10, marginTop: 40 }}>
				{"Step #2: Replace colors.xml (Night)"}
				<Files
					className="Toggle"
					size={20}
					style={{ marginLeft: 10 }}
					onClick={() => {
						navigator.clipboard.writeText(step2);
						toast("Copied to clipboard");
					}}
				/>
			</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
					whiteSpace: "pre",
				}}
			>
				<p style={{ marginBottom: 0 }}>{step2}</p>
			</div>
			<p
				style={{
					fontSize: 27,
					marginBottom: 10,
					marginTop: 40,
				}}
			>
				Step #3: Add to theme in themes.xml
				<Files
					className="Toggle"
					size={20}
					style={{ marginLeft: 10 }}
					onClick={() => {
						navigator.clipboard.writeText(step3);
						toast("Copied to clipboard");
					}}
				/>
			</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
					whiteSpace: "pre",
				}}
			>
				<p style={{ marginBottom: 0 }}>{step3}</p>
			</div>
		</div>
	);
}
