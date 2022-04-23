import styled from "styled-components";

interface Props {
	flexDirection?: "row" | "column"
	justifyContent?: "center" | "flex-start" | "flex-end" | "space-between"
	alignItems?: "center" | "flex-start" | "flex-end"
	flexWrap?: "wrap"
	width?: string
	maxWidth?: string
	padding?: string
	gap?: string
	margin?: string
	position?: "relative"
};

const FlexContainer = styled.div<Props>`
	display: flex;
	flex-direction:${props => props.flexDirection || "row"};
	justify-content: ${props => props.justifyContent || "flex-start"};
	align-items:${props => props.alignItems || "flex-start"};
	flex-wrap:${props => props.flexWrap};
	width:${props => props.width || "100%"};
	max-width:${props => props.maxWidth};
	padding:${props => props.padding};
	gap:${props => props.gap};
	margin:${props => props.margin};
	position:${props => props.position};

`;

export default FlexContainer;