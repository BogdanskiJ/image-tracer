import Slider from "@mui/joy/Slider";
import { StyledSliderBox, StyledSliderName } from "./styled";

export const SliderComponent = ({
	marks,
	defaultValue,
	minValue,
	maxValue,
	sliderName,
}) => {
	return (
		<StyledSliderBox>
			<StyledSliderName>{sliderName}</StyledSliderName>
			<Slider
				aria-label="Always visible"
				marks={[
					{
						value: minValue,
						label: `${minValue}`,
					},
					{
						value: maxValue,
						label: `${maxValue}`,
					},
				]}
				orientation="horizontal"
				size="md"
				valueLabelDisplay="on"
				variant="solid"
				defaultValue={defaultValue}
				max={maxValue}
			/>
		</StyledSliderBox>
	);
};
