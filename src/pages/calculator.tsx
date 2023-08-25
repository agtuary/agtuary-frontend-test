import { Results } from "../components/results";
import { Inputs } from "../components/inputs";

export const Calculator = () => {
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
