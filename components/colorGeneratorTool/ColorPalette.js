import { useEffect, useState } from "react";
import { Grid, Modal, Box } from "@mui/material";
import { HexColorPicker } from "react-colorful";
import { ContentCopyRounded } from "@mui/icons-material";
import { toast } from "react-hot-toast";

export default function ColorPalette({ colors, setColors, name }) {
	const array = [];
	const [showSelector, setShowSelector] = useState(null);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (showSelector === null) return;
		setInputValue(colors[showSelector].substring(1));
	}, [showSelector, colors]);

	for (let i = 0; i < colors.length; i++) {
		const color = colors[i];
		var secondColor;
		if (i % 2 === 0) {
			if (i === colors.length - 1) {
				secondColor = "#FFFFFF";
			} else {
				secondColor = colors[i + 1];
			}
		} else {
			secondColor = colors[i - 1];
		}
		array.push(
			<Grid
				item
				xs={12}
				md={6}
				lg={3}
				key={name[i]}
				style={{
					background: color,
					color: secondColor,
					padding: 10,
				}}
				className="Toggle"
				onClick={() => {
					setShowSelector(i);
				}}
			>
				<div style={{ position: "relative", height: 100 }}>
					<p style={{ fontWeight: 300 }}>{name[i]}</p>
					<ContentCopyRounded
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
						}}
						onClick={(event) => {
							event.stopPropagation();
							navigator.clipboard.writeText(color);
							toast("Copied " + color);
						}}
						color={secondColor}
					/>
					<p
						style={{
							fontWeight: 300,
							position: "absolute",
							marginBottom: 0,
							bottom: 0,
							right: 0,
						}}
					>
						{colors[i]}
					</p>
				</div>
			</Grid>
		);
	}
	return (
		<Grid container style={{ margin: 0 }}>
			{array}
			<Modal
				open={showSelector !== null}
				onClose={() => {
					setShowSelector(null);
				}}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box style={{ outline: "none" }}>
					{showSelector === null ? null : (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
							onClick={() => {
								setShowSelector(null);
							}}
						>
							<div
								style={{
									width: 210,
									background: "white",
									borderRadius: 10,
								}}
								onClick={(event) => {
									event.stopPropagation();
								}}
							>
								<div
									style={{
										width: 200,
										height: 30,
										background: colors[showSelector],
										borderRadius: 5,
										borderWidth: 1,
										borderStyle: "solid",
										borderColor: "#AAAAAA",
										margin: 5,
									}}
								/>
								<HexColorPicker
									color={colors[showSelector]}
									onChange={(color) => {
										const newColors = [...colors];
										newColors[showSelector] =
											color.toUpperCase();
										setColors(newColors);
									}}
									style={{ margin: "5px 5px 0px 5px" }}
								/>
								<div
									className="Container--row"
									style={{ width: 200, padding: 10 }}
								>
									<p
										style={{
											marginRight: 5,
											marginBottom: 0,
										}}
									>
										#
									</p>
									<input
										value={inputValue}
										onChange={(event) => {
											const text =
												event.target.value.toUpperCase();
											setInputValue(text);
											const pattern = /^([A-F0-9]{6,6})$/;
											if (pattern.test(text)) {
												const newColors = [...colors];
												newColors[showSelector] =
													"#" + text;
												setColors(newColors);
											}
										}}
										className="ClearInput"
									/>
								</div>
							</div>
						</div>
					)}
				</Box>
			</Modal>
		</Grid>
	);
}
