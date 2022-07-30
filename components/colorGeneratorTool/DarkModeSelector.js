export default function DarkModeSelector({ showDark, setShowDark }) {
	return (
		<div
			style={{
				overflowX: "auto",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<div
				className="Toggle"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
				onClick={() => {
					setShowDark(false);
				}}
			>
				{!showDark ? (
					<p
						style={{
							marginBottom: 0,
							color: "white",
							background: "#307987",
							padding: "5px 20px",
							borderRadius: 5,
						}}
					>
						Light
					</p>
				) : (
					<p
						style={{
							marginBottom: 0,
							color: "white",
							padding: "5px 20px",
						}}
					>
						Light
					</p>
				)}
			</div>
			<div
				className="Toggle"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
				onClick={() => {
					setShowDark(true);
				}}
			>
				{showDark ? (
					<p
						style={{
							marginBottom: 0,
							color: "white",
							background: "#307987",
							padding: "5px 20px",
							borderRadius: 5,
						}}
					>
						Dark
					</p>
				) : (
					<p
						style={{
							marginBottom: 0,
							padding: "5px 20px",
						}}
					>
						Dark
					</p>
				)}
			</div>
		</div>
	);
}
