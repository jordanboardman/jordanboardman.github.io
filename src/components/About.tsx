import type React from "react";

const About: React.FC = () => {
	return (
		<section id="one">
			<header className="major">
				<h2>
					Jordan Boardman
					<br />
				</h2>
			</header>
			<p>
				As a successful career shifter from Music/Music Education to Software
				Development, I feel very confident in my abilities to provide quality
				work on top of being a quality person. I value balance, empathy,
				sustainability, and clean coding practices. Currently I am a Software
				Developer 2 at Booz Allen Hamilton and have been working for them for
				over 3 years. When I'm not working, you can find me spending time with
				my family, playing/watching soccer, playing video games, and
				occasionally digging into a sci-fi/fantasy epic.
			</p>
			<div className="resumebutton">
				<ul className="actions">
					<li>
						<a
							href="./Jordan Boardman | Resume 2026.pdf"
							target="_blank"
							rel="noreferrer"
							className="button"
						>
							Checkout My Resume
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
