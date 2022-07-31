export default function ExportManual({
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
	return (
		<div>
			<p style={{ fontSize: 27, marginBottom: 10 }}>Light</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
					whiteSpace: "pre",
				}}
			>
				<table>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Primary</th>
						<th style={{ fontWeight: 400 }}>{primary[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnPrimary
						</th>
						<th style={{ fontWeight: 400 }}>{primary[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							PrimaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{primary[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnPrimaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{primary[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							Secondary
						</th>
						<th style={{ fontWeight: 400 }}>{secondary[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSecondary
						</th>
						<th style={{ fontWeight: 400 }}>{secondary[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							SecondaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{secondary[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSecondaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{secondary[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							Tertiary
						</th>
						<th style={{ fontWeight: 400 }}>{tertiary[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnTertiary
						</th>
						<th style={{ fontWeight: 400 }}>{tertiary[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							TertiaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{tertiary[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnTertiaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{tertiary[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Error</th>
						<th style={{ fontWeight: 400 }}>{error[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>OnError</th>
						<th style={{ fontWeight: 400 }}>{error[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							ErrorContainer
						</th>
						<th style={{ fontWeight: 400 }}>{error[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnErrorContainer
						</th>
						<th style={{ fontWeight: 400 }}>{error[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							Background
						</th>
						<th style={{ fontWeight: 400 }}>{background[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnBackground
						</th>
						<th style={{ fontWeight: 400 }}>{background[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Surface</th>
						<th style={{ fontWeight: 400 }}>{background[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSurface
						</th>
						<th style={{ fontWeight: 400 }}>{background[3]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							SurfaceVariant
						</th>
						<th style={{ fontWeight: 400 }}>{outline[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSurfaceVariant
						</th>
						<th style={{ fontWeight: 400 }}>{outline[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Outline</th>
						<th style={{ fontWeight: 400 }}>{outline[2]}</th>
					</tr>
				</table>
			</div>
			<br />
			<p style={{ fontSize: 27, marginBottom: 10 }}>Dark</p>
			<div
				style={{
					background: "#FAFAFA",
					overflowX: "auto",
					borderRadius: 10,
					padding: 20,
					whiteSpace: "pre",
				}}
			>
				<table>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Primary</th>
						<th style={{ fontWeight: 400 }}>{primaryDark[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnPrimary
						</th>
						<th style={{ fontWeight: 400 }}>{primaryDark[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							PrimaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{primaryDark[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnPrimaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{primaryDark[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							Secondary
						</th>
						<th style={{ fontWeight: 400 }}>{secondaryDark[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSecondary
						</th>
						<th style={{ fontWeight: 400 }}>{secondaryDark[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							SecondaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{secondaryDark[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSecondaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{secondaryDark[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							Tertiary
						</th>
						<th style={{ fontWeight: 400 }}>{tertiaryDark[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnTertiary
						</th>
						<th style={{ fontWeight: 400 }}>{tertiaryDark[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							TertiaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{tertiaryDark[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnTertiaryContainer
						</th>
						<th style={{ fontWeight: 400 }}>{tertiaryDark[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Error</th>
						<th style={{ fontWeight: 400 }}>{errorDark[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>OnError</th>
						<th style={{ fontWeight: 400 }}>{errorDark[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							ErrorContainer
						</th>
						<th style={{ fontWeight: 400 }}>{errorDark[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnErrorContainer
						</th>
						<th style={{ fontWeight: 400 }}>{errorDark[3]}</th>
					</tr>
					<br />
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							Background
						</th>
						<th style={{ fontWeight: 400 }}>{backgroundDark[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnBackground
						</th>
						<th style={{ fontWeight: 400 }}>{backgroundDark[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Surface</th>
						<th style={{ fontWeight: 400 }}>{backgroundDark[2]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSurface
						</th>
						<th style={{ fontWeight: 400 }}>{backgroundDark[3]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							SurfaceVariant
						</th>
						<th style={{ fontWeight: 400 }}>{outlineDark[0]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>
							OnSurfaceVariant
						</th>
						<th style={{ fontWeight: 400 }}>{outlineDark[1]}</th>
					</tr>
					<tr>
						<th style={{ width: 200, fontWeight: 600 }}>Outline</th>
						<th style={{ fontWeight: 400 }}>{outlineDark[2]}</th>
					</tr>
				</table>
			</div>
		</div>
	);
}
