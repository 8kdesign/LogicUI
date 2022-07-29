import { useEffect, useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { HexColorPicker } from "react-colorful";

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
			<Col
				xs={12}
				md={6}
				lg={3}
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
					<p
						style={{
							fontWeight: 300,
							position: "absolute",
							bottom: 0,
							right: 0,
						}}
					>
						{colors[i]}
					</p>
				</div>
			</Col>
		);
	}
	return (
		<Row style={{ margin: 0 }}>
			{array}
			<Modal
				show={showSelector !== null}
				onHide={() => {
					setShowSelector(null);
				}}
				centered
				size="sm"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{showSelector === null ? null : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<HexColorPicker
							color={colors[showSelector]}
							onChange={(color) => {
								const newColors = [...colors];
								newColors[showSelector] = color;
								setColors(newColors);
							}}
							style={{ margin: "5px 5px 0px 5px" }}
						/>
						<div className="Container--row" style={{ padding: 5 }}>
							<p style={{ marginRight: 5 }}>#</p>
							<input
								value={inputValue}
								onChange={(event) => {
									const text =
										event.target.value.toUpperCase();
									setInputValue(text);
									const pattern = /^([A-F0-9]{6,6})$/;
									if (pattern.test(text)) {
										const newColors = [...colors];
										newColors[showSelector] = "#" + text;
										setColors(newColors);
									}
								}}
								className="ClearInput"
							/>
						</div>
					</div>
				)}
			</Modal>
		</Row>
	);
}
