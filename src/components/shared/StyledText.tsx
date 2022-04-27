import styled from "../../theme/Theme";

interface Props {
	fontSize: string
	fontWeight: string
	margin?: string
	color?: string
};

const StyledText = styled.p<Props>`
	font-size: ${props => props.fontSize};
	font-weight: ${props => props.fontWeight};
	margin: ${props => props.margin};
	color:${props => props.color ?? props.theme.colors.colorBlack};
`;

export default StyledText;