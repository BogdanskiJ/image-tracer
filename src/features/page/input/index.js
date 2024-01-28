import {
	StyledButton,
	StyledImgDrop,
	StyledImgName,
	StyledInput,
	StyledInputBox,
	StyledInputOuterBox,
} from "./styled";
import golden from "../../../images/golden.jpg";
import dragAndDrop from "../../../images/dragAndDrop.svg";

export const InputComponent = ({ handleFileChange }) => {
	return (
		<StyledInputOuterBox>
			<StyledInputBox>
				<StyledInput
					type="file"
					id="fileInput"
					onChange={handleFileChange}
					multiple
					accept="image/png, image/jpeg, image/jpg"
					color="primary"
					size="md"
					variant="outlined"
				/>
				<StyledImgDrop src={dragAndDrop} />
				<StyledImgName>Drop your images here</StyledImgName>
			</StyledInputBox>
		</StyledInputOuterBox>
	);
};
