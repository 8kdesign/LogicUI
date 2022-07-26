import { Container, Row } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import Feature from "../../components/Feature";
import { apps } from "../index";

import Image1 from "../../assets/logicui/screenshot/1.jpg";
import Image2 from "../../assets/logicui/screenshot/2.jpg";
import Image3 from "../../assets/logicui/screenshot/3.jpg";
import Image4 from "../../assets/logicui/screenshot/4.jpg";
import Image5 from "../../assets/logicui/screenshot/5.jpg";

export default function Screenshot() {
	return (
		<Container>
			<AppHeader app={apps[1]} />
			<Row>
				<Feature
					image={Image1}
					header="Transparent Background"
					content="Sometimes it is better to be able to choose later. Screenshot Framer allowes you to export framed screenshots with clear background."
				/>
				<Feature
					image={Image2}
					header="Adaptive Frames"
					content="Screen sizes varies. That is why all our frames adapt to the size of your screenshot. No more distorted or cropped screenshots."
				/>
				<Feature
					image={Image3}
					header="Customize to Your Liking"
					content="From frame and background color to notch design, Screenshot Framer allows you to modify the image to suit your needs."
				/>
				<Feature
					image={Image4}
					header="Not Just Images"
					content="Import a video under 20s and export a framed version of it as an animated GIF or video."
				/>
				<Feature
					image={Image5}
					header="3D Frames"
					content="If you need something more fanciful, there is a 3D mode that allows you to rotate the device, or even adjust the fold angle!"
				/>
			</Row>
			<br />
		</Container>
	);
}
