import { CopyAllRounded } from "@mui/icons-material";
import { toast } from "react-hot-toast";

export default function ExportCSS({
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
		":root {\n" +
		"    --primary: " +
		primary[0] +
		";\n" +
		"    --on-primary: " +
		primary[1] +
		";\n" +
		"    --primary-container: " +
		primary[2] +
		";\n" +
		"    --on-primary-container: " +
		primary[3] +
		";\n" +
		"    --secondary: " +
		secondary[0] +
		";\n" +
		"    --on-secondary: " +
		secondary[1] +
		";\n" +
		"    --secondary-container: " +
		secondary[2] +
		";\n" +
		"    --on-secondary-container: " +
		secondary[3] +
		";\n" +
		"    --tertiary: " +
		tertiary[0] +
		";\n" +
		"    --on-tertiary: " +
		tertiary[1] +
		";\n" +
		"    --tertiary-container: " +
		tertiary[2] +
		";\n" +
		"    --on-tertiary-container: " +
		tertiary[3] +
		";\n" +
		"    --error: " +
		error[0] +
		";\n" +
		"    --on-error: " +
		error[1] +
		";\n" +
		"    --error-container: " +
		error[2] +
		";\n" +
		"    --on-error-container: " +
		error[3] +
		";\n" +
		"    --background: " +
		background[0] +
		";\n" +
		"    --on-background: " +
		background[1] +
		";\n" +
		"    --surface: " +
		background[2] +
		";\n" +
		"    --on-surface: " +
		background[3] +
		";\n" +
		"    --surface-variant: " +
		outline[0] +
		";\n" +
		"    --on-surface-variant: " +
		outline[1] +
		";\n" +
		"    --outline: " +
		outline[2] +
		";\n" +
		"    --primary-dark: " +
		primaryDark[0] +
		";\n" +
		"    --on-primary-dark: " +
		primaryDark[1] +
		";\n" +
		"    --primary-container-dark: " +
		primaryDark[2] +
		";\n" +
		"    --on-primary-container-dark: " +
		primaryDark[3] +
		";\n" +
		"    --secondary-dark: " +
		secondaryDark[0] +
		";\n" +
		"    --on-secondary-dark: " +
		secondaryDark[1] +
		";\n" +
		"    --secondary-container-dark: " +
		secondaryDark[2] +
		";\n" +
		"    --on-secondary-container-dark: " +
		secondaryDark[3] +
		";\n" +
		"    --tertiary-dark: " +
		tertiaryDark[0] +
		";\n" +
		"    --on-tertiary-dark: " +
		tertiaryDark[1] +
		";\n" +
		"    --tertiary-container-dark: " +
		tertiaryDark[2] +
		";\n" +
		"    --on-tertiary-container-dark: " +
		tertiaryDark[3] +
		";\n" +
		"    --error-dark: " +
		errorDark[0] +
		";\n" +
		"    --on-error-dark: " +
		errorDark[1] +
		";\n" +
		"    --error-container-dark: " +
		errorDark[2] +
		";\n" +
		"    --on-error-container-dark: " +
		errorDark[3] +
		";\n" +
		"    --background-dark: " +
		backgroundDark[0] +
		";\n" +
		"    --on-background-dark: " +
		backgroundDark[1] +
		";\n" +
		"    --surface-dark: " +
		backgroundDark[2] +
		";\n" +
		"    --on-surface-dark: " +
		backgroundDark[3] +
		";\n" +
		"    --surface-variant-dark: " +
		outlineDark[0] +
		";\n" +
		"    --on-surface-variant-dark: " +
		outlineDark[1] +
		";\n" +
		"    --outline-dark: " +
		outlineDark[2] +
		";\n" +
		"}";

	return (
		<div>
			<p style={{ fontSize: 27, marginBottom: 10 }}>
				Step #1: Add to your CSS file
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
