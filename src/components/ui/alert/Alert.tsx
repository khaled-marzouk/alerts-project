import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
interface Iprops {
	type: string;
	icon: ReactNode;
	title: string;
	description?: string;
}

const Alert = ({ type = "alert-danger", icon, title, description }: Iprops) => {
	return (
		<div className={type}>
			<div className="alerts-header">
				<div className="title">
					<span>{icon}</span>
					<h4>{title}</h4>
				</div>

				<X className="close" />
			</div>

			<p>{description}</p>
		</div>
	);
};

export default Alert;
