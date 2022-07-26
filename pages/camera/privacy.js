import { Container } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import { apps } from "../index";
import PrivacyPolicy from "../../components/PrivacyPolicy.js";

export default function Privacy() {
	return (
		<Container>
			<AppHeader app={apps[5]} />
			<PrivacyPolicy name={apps[5].name} />
		</Container>
	);
}
