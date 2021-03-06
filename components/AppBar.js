import { Container } from "@mui/material";
import Link from "next/link";

export default function AppBar() {
	return (
		<div className="Container--navbar">
			<Container>
				<div style={{ cursor: "pointer", zIndex: 10 }}>
					<Link href="/">
						<p
							style={{
								fontSize: 21,
								fontWeight: 400,
								color: "#aaaaaa",
								userSelect: "none",
								textAlign: "center",
								marginBottom: 0,
								marginTop: 0,
							}}
						>
							<b style={{ color: "#3b3b3b" }}>Logic </b>UI
						</p>
					</Link>
				</div>
			</Container>
		</div>
	);
}
