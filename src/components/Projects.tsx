import type React from "react";

interface Project {
	id: number;
	title: string;
	description: string;
	techStack: string;
	image: string;
	repoUrl: string;
}

const Projects: React.FC = () => {
	const projects: Project[] = [
		{
			id: 1,
			title: "Rudi",
			description:
				'Rudi is the perfect companion app for all drumming enthusiasts! Learn all 40 rudiments in a fun and "learning by doing" format.',
			techStack:
				"HTML, CSS, MaterialUI, JavaScript, React, Node, Express, PostgreSQL",
			image: "./images/home1.png",
			repoUrl: "https://github.com/jordanboardman/rudi-app-front-end",
		},
		{
			id: 2,
			title: "Ripple",
			description:
				"Ripple is a donation app designed to help everyday people make a difference by donating what they can each month to various non-profits and Earth focused businesses.",
			techStack:
				"HTML, CSS, MaterialUI, JavaScript, React, Ruby, Rails, PostgreSQL",
			image: "./images/ripple-logo1.png",
			repoUrl: "https://github.com/jordanboardman/devcarolina-fullstack",
		},
	];

	return (
		<section id="two">
			<h2>Recent Projects</h2>
			<div className="row">
				{projects.map((project) => (
					<article key={project.id} className="col-6 col-12-xsmall work-item">
						<img
							src={project.image}
							className="image fit thumb"
							alt={project.title}
						/>
						<h3>{project.description}</h3>
						<p>{project.techStack}</p>
						<div>
							<a href={project.repoUrl} target="_blank" rel="noreferrer">
								Github Repository
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Projects;
