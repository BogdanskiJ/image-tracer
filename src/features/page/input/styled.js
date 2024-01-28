import styled from "styled-components";

export const StyledInputOuterBox = styled.div`
	background: hsla(0, 0%, 100%, 0.25);
	backdrop-filter: blur(5px);
	width: 300px;
	height: 300px;
	padding: 20px;
	border: 1px solid #b7b7b7;
	border-radius: 10px;
`;
export const StyledInputBox = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	/* background: gray; */
	border-radius: 10px;
	border: 2px black dashed;
	&:hover {
		backdrop-filter: blur(5px);
	}
`;
export const StyledInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	background-color: red;
	cursor: pointer;
	z-index: 10;
`;

export const StyledImgDrop = styled.img`
	width: 50px;
	height: 50px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	z-index: 9;
`;

export const StyledImgName = styled.span`
	width: 80%;
	text-align: center;
	position: absolute;
	bottom: 20%;
	left: 50%;
	font-size: 18px;
	font-weight: bold;
	transform: translateX(-50%);
	z-index: 9;
`;

export const StyledButton = styled.button`
	width: 80%;
	text-align: center;
	position: absolute;
	bottom: 20%;
	left: 50%;
	font-size: 18px;
	font-weight: bold;
	transform: translateX(-50%);
	z-index: 9;
`;
