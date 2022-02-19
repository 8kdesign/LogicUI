import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../App.css";

import { Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../assets/inverted_logo.png";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="Container--navbar">
				<Navbar bg="dark" variant="dark">
					<Container>
						<div style={{ cursor: "pointer" }}>
							<Link href="/">
								<Image
									src={ImageLogo}
									className="Image--logo"
									height={40}
									width={40}
								/>
							</Link>
						</div>
					</Container>
				</Navbar>
			</div>
			<div className="Container--content">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
