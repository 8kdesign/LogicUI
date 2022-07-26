import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

import Image1 from "../../assets/logicui/browser/1.jpg";
import Image2 from "../../assets/logicui/browser/2.jpg";
import Image3 from "../../assets/logicui/browser/3.jpg";
import Image4 from "../../assets/logicui/browser/4.jpg";
import Image5 from "../../assets/logicui/browser/5.jpg";

export default function Browser() {
	return (
		<Container>
			<AppHeader app={apps[0]} />
			<Row>
				<Feature
					image={Image1}
					header="Easy to Use"
					content="LogicUI TV Browser is optimized for usage with your TV's controller and comes with only the features you need."
				/>
				<Feature
					image={Image2}
					header="Completely Free"
					content="LogicUI TV Browser was created to fill the gap left by a particular chirping browser. We promise to keep it free FOREVER."
				/>
				<Feature
					image={Image3}
					header="Download Support"
					content="We know sending apk files on your TV is hard. LogicUI TV Browser allows you to download them directly from the web."
				/>
				<Feature
					image={Image4}
					header="Mobile Controller"
					content="Control the app directly from your phone just by scanning the QR code. No installation required; Simply ensure that your phone is connected to the same WiFi to use."
				/>
				<Feature
					image={Image5}
					header="Overscan Compensation"
					content="Not all TVs are built equal. Adjust the size of the screen to ensure that all content are visible. Overscan can be accessed from the main menu."
				/>
			</Row>
			<br />
		</Container>
	);
}
