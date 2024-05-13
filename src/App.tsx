import { Ban } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/alert/Alert";

function App() {
	return (
		<>
			<Alert
				type={"alert-danger"}
				icon={<Ban size={20} />}
				title={"something went wrong"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, nesciunt id sed aliquid quas numquam deserunt voluptatum quidem nisi."
				}
			/>
			<Alert
				type="alert-default"
				icon={<Ban size={20} />}
				title={"something went wrong"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, nesciunt id sed aliquid quas numquam deserunt voluptatum quidem nisi."
				}
			/>
			<Alert
				type="alert-info"
				icon={<Ban size={20} />}
				title={"something went wrong"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, nesciunt id sed aliquid quas numquam deserunt voluptatum quidem nisi."
				}
			/>
		</>
	);
}

export default App;
