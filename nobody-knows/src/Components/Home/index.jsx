import React, { useEffect } from "react";
// import { getGetAwayPlatforms } from '../../data';
import { EventbriteButton } from "../";
import flyer from "../../assets/images/site-flyer.png";
// const platforms = getGetAwayPlatforms();
const Home = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage("HOME");
	}, [setCurrentPage]);
	return (
		<main className="w-100 vh-100 h-100-l flex justify-center items-center">
			<section className="w-100 flex flex-column  justify-center items-center mh5-l pa2 pa0-ns mt5-l">
				<div className="w-100 w-75-l h-75 mb2 flex justify-center items-center">
					<img src={flyer} alt="" className="w-50-ns w-100" />
				</div>
				<div className="flex flex-column justify-center items-center mt4 pa2">
					<EventbriteButton
						classNames="mr4"
						// isLoading={}
						ebEventId={145310251875}
					>
						Get Tickets
					</EventbriteButton>
					<p className="serif white f3-ns f4">
						Powered by{" "}
						<a
							className="link hover-red white fw7 i"
							href="https://whenwherewhat.com"
							rel="nopenner noreferrer"
							target="_blank"
						>
							When Where What
						</a>
					</p>
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
				</div>
			</section>
		</main>
	);
};

export default Home;
