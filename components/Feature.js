import { Col } from "react-bootstrap";
import Image from "next/image";

export default function Feature({ image, header, content }) {
	return (
		<Col xs={12} md={6} lg={4} style={{ padding: 20 }}>
			<div
				style={{
					background: "#FAFAFA",
					borderRadius: 10,
					overflow: "hidden",
					height: "100%",
				}}
			>
				<Image src={image} />
				<div style={{ padding: 20 }}>
					<p
						style={{
							fontSize: 21,
							fontWeight: 500,
							marginBottom: 10,
						}}
					>
						{header}
					</p>
					<p
						style={{
							fontSize: 17,
							opacity: 0.8,
							fontWeight: 300,
							overflowWrap: "break-word",
						}}
					>
						{content}
					</p>
				</div>
			</div>
		</Col>
	);
}
