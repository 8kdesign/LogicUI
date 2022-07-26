import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

export default function Camera() {
	return (
		<Container>
			<AppHeader app={apps[5]} />
			<Row>
				<Feature
					image={apps[5].banner}
					header="One-Handed Focus"
					content="Drag on the shutter button to adjust the subject in focus before tapping it to capture a shot."
				/>
				<Feature
					image={apps[5].banner}
					header="One-Handed Exposure"
					content="Adjust exposure with ease by sliding the camera-switch toggle."
				/>
				<Feature
					image={apps[5].banner}
					header="Smiling Selfies"
					content="Enable smile detection to automatically capture a shot when the subject is smiling."
				/>
			</Row>
			<br />
		</Container>
	);
}
