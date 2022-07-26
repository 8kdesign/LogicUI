import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

import Image1 from "../../assets/logicui/lmp/1.jpg";
import Image2 from "../../assets/logicui/lmp/2.jpg";
import Image3 from "../../assets/logicui/lmp/3.jpg";
import Image4 from "../../assets/logicui/lmp/4.jpg";
import Image5 from "../../assets/logicui/lmp/5.jpg";

export default function MusicPlayers() {
	return (
		<Container>
			<AppHeader app={apps[2]} />
			<Row>
				<Feature
					image={Image1}
					header="Flexible Playlist"
					content="Add albums or artists to a playlist and any track belonging to that artist or album will automatically be added to it."
				/>
				<Feature
					image={Image2}
					header="Intelligent Sorting"
					content="Use ' + ', ' / ' or ';' to seperate artist names in metadata and our app will allocate tracks to the corresponding artists properly. Note the blankspaces for the first two delimiters."
				/>
				<Feature
					image={Image3}
					header="Chinese Characters Friendly"
					content="Traditional and simplified Chinese characters are treated as equivalent. Searching for a track or artist has never been easier."
				/>
				<Feature
					image={Image4}
					header="Optimized for Tablets"
					content="Make full use of your screen while in landscape mode. Access both your song list and music control from the same screen."
				/>
				<Feature
					image={Image5}
					header="Chromecast Support"
					content="LMP supports casting local tracks to any Chromecast device. Simply connect to the device in the music control and start playing."
				/>
			</Row>
			<br />
		</Container>
	);
}
