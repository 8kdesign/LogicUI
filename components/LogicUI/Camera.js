import { Row, Col } from "react-bootstrap";
import ImagePlayStore from "../../assets/google-play-badge.png";
import ImageFocus from "../../assets/logicui/camera/focus.gif";
import ImageZoom from "../../assets/logicui/camera/zoom.gif";
import ImageSmile from "../../assets/logicui/camera/smile.gif";
import Image from "next/image";

export default function Camera() {
	return (
		<>
			<div className="Buffer--50px" />
			<a
				href="https://play.google.com/store/apps/details?id=com.logicui.logicuicamera"
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
				Ever wanted to take a photo of a beautiful scene, but struggled
				to focus the camera because your other hand is occupied? If only
				there was a way to select focus with just one hand. With the
				this camera concept, you can. Simply drag on the shutter button
				to adjust focus.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 10, offset: 1 }}>
					<Image src={ImageFocus} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				Adjusting zoom and exposure is just as easy with one hand.
				Simply drag the gallery or switch camera icon upwards/downwards
				respectively to adjust them.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 10, offset: 1 }}>
					<Image src={ImageZoom} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				Additionally, enable smile-detection and the app will
				automatically take a shot when everyone in frame is smiling.
				This feature is implemented with Google&apos;s ML Kit face
				detection API.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 10, offset: 1 }}>
					<Image src={ImageSmile} />
				</Col>
			</Row>
		</>
	);
}
