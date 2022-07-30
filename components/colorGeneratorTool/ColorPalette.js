import { useEffect, useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { HexColorPicker } from "react-colorful";
import { Files } from "react-bootstrap-icons";
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
			<Col
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
					<Files
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
						}}
						size={20}
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
						<div
							style={{
								width: 210,
								background: "white",
								borderRadius: 10,
							}}
						>
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
								<p style={{ marginRight: 5, marginBottom: 0 }}>
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
			</Modal>
		</Row>
	);
}
