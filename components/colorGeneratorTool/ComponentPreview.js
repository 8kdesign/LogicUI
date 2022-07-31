import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Check, Pencil, Plus, Search } from "react-bootstrap-icons";

export default function ComponentPreview({
	primary,
	secondary,
	tertiary,
	error,
	background,
	outline,
}) {
	const [input, setInput] = useState("Text Input");

	return (
		<Row
			style={{
				margin: 0,
				padding: 15,
				borderRadius: 5,
				overflow: "clip",
				background: background[0],
			}}
		>
			<Col
				xs={12}
				style={{
					padding: "0px 10px",
				}}
			>
				<p
					style={{
						fontSize: 21,
						color: background[1],
						marginBottom: 10,
					}}
				>
					Components Preview
				</p>
			</Col>
			<Col
				xs={12}
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					padding: 0,
				}}
			>
				<>
					<p
						className="Toggle"
						style={{
							width: "fit-content",
							height: "fit-content",
							padding: "5px 20px",
							background: primary[0],
							color: primary[1],
							borderRadius: 20,
							margin: 10,
						}}
					>
						Filled Button
					</p>
					<p
						className="Toggle"
						style={{
							width: "fit-content",
							height: "fit-content",

							padding: "5px 20px",
							color: primary[0],
							borderColor: primary[0],
							borderWidth: 2,
							borderStyle: "solid",
							borderRadius: 20,
							margin: 10,
						}}
					>
						Outlined Button
					</p>
					<div
						className="Toggle"
						style={{
							margin: 20,
							height: 18,
							width: 18,
							borderColor: primary[0],
							borderRadius: 10,
							borderWidth: 2,
							borderStyle: "solid",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								width: 10,
								height: 10,
								borderRadius: 10,
								background: primary[0],
							}}
						/>
					</div>
					<div
						className="Toggle"
						style={{
							margin: 20,
							height: 18,
							width: 18,
							background: primary[0],
							borderRadius: 3,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Check color={primary[1]} size={20} />
					</div>
					<div
						className="Toggle"
						style={{
							height: 60,
							width: 60,
							background: primary[2],
							borderRadius: 17,
							margin: 10,
							boxShadow: "0px 1px 3px 0px #666666",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Pencil size={20} color={primary[3]} />
					</div>
				</>
				<>
					<p
						className="Toggle"
						style={{
							width: "fit-content",
							height: "fit-content",
							padding: "5px 20px",
							background: secondary[0],
							color: secondary[1],
							borderRadius: 20,
							margin: 10,
						}}
					>
						Filled Button
					</p>
					<p
						className="Toggle"
						style={{
							width: "fit-content",
							height: "fit-content",

							padding: "5px 20px",
							color: secondary[0],
							borderColor: secondary[0],
							borderWidth: 2,
							borderStyle: "solid",
							borderRadius: 20,
							margin: 10,
						}}
					>
						Outlined Button
					</p>
					<div
						className="Toggle"
						style={{
							height: "fit-content",
							background: secondary[2],
							borderRadius: 3,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							margin: 10,
							padding: "5px 10px",
						}}
					>
						<Check color={secondary[3]} size={20} />
						<p
							style={{
								marginBottom: 0,
								color: secondary[3],
								fontSize: 13,
							}}
						>
							Chip
						</p>
					</div>
					<div
						className="Toggle"
						style={{
							height: 60,
							width: 130,
							background: secondary[2],
							borderRadius: 17,
							margin: 10,
							boxShadow: "0px 1px 3px 0px #AAAAAA",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Plus size={30} color={secondary[3]} />
						<p style={{ color: secondary[3], marginBottom: 0 }}>
							Add New
						</p>
					</div>
				</>
				<>
					<p
						className="Toggle"
						style={{
							width: "fit-content",
							height: "fit-content",
							padding: "5px 20px",
							background: tertiary[0],
							color: tertiary[1],
							borderRadius: 20,
							margin: 10,
						}}
					>
						Filled Button
					</p>
					<p
						className="Toggle"
						style={{
							width: "fit-content",
							height: "fit-content",

							padding: "5px 20px",
							color: tertiary[0],
							borderColor: tertiary[0],
							borderWidth: 2,
							borderStyle: "solid",
							borderRadius: 20,
							margin: 10,
						}}
					>
						Outlined Button
					</p>
					<div
						className="Toggle"
						style={{
							height: 48,
							width: 48,
							background: tertiary[2],
							borderRadius: 15,
							margin: 10,
							boxShadow: "0px 1px 3px 0px #666666",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Pencil size={15} color={tertiary[3]} />
					</div>
				</>
				<>
					<div
						style={{
							width: 30,
							height: 30,
							margin: 10,
							background: error[0],
							borderRadius: 15,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<p
							style={{
								marginBottom: 0,
								textAlign: "center",
								color: error[1],
								fontSize: 19,
								fontWeight: 500,
							}}
						>
							!
						</p>
					</div>
					<div
						style={{
							width: "fit-content",
							height: 30,
							margin: 10,
							padding: "0px 15px",
							background: error[2],
							borderRadius: 3,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<p
							style={{
								marginBottom: 0,
								textAlign: "center",
								color: error[3],
								fontSize: 17,
							}}
						>
							Error!
						</p>
					</div>
				</>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						padding: 0,
						margin: 10,
						background: background[2],
						borderRadius: 5,
						borderWidth: 1,
						borderStyle: "solid",
						borderColor: background[3],
					}}
				>
					<div style={{ width: "100%" }}>
						<p
							style={{
								paddingLeft: 10,
								paddingTop: 5,
								marginBottom: 0,
								color: background[3],
							}}
						>
							Surface
						</p>
					</div>
					<div
						style={{
							width: 150,
							height: "fit-content",
							background: outline[0],
							borderRadius: 3,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							padding: "10px 15px",
							margin: 10,
						}}
					>
						<Search color={outline[1]} />
						<input
							className="ClearInput"
							value={input}
							onChange={(event) => {
								setInput(event.target.value);
							}}
							style={{
								width: 90,
								marginLeft: 15,
								color: outline[1],
							}}
						/>
					</div>
					<div
						style={{
							width: 150,
							height: "fit-content",
							borderColor: outline[2],
							borderStyle: "solid",
							borderWidth: 1,
							borderRadius: 3,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							padding: "10px 15px",
							margin: 10,
						}}
					>
						<Search color={outline[2]} />
						<input
							className="ClearInput"
							value={input}
							onChange={(event) => {
								setInput(event.target.value);
							}}
							style={{
								width: 90,
								marginLeft: 15,
								color: outline[2],
							}}
						/>
					</div>
					<p
						className="Toggle"
						style={{
							width: "fit-content",
							height: "fit-content",

							padding: "5px 20px",
							color: outline[2],
							borderColor: outline[2],
							borderWidth: 2,
							borderStyle: "solid",
							borderRadius: 20,
							margin: 10,
						}}
					>
						Outlined Button
					</p>
				</div>
			</Col>
		</Row>
	);
}
