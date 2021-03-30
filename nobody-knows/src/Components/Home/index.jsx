import React, { useEffect, useState } from "react";
// import { getGetAwayPlatforms } from '../../data';
import { Play, Pause, Download, LoginForm } from "../";

import useAudio from "../../utils/useAudio";
import { demoTrackURL } from "../../data";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
// const platforms = getGetAwayPlatforms();
const Home = ({ setCurrentPage, history, user, setUser }) => {
	useEffect(() => {
		setCurrentPage("HOME");
	}, [setCurrentPage]);

	useEffect(() => {
		if (user) {
			setShowSong(true);
			toggle();
		}
	}, [user]);

	const { curTime, duration, playing, toggle, setClickedTime } = useAudio(
		demoTrackURL
	);
	const curPercentage = (curTime / duration) * 100;

	const [showSong, setShowSong] = useState(false);

	function formatTime(duration) {
		return moment
			.duration(duration, "seconds")
			.format("mm:ss", { trim: false });
	}

	return (
		<>
			{!showSong && (
				<main className="w-100 h-100-l flex justify-center items-center">
					<section className="w-100  flex flex-column  justify-center items-center mh5-l pa2 pa0-ns mt5-l">
						<div className="w-100 w-75-l h-75 mb2 flex justify-center items-center">
							<LoginForm
								toggle={toggle}
								setShowSong={setShowSong}
								setUser={setUser}
							/>
						</div>

						{/* {platforms.map((platform, idx) => (
						<div key={platform.title} className="h-25 mh3">
							<a href={platform.link} rel="noopener noreferrer" target="_blank">
								<img
									className="h3-ns w3-ns h2 w2 dib"
									src={platform.iconSrc}
									alt=""
								/>
							</a>
						</div>
					))} */}
					</section>
				</main>
			)}
			{showSong && (
				<div className="player absolute bottom--0">
					<h2 className="title fw3 f5 ttu flex items-center white">
						&nbsp;Mileage prod. tokyo ave
					</h2>
					{/* <p>{formatTime(curTime)}</p>
				<p>{formatTime(duration)}</p> */}
					<div
						className="pointer white ba bt-0 b--white h-100 ma0 flex justify-center items-center"
						onClick={toggle}
					>
						{playing ? <Pause /> : <Play />}
					</div>
					<div className="bb b--white">
						<div
							className="bar__progress "
							style={{ width: `${curPercentage - 1}%` }}
						/>
					</div>

					<div className="pointer white ba bt-0 b--white h-100 ma0 flex justify-center items-center">
						<a href={demoTrackURL} download className="white link dim">
							<Download />
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default Home;
