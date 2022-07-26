import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

import Image1 from "../../assets/logicui/recorder/1.jpg";
import Image2 from "../../assets/logicui/recorder/2.jpg";
import Image3 from "../../assets/logicui/recorder/3.jpg";

export default function Recorder() {
	return (
		<Container>
			<AppHeader app={apps[3]} />
			<Row>
				<Feature
					image={Image1}
					header="Bluetooth Support"
					content="LogicUI audio recorder supports recording via your Bluetooth headphones's microphones."
				/>
				<Feature
					image={Image2}
					header="Audio Preview"
					content="Check that your microphone works even before you start recording."
				/>
				<Feature
					image={Image3}
					header="Quick Cancel"
					content="Made a mistake in your recording? Cancel the recording without saving."
				/>
			</Row>
			<br />
		</Container>
	);
}
