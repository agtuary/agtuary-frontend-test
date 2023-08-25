import { Results } from "../components/results";
import { Inputs } from "../components/inputs";

export const Home = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				height: "100%",
			}}
		>
			<Results />
			<Inputs />
		</div>
	);
};
