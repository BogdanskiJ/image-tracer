import styled from "styled-components";
import back from "../../images/back.jpg";

export const PageContainer = styled.div`
	width: 100%;
	min-height: 500px;
	max-width: 1440px;
	min-width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-image: url(${back});
	background-position: center;
	/* background-attachment: fixed; */
	background-repeat: repeat;
	background-size: contain;
`;

export const StyledInput = styled.input`
	width: 400px;
	height: 400px;
`;

export const StyledPageBox = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	padding: 50px;
	gap: 10px;
`;
