import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

export default function Screenshot() {
	return (
		<Container>
			<AppHeader app={apps[1]} />
			<Row>
				<Feature
					image={apps[1].banner}
					header="Transparent Background"
					content="Sometimes it is better to be able to choose later. Screenshot Framer allowes you to export framed screenshots with clear background."
				/>
				<Feature
					image={apps[1].banner}
					header="Adaptive Frames"
					content="Screen sizes varies. That is why all our frames adapt to the size of your screenshot. No more distorted or cropped screenshots."
				/>
				<Feature
					image={apps[1].banner}
					header="Customize to Your Liking"
					content="From frame and background color to notch design, Screenshot Framer allows you to modify the image to suit your needs."
				/>
				<Feature
					image={apps[1].banner}
					header="Not Just Images"
					content="Import a video under 20s and export a framed version of it as an animated GIF or video."
				/>
				<Feature
					image={apps[1].banner}
					header="3D Frames"
					content="If you need something more fanciful, there is a 3D mode that allows you to rotate the device, or even adjust the fold angle!"
				/>
			</Row>
			<br />
		</Container>
	);
}
