import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ImagePlayStore from "../../assets/google-play-badge.png";
import ImageBluetooth from "../../assets/logicui/recorder/bluetooth.jpg";
import ImagePreview from "../../assets/logicui/recorder/preview.jpg";
import ImageCancel from "../../assets/logicui/recorder/cancel.jpg";

export default function Recorder() {
	return (
		<>
			<div className="Buffer--50px" />
			<a
				href="https://play.google.com/store/apps/details?id=com.logicui.audiorecorder"
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
				LogicUI Audio Recorder makes recording with Bluetooth
				accessories easy. Simply select Bluetooth as your audio source
				and the app will attempt to connect to your Bluetooth device. If
				disconnected, the app will switch to your device&apos;s
				microphone before attempting to reconnect again.
			</p>
			<Row>
				<Col
					sm={12}
					md={{ span: 4, offset: 4 }}
					lg={{ span: 4, offset: 4 }}
				>
					<Image src={ImageBluetooth} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				To ensure that your microphone is connected and working, simply
				refer to preview. It is available even when you are not
				recording, so there is no need to start and stop a recording
				just to check it.
			</p>
			<Row>
				<Col
					sm={12}
					md={{ span: 4, offset: 4 }}
					lg={{ span: 4, offset: 4 }}
				>
					<Image src={ImagePreview} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				As a content producer, I know how frustrating it can be when you
				make some error during recording, and have to go through a
				tedious process to delete it before resuming again. On this app,
				you can simply press the cancel toggle during recording, and the
				current recording will end without saving.
			</p>
			<Row>
				<Col
					sm={12}
					md={{ span: 4, offset: 4 }}
					lg={{ span: 4, offset: 4 }}
				>
					<Image src={ImageCancel} />
				</Col>
			</Row>
		</>
	);
}
