import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../assets/inverted_logo.png";
import { useState, useEffect } from "react";
import { List } from "react-bootstrap-icons";

export default function AppBar({ setShowOffCanvas }) {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (typeof window === "undefined") return;
		function adjustWidth() {
			setWidth(window.innerWidth);
			setShowOffCanvas(false);
		}
		adjustWidth();
		window.addEventListener("resize", adjustWidth);
		return () => window.removeEventListener("resize", adjustWidth);
	}, []);

	return (
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
					{MenuItems(width, setShowOffCanvas)}
				</Container>
			</Navbar>
		</div>
	);
}

function MenuItems(width, setShowOffCanvas) {
	if (width < 700) {
		return (
			<List
				color="white"
				size={30}
				onClick={() => setShowOffCanvas(true)}
			/>
		);
	}
	return (
		<Nav>
			<Nav.Link href="/logicui">LogicUI Apps</Nav.Link>
			<div className="Line--menu" />
			<Nav.Link href="/reviews">Reviews</Nav.Link>
		</Nav>
	);
}
