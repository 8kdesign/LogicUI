import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

export default function MusicPlayers() {
	return (
		<Container>
			<AppHeader app={apps[2]} />
			<Row>
				<Feature
					image={apps[2].banner}
					header="Flexible Playlist"
					content="Add albums or artists to a playlist and any track belonging to that artist or album will automatically be added to it."
				/>
				<Feature
					image={apps[2].banner}
					header="Intelligent Sorting"
					content="Use ' + ', ' / ' or ';' to seperate artist names in metadata and our app will allocate tracks to the corresponding artists properly. Note the blankspaces for the first two delimiters."
				/>
				<Feature
					image={apps[2].banner}
					header="Chinese Characters Friendly"
					content="Traditional and simplified Chinese characters are treated as equivalent. Searching for a track or artist has never been easier."
				/>
				<Feature
					image={apps[2].banner}
					header="Optimized for Tablets"
					content="Make full use of your screen while in landscape mode. Access both your song list and music control from the same screen."
				/>
				<Feature
					image={apps[2].banner}
					header="Chromecast Support"
					content="LMP supports casting local tracks to any Chromecast device. Simply connect to the device in the music control and start playing."
				/>
			</Row>
			<br />
		</Container>
	);
}
