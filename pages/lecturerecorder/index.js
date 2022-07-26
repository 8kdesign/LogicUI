import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

export default function LectureRecorder() {
	return (
		<Container>
			<AppHeader app={apps[4]} />
			<Row>
				<Feature
					image={apps[4].banner}
					header="Picture-in-Picture Support"
					content="Record and playback videos/audios in picture-in-picture mode while you use other apps concurrently."
				/>
			</Row>
			<br />
		</Container>
	);
}
