import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

import Image1 from "../../assets/logicui/camera/1.jpg";
import Image2 from "../../assets/logicui/camera/2.jpg";
import Image3 from "../../assets/logicui/camera/3.jpg";

export default function Camera() {
	return (
		<Container>
			<AppHeader app={apps[5]} />
			<Row>
				<Feature
					image={Image1}
					header="One-Handed Focus"
					content="Drag on the shutter button to adjust the subject in focus before tapping it to capture a shot."
				/>
				<Feature
					image={Image2}
					header="One-Handed Exposure"
					content="Adjust exposure with ease by sliding the camera-switch toggle."
				/>
				<Feature
					image={Image3}
					header="Smiling Selfies"
					content="Enable smile detection to automatically capture a shot when the subject is smiling."
				/>
			</Row>
			<br />
		</Container>
	);
}
