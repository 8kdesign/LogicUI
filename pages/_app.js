import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../App.css";

import AppBar from "../components/AppBar";
import { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
	const [showOffCanvas, setShowOffCanvas] = useState(false);

	return (
		<>
			<AppBar setShowOffCanvas={setShowOffCanvas} />
			<div className="Container--content">
				<Component {...pageProps} />
			</div>
			<MobileOffCanvas
				showOffCanvas={showOffCanvas}
				setShowOffCanvas={setShowOffCanvas}
			/>
		</>
	);
}

export default MyApp;

function MobileOffCanvas({ showOffCanvas, setShowOffCanvas }) {
	return (
		<Offcanvas
			show={showOffCanvas}
			onHide={() => setShowOffCanvas(false)}
			style={{ backgroundColor: "#212529", maxWidth: "80%" }}
		>
			<Offcanvas.Body>
				<Offcanvas.Header closeButton closeVariant="white">
					<Offcanvas.Title />
				</Offcanvas.Header>
				<Nav className="flex-column">
					<Nav.Link href="/">
						<p className="Text--menu">Home</p>
					</Nav.Link>
					<Nav.Link href="/logicui">
						<p className="Text--menu">LogicUI Apps</p>
					</Nav.Link>
					<Nav.Link href="/reviews">
						<p className="Text--menu">Reviews</p>
					</Nav.Link>
				</Nav>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
