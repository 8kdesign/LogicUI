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
}) {
	const [core, setCore] = useState(0);
	const [container, setContainer] = useState(1);

	return (
		<div style={{ padding: 20, background: "#E3ECF0", borderRadius: 10 }}>
			<MainColorSelector
				colors={primary}
				setColors={setPrimary}
				name={"Primary"}
				core={core}
				container={container}
			/>
			<br />
			<MainColorSelector
				colors={secondary}
				setColors={setSecondary}
				name={"Secondary"}
				core={core}
				container={container}
			/>
			<br />
			<MainColorSelector
				colors={tertiary}
				setColors={setTertiary}
				name={"Tertiary"}
				core={core}
				container={container}
			/>
			<br />
			<MainColorSelector
				colors={error}
				setColors={setError}
				name={"Error"}
				core={core}
				container={container}
			/>
			<br />
			<div className="Line--horizontal" />
			<br />
			<Row>
				<Col xs={12} md={4} xl={3}>
					<p style={{ fontSize: 17, marginBottom: 5 }}>
						Obtain Main From
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
			<Row style={{ marginTop: 10 }}>
				<Col xs={12} md={4} xl={3}>
					<p style={{ fontSize: 17, marginBottom: 5 }}>
						Obtain Container From
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
								setContainer(0);
							}}
						>
							<input
								type="radio"
								style={{ marginRight: 10 }}
								checked={container === 0}
								onChange={() => {}}
							/>
							<p style={{ marginRight: 30, marginBottom: 0 }}>
								10
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
								setContainer(1);
							}}
						>
							<input
								type="radio"
								style={{ marginRight: 10 }}
								checked={container === 1}
								onChange={() => {}}
							/>
							<p style={{ marginRight: 30, marginBottom: 0 }}>
								20
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
