import { Container } from "@mui/material";
import AppHeader from "../../components/AppHeader";
import { apps } from "../index";
import PrivacyPolicy from "../../components/PrivacyPolicy.js";

export default function Privacy() {
	return (
		<Container>
			<AppHeader app={apps[4]} />
			<PrivacyPolicy name={apps[4].name} />
		</Container>
	);
}
