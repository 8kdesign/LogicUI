export default function ToolHeader({ tool }) {
	return (
		<div
			style={{
				paddingTop: 50,
				paddingBottom: 20,
				paddingLeft: 20,
				paddingRight: 20,
				userSelect: "none",
			}}
		>
			<p
				style={{
					fontSize: 65,
					lineHeight: 1.1,
					marginBottom: 20,
				}}
			>
				{tool.name}
			</p>
			<p
				style={{
					fontSize: 21,
					maxWidth: 800,
					fontWeight: 300,
					opacity: 0.7,
					marginBottom: 20,
				}}
			>
				{tool.description}
			</p>
		</div>
	);
}
