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
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Primary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primary[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnPrimary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primary[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							PrimaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primary[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnPrimaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primary[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Secondary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondary[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSecondary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondary[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							SecondaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondary[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSecondaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondary[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Tertiary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiary[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnTertiary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiary[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							TertiaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiary[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnTertiaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiary[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Error
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{error[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnError
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{error[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							ErrorContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{error[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnErrorContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{error[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Background
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{background[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnBackground
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{background[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Surface
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{background[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSurface
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{background[3]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							SurfaceVariant
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{outline[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSurfaceVariant
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{outline[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Outline
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{outline[2]}
						</th>
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
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Primary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primaryDark[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnPrimary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primaryDark[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							PrimaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primaryDark[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnPrimaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{primaryDark[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Secondary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondaryDark[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSecondary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondaryDark[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							SecondaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondaryDark[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSecondaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{secondaryDark[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Tertiary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiaryDark[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnTertiary
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiaryDark[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							TertiaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiaryDark[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnTertiaryContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{tertiaryDark[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Error
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{errorDark[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnError
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{errorDark[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							ErrorContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{errorDark[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnErrorContainer
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{errorDark[3]}
						</th>
					</tr>
					<br />
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Background
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{backgroundDark[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnBackground
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{backgroundDark[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Surface
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{backgroundDark[2]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSurface
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{backgroundDark[3]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							SurfaceVariant
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{outlineDark[0]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							OnSurfaceVariant
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{outlineDark[1]}
						</th>
					</tr>
					<tr>
						<th
							style={{
								width: 200,
								fontWeight: 600,
								textAlign: "start",
							}}
						>
							Outline
						</th>
						<th style={{ fontWeight: 400, textAlign: "start" }}>
							{outlineDark[2]}
						</th>
					</tr>
				</table>
			</div>
		</div>
	);
}
