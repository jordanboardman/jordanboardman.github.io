import type React from "react";

interface SkillIconProps {
	icon: string;
	title: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, title }) => {
	return (
		<li className="skill-item">
			<i className={icon} title={title} aria-label={title}></i>
		</li>
	);
};

export default SkillIcon;
