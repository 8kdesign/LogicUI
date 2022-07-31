import Image from "next/image";
import { Badge, Row, Col } from "react-bootstrap";
import Link from "next/link";

import ImagePlayStore from "../assets/google-play-badge.png";

export default function AppHeader({ app }) {
	return (
		<Row
			style={{
				paddingTop: 50,
				paddingBottom: 50,
				paddingLeft: 20,
				paddingRight: 20,
				userSelect: "none",
			}}
		>
			<Col xs={6} sm={3} lg={2} style={{ marginBottom: 20, padding: 0 }}>
				<div style={{ maxWidth: 150, marginTop: 10, marginRight: 40 }}>
					<Image src={app.image} className="Image--app-icon" />
				</div>
			</Col>
			<Col xs={12} md={9} lg={10} style={{ padding: 0 }}>
				<p
					style={{
						fontSize: 65,
						lineHeight: 1.1,
						marginBottom: 20,
					}}
				>
					{app.name}{" "}
					{app.installs !== undefined ? (
						<p
							style={{
								fontWeight: 500,
								fontSize: 21,
								marginTop: 20,
								marginBottom: 20,
							}}
						>
							{app.installs}
						</p>
					) : null}
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
					{app.description}
				</p>
				<div style={{ maxWidth: 200 }}>
					<Link href={app.link} passHref>
						<a target="_blank">
							<Image className="Toggle" src={ImagePlayStore} />
						</a>
					</Link>
				</div>
			</Col>
		</Row>
	);
}
