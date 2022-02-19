import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ImagePlayStore from "../../assets/google-play-badge.png";
import ImageSurf from "../../assets/logicui/browser/surf.jpg";
import ImageMenu from "../../assets/logicui/browser/menu.jpg";

export default function Browser() {
	return (
		<>
			<a
				href="https://play.google.com/store/apps/details?id=com.logicui.tvbrowser"
				target="_blank"
				rel="noreferrer"
			>
				<Row>
					<Col xs={6} sm={6} md={6} lg={{ span: 4, offset: 4 }}>
						<Image
							src={ImagePlayStore}
							className="Image--playstore"
						/>
					</Col>
				</Row>
			</a>
			<div className="Buffer--50px" />
			<p className="Text--paragraph">
				LogicUI TV Browser is an app for Android TV devices built to
				address the lack of a proper browser app on the TV Play Store
				that is completely free to use. Designed for use with D-pad of
				most controllers, the cursor provides a familiar experience for
				users of desktop browsers.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 10, offset: 1 }}>
					<Image src={ImageSurf} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				The most powerful aspect of this TV browser is its multi-tab
				support; users can open up to 5 tabs at a time. Familiar
				features are also present, like back/forward, refresh and
				bookmark. To access bookmarks, simply click on the menu icon at
				the upper left.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 10, offset: 1 }}>
					<Image src={ImageMenu} />
				</Col>
			</Row>
		</>
	);
}
