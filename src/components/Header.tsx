import type React from "react";
import SkillIcon from "./SkillIcon";

interface Skill {
	icon: string;
	title: string;
}

const Header: React.FC = () => {
	const topSkills: Skill[] = [
		{ icon: "devicon-javascript-plain", title: "JavaScript" },
		{ icon: "devicon-typescript-plain", title: "TypeScript" },
		{ icon: "devicon-react-original-wordmark", title: "React" },
		{ icon: "devicon-angularjs-plain", title: "Angular" },
		{ icon: "devicon-redux-original", title: "Redux" },
		{ icon: "devicon-nodejs-plain-wordmark", title: "Node" },
		{ icon: "devicon-java-plain", title: "Java" },
		{ icon: "devicon-spring-plain-wordmark", title: "Spring Boot" },
		{ icon: "devicon-html5-plain-wordmark", title: "HTML" },
		{ icon: "devicon-css3-plain-wordmark", title: "CSS" },
		{ icon: "devicon-githubcodespaces-plain", title: "GitHub Copilot" },
	];

	const bottomSkills: Skill[] = [
		{ icon: "devicon-ruby-plain", title: "Ruby" },
		{ icon: "devicon-rails-plain-wordmark", title: "Rails" },
		{ icon: "devicon-postgresql-plain-wordmark", title: "PostgreSQL" },
		{ icon: "devicon-express-original-wordmark", title: "Express" },
		{ icon: "devicon-python-plain-wordmark", title: "Python" },
		{ icon: "devicon-git-plain-wordmark", title: "Git" },
		{ icon: "devicon-github-original-wordmark", title: "GitHub" },
		{ icon: "devicon-docker-plain-wordmark", title: "Docker" },
		{ icon: "devicon-postman-plain", title: "Postman" },
		{ icon: "devicon-amazonwebservices-plain-wordmark", title: "AWS" },
	];

	return (
		<header id="header">
			<div className="inner">
				<div className="headerbox">
					<a
						href="https://github.com/jordanboardman"
						target="_blank"
						rel="noreferrer"
						id="avatarpic"
						className="image avatar"
					>
						<img src="./images/Wedding:Pro Pic Small.png" alt="pic of Jordan" />
					</a>
					<div className="header-title">
						<h1 className="titlebox">
							<b>Fullstack Software Developer</b>
						</h1>
					</div>
				</div>
				<div className="skillbox">
					<ul className="skills">
						<div className="skillstoprow">
							{topSkills.map((skill) => (
								<SkillIcon
									key={skill.title}
									icon={skill.icon}
									title={skill.title}
								/>
							))}
						</div>
						<div className="skillsbottomrow">
							{bottomSkills.map((skill) => (
								<SkillIcon
									key={skill.title}
									icon={skill.icon}
									title={skill.title}
								/>
							))}
						</div>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
