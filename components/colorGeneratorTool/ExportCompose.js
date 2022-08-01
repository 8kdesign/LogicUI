import { CopyAllRounded } from "@mui/icons-material";
import { toast } from "react-hot-toast";

export default function ExportCompose({
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
		"val Primary = Color(0xFF" +
		primary[0].substring(1) +
		")\n" +
		"val OnPrimary = Color(0xFF" +
		primary[1].substring(1) +
		")\n" +
		"val PrimaryContainer = Color(0xFF" +
		primary[2].substring(1) +
		")\n" +
		"val OnPrimaryContainer = Color(0xFF" +
		primary[3].substring(1) +
		")\n" +
		"val Secondary = Color(0xFF" +
		secondary[0].substring(1) +
		")\n" +
		"val OnSecondary = Color(0xFF" +
		secondary[1].substring(1) +
		")\n" +
		"val SecondaryContainer = Color(0xFF" +
		secondary[2].substring(1) +
		")\n" +
		"val OnSecondaryContainer = Color(0xFF" +
		secondary[3].substring(1) +
		")\n" +
		"val Tertiary = Color(0xFF" +
		tertiary[0].substring(1) +
		")\n" +
		"val OnTertiary = Color(0xFF" +
		tertiary[1].substring(1) +
		")\n" +
		"val TertiaryContainer = Color(0xFF" +
		tertiary[2].substring(1) +
		")\n" +
		"val OnTertiaryContainer = Color(0xFF" +
		tertiary[3].substring(1) +
		")\n" +
		"val Error = Color(0xFF" +
		error[0].substring(1) +
		")\n" +
		"val OnError = Color(0xFF" +
		error[1].substring(1) +
		")\n" +
		"val ErrorContainer = Color(0xFF" +
		error[2].substring(1) +
		")\n" +
		"val OnErrorContainer = Color(0xFF" +
		error[3].substring(1) +
		")\n" +
		"val Background = Color(0xFF" +
		background[0].substring(1) +
		")\n" +
		"val OnBackground = Color(0xFF" +
		background[1].substring(1) +
		")\n" +
		"val Surface = Color(0xFF" +
		background[2].substring(1) +
		")\n" +
		"val OnSurface = Color(0xFF" +
		background[3].substring(1) +
		")\n" +
		"val SurfaceVariant = Color(0xFF" +
		outline[0].substring(1) +
		")\n" +
		"val OnSurfaceVariant = Color(0xFF" +
		outline[1].substring(1) +
		")\n" +
		"val Outline = Color(0xFF" +
		outline[2].substring(1) +
		")\n\n" +
		"val PrimaryDark = Color(0xFF" +
		primaryDark[0].substring(1) +
		")\n" +
		"val OnPrimaryDark = Color(0xFF" +
		primaryDark[1].substring(1) +
		")\n" +
		"val PrimaryContainerDark = Color(0xFF" +
		primaryDark[2].substring(1) +
		")\n" +
		"val OnPrimaryContainerDark = Color(0xFF" +
		primaryDark[3].substring(1) +
		")\n" +
		"val SecondaryDark = Color(0xFF" +
		secondaryDark[0].substring(1) +
		")\n" +
		"val OnSecondaryDark = Color(0xFF" +
		secondaryDark[1].substring(1) +
		")\n" +
		"val SecondaryContainerDark = Color(0xFF" +
		secondaryDark[2].substring(1) +
		")\n" +
		"val OnSecondaryContainerDark = Color(0xFF" +
		secondaryDark[3].substring(1) +
		")\n" +
		"val TertiaryDark = Color(0xFF" +
		tertiaryDark[0].substring(1) +
		")\n" +
		"val OnTertiaryDark = Color(0xFF" +
		tertiaryDark[1].substring(1) +
		")\n" +
		"val TertiaryContainerDark = Color(0xFF" +
		tertiaryDark[2].substring(1) +
		")\n" +
		"val OnTertiaryContainerDark = Color(0xFF" +
		tertiaryDark[3].substring(1) +
		")\n" +
		"val ErrorDark = Color(0xFF" +
		errorDark[0].substring(1) +
		")\n" +
		"val OnErrorDark = Color(0xFF" +
		errorDark[1].substring(1) +
		")\n" +
		"val ErrorContainerDark = Color(0xFF" +
		errorDark[2].substring(1) +
		")\n" +
		"val OnErrorContainerDark = Color(0xFF" +
		errorDark[3].substring(1) +
		")\n" +
		"val BackgroundDark = Color(0xFF" +
		backgroundDark[0].substring(1) +
		")\n" +
		"val OnBackgroundDark = Color(0xFF" +
		backgroundDark[1].substring(1) +
		")\n" +
		"val SurfaceDark = Color(0xFF" +
		backgroundDark[2].substring(1) +
		")\n" +
		"val OnSurfaceDark = Color(0xFF" +
		backgroundDark[3].substring(1) +
		")\n" +
		"val SurfaceVariantDark = Color(0xFF" +
		outlineDark[0].substring(1) +
		")\n" +
		"val OnSurfaceVariantDark = Color(0xFF" +
		outlineDark[1].substring(1) +
		")\n" +
		"val OutlineDark = Color(0xFF" +
		outlineDark[2].substring(1) +
		")\n";

	const step2 =
		"private val lightColorScheme = lightColorScheme(\n" +
		"    primary = Primary,\n" +
		"    onPrimary = OnPrimary,\n" +
		"    primaryContainer = PrimaryContainer,\n" +
		"    onPrimaryContainer = OnPrimaryContainer,\n" +
		"    secondary = Secondary,\n" +
		"    onSecondary = OnSecondary,\n" +
		"    secondaryContainer = SecondaryContainer,\n" +
		"    onSecondaryContainer = OnSecondaryContainer,\n" +
		"    tertiary = Tertiary,\n" +
		"    onTertiary = OnTertiary,\n" +
		"    tertiaryContainer = TertiaryContainer,\n" +
		"    onTertiaryContainer = OnTertiaryContainer,\n" +
		"    error = Error,\n" +
		"    onError = OnError,\n" +
		"    errorContainer = ErrorContainer,\n" +
		"    onErrorContainer = OnErrorContainer,\n" +
		"    background = Background,\n" +
		"    onBackground = OnBackground,\n" +
		"    surface = Surface,\n" +
		"    onSurface = OnSurface,\n" +
		"    surfaceVariant = SurfaceVariant,\n" +
		"    onSurfaceVariant = OnSurfaceVariant,\n" +
		"    outline = Outline\n" +
		")\n\n" +
		"private val darkColorScheme = darkColorScheme(\n" +
		"    primary = PrimaryDark,\n" +
		"    onPrimary = OnPrimaryDark,\n" +
		"    primaryContainer = PrimaryContainerDark,\n" +
		"    onPrimaryContainer = OnPrimaryContainerDark,\n" +
		"    secondary = SecondaryDark,\n" +
		"    onSecondary = OnSecondaryDark,\n" +
		"    secondaryContainer = SecondaryContainerDark,\n" +
		"    onSecondaryContainer = OnSecondaryContainerDark,\n" +
		"    tertiary = TertiaryDark,\n" +
		"    onTertiary = OnTertiaryDark,\n" +
		"    tertiaryContainer = TertiaryContainerDark,\n" +
		"    onTertiaryContainer = OnTertiaryContainerDark,\n" +
		"    error = ErrorDark,\n" +
		"    onError = OnErrorDark,\n" +
		"    errorContainer = ErrorContainerDark,\n" +
		"    onErrorContainer = OnErrorContainerDark,\n" +
		"    background = BackgroundDark,\n" +
		"    onBackground = OnBackgroundDark,\n" +
		"    surface = SurfaceDark,\n" +
		"    onSurface = OnSurfaceDark,\n" +
		"    surfaceVariant = SurfaceVariantDark,\n" +
		"    onSurfaceVariant = OnSurfaceVariantDark,\n" +
		"    outline = OutlineDark\n" +
		")";

	return (
		<div>
			<p style={{ fontSize: 27, marginBottom: 10 }}>
				Step #1: Add to Color.kt
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
			<p
				style={{
					fontSize: 27,
					marginBottom: 10,
					marginTop: 40,
				}}
			>
				Step #2: Add to theme in Theme.kt
				<CopyAllRounded
					className="Toggle"
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
		</div>
	);
}
