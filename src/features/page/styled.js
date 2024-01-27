import styled from "styled-components";
import back from "../../images/back.jpg";

export const PageContainer = styled.div`
	width: 100%;
	min-height: 500px;
	max-width: 1440px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-image: url(${back});
`;
