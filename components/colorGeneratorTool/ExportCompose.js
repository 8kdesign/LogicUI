export default function ExportCompose({
	primary,
	secondary,
	tertiary,
	error,
	background,
	outline,
}) {
	return (
		<div style={{ whiteSpace: "pre" }}>
			<p style={{ fontSize: 27, marginBottom: 10 }}>Add to Color.kt</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
				}}
			>
				<p>
					{"val Primary = Color(0xFF" +
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
						")\n\n" +
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
						")\n\n" +
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
						")\n\n" +
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
						")\n\n" +
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
						")\n"}
				</p>
			</div>
			<p
				style={{
					fontSize: 27,
					marginBottom: 10,
					marginTop: 40,
				}}
			>
				Add to theme in Theme.kt
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
					{"private val lightColorScheme = lightColorScheme(\n" +
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
						")"}
				</p>
			</div>
		</div>
	);
}
