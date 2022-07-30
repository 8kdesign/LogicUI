import { useState, useEffect } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { HexColorPicker } from "react-colorful";

export default function MainColorSelector({
	colors,
	setColors,
	setColorsDark,
	name,
	core,
	setBackground,
	setOutline,
	setBackgroundDark,
	setOutlineDark,
}) {
	const [main, setMain] = useState(colors[0]);
	const [showSelector, setShowSelector] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const cmyk = getCMYK(main);

	useEffect(() => {
		if (showSelector === false) return;
		setInputValue(main.substring(1));
	}, [showSelector, main]);

	useEffect(() => {
		if (colors.length !== 4) return;
		// Light
		const newColors = [];
		switch (core) {
			case 1: {
				const main40 = getHex(cmyk, 1 - 0.4).toUpperCase();
				newColors.push(main40);
				break;
			}
			case 2: {
				const main50 = getHex(cmyk, 1 - 0.5).toUpperCase();
				newColors.push(main50);
				break;
			}
			default: {
				newColors.push(main);
			}
		}
		newColors.push("#FFFFFF");
		newColors.push(getHex(cmyk, 1 - 0.9).toUpperCase());
		newColors.push(getHex(cmyk, 1 - 0.1).toUpperCase());
		setColors(newColors);
		// Dark
		const newColorsDark = [];
		newColorsDark.push(getHex(cmyk, 1 - 0.8).toUpperCase());
		newColorsDark.push(getHex(cmyk, 1 - 0.2).toUpperCase());
		newColorsDark.push(getHex(cmyk, 1 - 0.3).toUpperCase());
		newColorsDark.push(getHex(cmyk, 1 - 0.9).toUpperCase());
		setColorsDark(newColorsDark);
		// Background, Surface & Outline
		if (
			setBackground === undefined ||
			setOutline === undefined ||
			setBackgroundDark === undefined ||
			setOutlineDark === undefined
		)
			return;
		setNewBackground(cmyk, setBackground, setBackgroundDark);
		setNewOutline(cmyk, setOutline, setOutlineDark);
	}, [main, core]);

	return (
		<Row>
			<Col xs={12} md={4} lg={3} xl={2}>
				<div
					className="Container--row"
					style={{ alignItems: "center", height: 50 }}
				>
					<p style={{ width: 120, fontSize: 19, marginBottom: 0 }}>
						{name}
					</p>
					<div
						className="Toggle"
						onClick={() => {
							setShowSelector(true);
						}}
						style={{
							height: 30,
							width: 80,
							background: main,
							borderRadius: 5,
							borderColor: "white",
							borderStyle: "solid",
							borderWidth: 3,
						}}
					/>
				</div>
			</Col>
			<Col xs={12} md={8} lg={9} xl={10}>
				<Row style={{ paddingLeft: 10, paddingRight: 10 }}>
					<TonePreview cmyk={cmyk} percent={0} />
					<TonePreview cmyk={cmyk} percent={0.1} />
					<TonePreview cmyk={cmyk} percent={0.2} />
					<TonePreview cmyk={cmyk} percent={0.3} />
					<TonePreview cmyk={cmyk} percent={0.4} />
					<TonePreview cmyk={cmyk} percent={0.5} />
					<TonePreview cmyk={cmyk} percent={0.6} />
					<TonePreview cmyk={cmyk} percent={0.7} />
					<TonePreview cmyk={cmyk} percent={0.8} />
					<TonePreview cmyk={cmyk} percent={0.9} />
					<TonePreview cmyk={cmyk} percent={0.95} />
					<TonePreview cmyk={cmyk} percent={0.99} />
				</Row>
			</Col>
			<Modal
				show={showSelector}
				onHide={() => {
					setShowSelector(false);
				}}
				centered
				size="sm"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{!showSelector ? null : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
						onClick={() => {
							setShowSelector(false);
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
									background: main,
									borderRadius: 5,
									borderWidth: 1,
									borderStyle: "solid",
									borderColor: "#AAAAAA",
									margin: 5,
								}}
							/>
							<HexColorPicker
								color={main}
								onChange={(color) => {
									setMain(color.toUpperCase());
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
											setMain("#" + text);
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

function TonePreview({ cmyk, percent }) {
	const color = getRGBString(cmyk, 1 - percent);
	var textColor;
	if (percent <= 0.5) {
		textColor = "white";
	} else {
		textColor = "black";
	}
	return (
		<Col
			xs={1}
			style={{
				height: 50,
				display: "flex",
				background: color,
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<p
				style={{
					color: textColor,
					fontSize: 13,
					marginBottom: 0,
					userSelect: "none",
				}}
			>
				{percent * 100}
			</p>
		</Col>
	);
}

function getCMYK(color) {
	const r = parseInt(color.substring(1, 3), 16) / 255;
	const g = parseInt(color.substring(3, 5), 16) / 255;
	const b = parseInt(color.substring(5, 7), 16) / 255;
	const k = 1 - Math.max(r, g, b);
	if (k === 1) {
		return { c: 0, m: 0, y: 0, k: 100 };
	}
	const c = (1 - r - k) / (1 - k);
	const m = (1 - g - k) / (1 - k);
	const y = (1 - b - k) / (1 - k);
	return {
		c: Math.max(Math.min(Math.round(c * 100), 100), 0),
		m: Math.max(Math.min(Math.round(m * 100), 100), 0),
		y: Math.max(Math.min(Math.round(y * 100), 100), 0),
		k: Math.max(Math.min(Math.round(k * 100), 100), 0),
	};
}

function getRGBString(cmyk, percent) {
	var c = cmyk.c / 100;
	var m = cmyk.m / 100;
	var y = cmyk.y / 100;
	var k = percent;
	if (k >= 0.1 && k < 1) {
		k -= 0.1;
	}
	if (percent < 0.5) {
		c *= Math.sqrt(percent);
		m *= Math.sqrt(percent);
		y *= Math.sqrt(percent);
	}
	const r = 255 * (1 - c) * (1 - k);
	const g = 255 * (1 - m) * (1 - k);
	const b = 255 * (1 - y) * (1 - k);
	return (
		"rgb(" +
		Math.max(Math.min(Math.round(r), 255), 0) +
		", " +
		Math.max(Math.min(Math.round(g), 255), 0) +
		", " +
		Math.max(Math.min(Math.round(b), 255), 0) +
		")"
	);
}

function getHex(cmyk, percent) {
	var c = cmyk.c / 100;
	var m = cmyk.m / 100;
	var y = cmyk.y / 100;
	var k = percent;
	if (k >= 0.1 && k < 1) {
		k -= 0.1;
	}
	if (percent < 0.5) {
		c *= Math.sqrt(percent);
		m *= Math.sqrt(percent);
		y *= Math.sqrt(percent);
	}
	const r = 255 * (1 - c) * (1 - k);
	const g = 255 * (1 - m) * (1 - k);
	const b = 255 * (1 - y) * (1 - k);
	var red = Math.max(Math.min(Math.round(r), 255), 0).toString(16);
	var green = Math.max(Math.min(Math.round(g), 255), 0).toString(16);
	var blue = Math.max(Math.min(Math.round(b), 255), 0).toString(16);
	if (red.length < 2) {
		red = "0" + red;
	}
	if (green.length < 2) {
		green = "0" + green;
	}
	if (blue.length < 2) {
		blue = "0" + blue;
	}
	return "#" + red + green + blue;
}

function setNewBackground(cmyk, setBackground, setBackgroundDark) {
	var c = cmyk.c * 0.05;
	var m = cmyk.m * 0.05;
	var y = cmyk.y * 0.05;
	var cmykBackground = { c: c, m: m, y: y, k: 0.5 };
	var neutral10 = getHex(cmykBackground, 1 - 0.1);
	var neutral90 = getHex(cmykBackground, 1 - 0.9);
	var neutral99 = getHex(cmykBackground, 1 - 0.99);
	setBackground([neutral99, neutral10, neutral99, neutral10]);
	setBackgroundDark([neutral10, neutral90, neutral10, neutral90]);
}

function setNewOutline(cmyk, setOutline, setOutlineDark) {
	var c = cmyk.c * 0.2;
	var m = cmyk.m * 0.2;
	var y = cmyk.y * 0.2;
	var cmykOutline = { c: c, m: m, y: y, k: 0.5 };
	var neutralVariant30 = getHex(cmykOutline, 1 - 0.3);
	var neutralVariant50 = getHex(cmykOutline, 1 - 0.5);
	var neutralVariant60 = getHex(cmykOutline, 1 - 0.6);
	var neutralVariant80 = getHex(cmykOutline, 1 - 0.8);
	var neutralVariant90 = getHex(cmykOutline, 1 - 0.9);
	setOutline([neutralVariant90, neutralVariant30, neutralVariant50]);
	setOutlineDark([neutralVariant30, neutralVariant80, neutralVariant60]);
}
