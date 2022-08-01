import { Container, Grid } from "@mui/material";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

import Image1 from "../../assets/logicui/lecture_recorder/1.jpg";

export default function LectureRecorder() {
	return (
		<Container>
			<AppHeader app={apps[4]} />
			<Grid container>
				<Feature
					image={Image1}
					header="Picture-in-Picture Support"
					content="Record and playback videos/audios in picture-in-picture mode while you use other apps concurrently."
				/>
			</Grid>
			<br />
		</Container>
	);
}
