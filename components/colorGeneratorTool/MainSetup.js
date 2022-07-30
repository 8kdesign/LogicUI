import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import MainColorSelector from "./MainColorSelector";

export default function MainSetup({
	primary,
	secondary,
	tertiary,
	error,
	setPrimary,
	setSecondary,
	setTertiary,
	setError,
	setPrimaryDark,
	setSecondaryDark,
	setTertiaryDark,
	setErrorDark,
}) {
	const [core, setCore] = useState(0);

	return (
		<div style={{ padding: 20, background: "#E3ECF0", borderRadius: 10 }}>
			<MainColorSelector
				colors={primary}
				setColors={setPrimary}
				setColorsDark={setPrimaryDark}
				name={"Primary"}
				core={core}
			/>
			<br />
			<MainColorSelector
				colors={secondary}
				setColors={setSecondary}
				setColorsDark={setSecondaryDark}
				name={"Secondary"}
				core={core}
			/>
			<br />
			<MainColorSelector
				colors={tertiary}
				setColors={setTertiary}
				setColorsDark={setTertiaryDark}
				name={"Tertiary"}
				core={core}
			/>
			<br />
			<MainColorSelector
				colors={error}
				setColors={setError}
				setColorsDark={setErrorDark}
				name={"Error"}
				core={core}
			/>
			<br />
			<div className="Line--horizontal" />
			<br />
			<Row>
				<Col xs={12} md={4} xl={3}>
					<p style={{ fontSize: 17, marginBottom: 5 }}>
						Obtain light main from
					</p>
				</Col>
				<Col xs={12} md={8} xl={9}>
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
								setCore(0);
							}}
						>
							<input
								type="radio"
								style={{ marginRight: 10 }}
								checked={core === 0}
								onChange={() => {}}
							/>
							<p style={{ marginRight: 30, marginBottom: 0 }}>
								Selected Color
							</p>
						</div>
						<div
							className="Toggle"
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
							onClick={() => {
								setCore(1);
							}}
						>
							<input
								type="radio"
								style={{ marginRight: 10 }}
								checked={core === 1}
								onChange={() => {}}
							/>
							<p style={{ marginRight: 30, marginBottom: 0 }}>
								40
							</p>
						</div>
						<div
							className="Toggle"
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
							onClick={() => {
								setCore(2);
							}}
						>
							<input
								type="radio"
								style={{ marginRight: 10 }}
								checked={core === 2}
								onChange={() => {}}
							/>
							<p style={{ marginRight: 30, marginBottom: 0 }}>
								50
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
