import type React from "react";

const Footer: React.FC = () => {
	return (
		<footer id="footer">
			<div className="inner">
				<ul className="icons">
					<li>
						<a
							href="https://www.linkedin.com/in/jordanboardman/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="devicon-linkedin-plain"></i>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/jordanboardman"
							target="_blank"
							rel="noreferrer"
						>
							<i className="devicon-github-original-wordmark"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="footerpics">
				<ul className="copyright">
					<li>
						<a href="http://html5up.net">Design: HTML5 UP</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
