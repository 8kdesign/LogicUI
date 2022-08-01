import { Container } from "@mui/material";
import AppHeader from "../../components/AppHeader";
import { apps } from "../index";
import PrivacyPolicy from "../../components/PrivacyPolicy.js";

export default function Privacy() {
	return (
		<Container>
			<AppHeader app={apps[3]} />
			<PrivacyPolicy name={apps[3].name} />
		</Container>
	);
}
