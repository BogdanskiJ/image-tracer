import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-height: 80px;
	width: 100%;
	background: ${({ theme }) => theme.color.header};
`;
