import { Container } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import { apps } from "../index";
import PrivacyPolicy from "../../components/PrivacyPolicy.js";

export default function Privacy() {
	return (
		<Container>
			<AppHeader app={apps[0]} />
			<PrivacyPolicy name={apps[0].name} />
		</Container>
	);
}
