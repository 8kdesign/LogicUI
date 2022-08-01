import { CopyAllRounded } from "@mui/icons-material";
import { toast } from "react-hot-toast";

export default function ExportFlutter({
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
		"import 'package:flutter/material.dart';\n\n" +
		"const lightColorScheme = ColorScheme(\n" +
		"    brightness: Brightness.light,\n" +
		"    primary: Color(0xFF" +
		primary[0].substring(1) +
		"),\n" +
		"    onPrimary: Color(0xFF" +
		primary[1].substring(1) +
		"),\n" +
		"    primaryContainer: Color(0xFF" +
		primary[2].substring(1) +
		"),\n" +
		"    onPrimaryContainer: Color(0xFF" +
		primary[3].substring(1) +
		"),\n" +
		"    secondary: Color(0xFF" +
		secondary[0].substring(1) +
		"),\n" +
		"    onSecondary: Color(0xFF" +
		secondary[1].substring(1) +
		"),\n" +
		"    secondaryContainer: Color(0xFF" +
		secondary[2].substring(1) +
		"),\n" +
		"    onSecondaryContainer: Color(0xFF" +
		secondary[3].substring(1) +
		"),\n" +
		"    tertiary: Color(0xFF" +
		tertiary[0].substring(1) +
		"),\n" +
		"    onTertiary: Color(0xFF" +
		tertiary[1].substring(1) +
		"),\n" +
		"    tertiaryContainer: Color(0xFF" +
		tertiary[2].substring(1) +
		"),\n" +
		"    onTertiaryContainer: Color(0xFF" +
		tertiary[3].substring(1) +
		"),\n" +
		"    error: Color(0xFF" +
		error[0].substring(1) +
		"),\n" +
		"    onError: Color(0xFF" +
		error[1].substring(1) +
		"),\n" +
		"    errorContainer: Color(0xFF" +
		error[2].substring(1) +
		"),\n" +
		"    onErrorContainer: Color(0xFF" +
		error[3].substring(1) +
		"),\n" +
		"    background: Color(0xFF" +
		background[0].substring(1) +
		"),\n" +
		"    onBackground: Color(0xFF" +
		background[1].substring(1) +
		"),\n" +
		"    surface: Color(0xFF" +
		background[2].substring(1) +
		"),\n" +
		"    onSurface: Color(0xFF" +
		background[3].substring(1) +
		"),\n" +
		"    surfaceVariant: Color(0xFF" +
		outline[0].substring(1) +
		"),\n" +
		"    onSurfaceVariant: Color(0xFF" +
		outline[1].substring(1) +
		"),\n" +
		"    outline: Color(0xFF" +
		outline[2].substring(1) +
		"),\n" +
		");\n\n" +
		"const darkColorScheme = ColorScheme(\n" +
		"    brightness: Brightness.dark,\n" +
		"    primary: Color(0xFF" +
		primaryDark[0].substring(1) +
		"),\n" +
		"    onPrimary: Color(0xFF" +
		primaryDark[1].substring(1) +
		"),\n" +
		"    primaryContainer: Color(0xFF" +
		primaryDark[2].substring(1) +
		"),\n" +
		"    onPrimaryContainer: Color(0xFF" +
		primaryDark[3].substring(1) +
		"),\n" +
		"    secondary: Color(0xFF" +
		secondaryDark[0].substring(1) +
		"),\n" +
		"    onSecondary: Color(0xFF" +
		secondaryDark[1].substring(1) +
		"),\n" +
		"    secondaryContainer: Color(0xFF" +
		secondaryDark[2].substring(1) +
		"),\n" +
		"    onSecondaryContainer: Color(0xFF" +
		secondaryDark[3].substring(1) +
		"),\n" +
		"    tertiary: Color(0xFF" +
		tertiaryDark[0].substring(1) +
		"),\n" +
		"    onTertiary: Color(0xFF" +
		tertiaryDark[1].substring(1) +
		"),\n" +
		"    tertiaryContainer: Color(0xFF" +
		tertiaryDark[2].substring(1) +
		"),\n" +
		"    onTertiaryContainer: Color(0xFF" +
		tertiaryDark[3].substring(1) +
		"),\n" +
		"    error: Color(0xFF" +
		errorDark[0].substring(1) +
		"),\n" +
		"    onError: Color(0xFF" +
		errorDark[1].substring(1) +
		"),\n" +
		"    errorContainer: Color(0xFF" +
		errorDark[2].substring(1) +
		"),\n" +
		"    onErrorContainer: Color(0xFF" +
		errorDark[3].substring(1) +
		"),\n" +
		"    background: Color(0xFF" +
		backgroundDark[0].substring(1) +
		"),\n" +
		"    onBackground: Color(0xFF" +
		backgroundDark[1].substring(1) +
		"),\n" +
		"    surface: Color(0xFF" +
		backgroundDark[2].substring(1) +
		"),\n" +
		"    onSurface: Color(0xFF" +
		backgroundDark[3].substring(1) +
		"),\n" +
		"    surfaceVariant: Color(0xFF" +
		outlineDark[0].substring(1) +
		"),\n" +
		"    onSurfaceVariant: Color(0xFF" +
		outlineDark[1].substring(1) +
		"),\n" +
		"    outline: Color(0xFF" +
		outlineDark[2].substring(1) +
		"),\n" +
		");";

	return (
		<div>
			<p style={{ fontSize: 27, marginBottom: 10 }}>
				Step #1: Add to your project dart file
				<CopyAllRounded
					className="Toggle"
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
		</div>
	);
}
