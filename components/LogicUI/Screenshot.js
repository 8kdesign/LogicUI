import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ImagePlayStore from "../../assets/google-play-badge.png";
import ImageFlexible from "../../assets/logicui/screenshot/flexible.jpg";
import ImageBulk from "../../assets/logicui/screenshot/bulk.jpg";
import ImageCustomize from "../../assets/logicui/screenshot/customize.jpg";
import ImageGIF from "../../assets/logicui/screenshot/gif.jpg";
import ImageTransparent from "../../assets/logicui/screenshot/transparent.jpg";

export default function Screenshot() {
	return (
		<>
			<div className="Buffer--50px" />
			<a
				href="https://play.google.com/store/apps/details?id=com.logicui.screenshotframer"
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
				LogicUI Screenshot Framer makes it super easy to frame your
				screenshots. With flexible frames, there is no need to worry
				about choosing a frame with the correct aspect ratio. All frames
				scale intelligently to fit screenshots instead of stretching or
				cropping them.
			</p>
			<Row>
				<Col
					sm={12}
					md={{ span: 4, offset: 4 }}
					lg={{ span: 4, offset: 4 }}
				>
					<Image src={ImageFlexible} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				Another feature that is unique to Screenshot Framer is the
				ability to convert video screenshots to GIF, while adding a
				device frame to it at the same time. This is a must have feature
				for UI designers and app developers looking to demonstrate their
				designs or prototypes.
			</p>
			<Row>
				<Col
					sm={12}
					md={{ span: 4, offset: 4 }}
					lg={{ span: 4, offset: 4 }}
				>
					<Image src={ImageGIF} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				The app supports a variety of frames and background to choose
				from, including a transparent one that can easily be integrated
				into any presentation slide. More frames will be added over
				time.
			</p>
			<Row>
				<Col
					sm={12}
					md={{ span: 6, offset: 0 }}
					lg={{ span: 4, offset: 2 }}
				>
					<Image src={ImageCustomize} />
				</Col>
				<Col
					sm={12}
					md={{ span: 6, offset: 0 }}
					lg={{ span: 4, offset: 0 }}
				>
					<Image src={ImageTransparent} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				Have many screenshots? Import them all at once. When exporting,
				the same type of frame will be used for all of them, scaled
				individually to each screenshot.
			</p>
			<Row>
				<Col
					sm={12}
					md={{ span: 4, offset: 4 }}
					lg={{ span: 4, offset: 4 }}
				>
					<Image src={ImageBulk} />
				</Col>
			</Row>
		</>
	);
}
