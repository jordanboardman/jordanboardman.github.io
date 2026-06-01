import type React from "react";

interface SkillIconProps {
	icon: string;
	title: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, title }) => {
	return (
		<li>
			<i className={icon} title={title}></i>
		</li>
	);
};

export default SkillIcon;
