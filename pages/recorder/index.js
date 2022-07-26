import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

export default function Recorder() {
	return (
		<Container>
			<AppHeader app={apps[3]} />
			<Row>
				<Feature
					image={apps[3].banner}
					header="Bluetooth Support"
					content="LogicUI audio recorder supports recording via your Bluetooth headphones's microphones."
				/>
				<Feature
					image={apps[3].banner}
					header="Audio Preview"
					content="Check that your microphone works even before you start recording."
				/>
				<Feature
					image={apps[3].banner}
					header="Quick Cancel"
					content="Made a mistake in your recording? Cancel the recording without saving."
				/>
			</Row>
			<br />
		</Container>
	);
}
