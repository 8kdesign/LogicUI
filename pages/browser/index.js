import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

export default function Browser() {
	return (
		<Container>
			<AppHeader app={apps[0]} />
			<Row>
				<Feature
					image={apps[0].banner}
					header="Easy to Use"
					content="LogicUI TV Browser is optimized for usage with your TV's controller and comes with only the features you need."
				/>
				<Feature
					image={apps[0].banner}
					header="Completely Free"
					content="LogicUI TV Browser was created to fill the gap left by a particular chirping browser. We promise to keep it free FOREVER."
				/>
				<Feature
					image={apps[0].banner}
					header="Download Support"
					content="We know sending apk files on your TV is hard. LogicUI TV Browser allows you to download them directly from the web."
				/>
				<Feature
					image={apps[0].banner}
					header="Mobile Controller"
					content="Control the app directly from your phone just by scanning the QR code. No installation required; Simply ensure that your phone is connected to the same WiFi to use."
				/>
				<Feature
					image={apps[0].banner}
					header="Overscan Compensation"
					content="Not all TVs are built equal. Adjust the size of the screen to ensure that all content are visible. Overscan can be accessed from the main menu."
				/>
			</Row>
			<br />
		</Container>
	);
}
