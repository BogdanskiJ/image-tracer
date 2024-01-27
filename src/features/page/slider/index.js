import Slider from "@mui/joy/Slider";

export const SliderComponent = ({ marks, defaultValue, maxValue }) => {
	return (
		<Slider
			marks={marks}
			orientation="horizontal"
			size="md"
			valueLabelDisplay="on"
			variant="solid"
			defaultValue={defaultValue}
			max={maxValue}
		/>
	);
};
