import { Row, Col } from "react-bootstrap";
import ImagePlayStore from "../../assets/google-play-badge.png";
import ImageAddPlaylist from "../../assets/logicui/lmp/add_playlist.jpg";
import ImageArtistMetadata from "../../assets/logicui/lmp/artist_metadata.jpg";
import ImageSearch from "../../assets/logicui/lmp/search.jpg";
import ImageMusicControl from "../../assets/logicui/lmp/music_control.png";
import Image from "next/image";

export default function MusicPlayer() {
	return (
		<>
			<div className="Buffer--50px" />
			<a
				href="https://play.google.com/store/apps/details?id=com.logicui.musicplayer"
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
				LogicUI Music Player (LMP) makes managing of playlists easy by
				allowing users to add artists, albums or individual tracks to a
				playlist. Any track corresponding to the selected artists and
				albums will automatically be added to the playlist when the app
				is restarted.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 8, offset: 2 }}>
					<Image src={ImageAddPlaylist} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				LMP supports a variety of delimiters for artist metadata. You
				can use &apos; + &apos;, &apos; / &apos; or &apos;;&apos; to
				seperate artist names and the app will be able to allocate each
				track to the corresponding artists properly. Take note of the
				blankspace at the front and back for the first two delimiters.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 8, offset: 2 }}>
					<Image src={ImageArtistMetadata} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				Optimizations has been done for Chinese characters, from sorting
				of tracks by pinyin to the way search is handled. Both
				traditional and simplified Chinese characters are treated as
				equal in search, allowing for a more flexible experience when
				searching.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 8, offset: 2 }}>
					<Image src={ImageSearch} />
				</Col>
			</Row>
			<div className="Buffer--20px" />
			<p className="Text--paragraph">
				A minimalistic design and conventional layout provides a gentle
				learning curve so you can master LMP in minutes. Less used
				features like sharing of audio files and editing of metadata are
				excluded for a simpler experience. For editing of metadata, I
				recommend using{" "}
				<a
					href="https://www.mp3tag.de/en/"
					target="_blank"
					rel="noreferrer"
				>
					Mp3tag
				</a>
				.
			</p>
			<Row>
				<Col sm={12} md={12} lg={{ span: 8, offset: 2 }}>
					<Image src={ImageMusicControl} />
				</Col>
			</Row>
		</>
	);
}
