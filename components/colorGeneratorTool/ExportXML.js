export default function ExportXML({
	primary,
	secondary,
	tertiary,
	error,
	background,
	outline,
}) {
	return (
		<div style={{ whiteSpace: "pre" }}>
			<p style={{ fontSize: 27, marginBottom: 10 }}>Replace colors.xml</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
				}}
			>
				<p>
					{'<?xml version="1.0" encoding="utf-8"?>\n' +
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
						"</resources>"}
				</p>
			</div>
			<p
				style={{
					fontSize: 27,
					marginBottom: 10,
					marginTop: 40,
				}}
			>
				Add to theme in themes.xml
			</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
				}}
			>
				<p>
					{'<item name="colorPrimary">@color/primary</item>\n' +
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
						'<item name="colorOutline">@color/outline</item>'}
				</p>
			</div>
		</div>
	);
}
