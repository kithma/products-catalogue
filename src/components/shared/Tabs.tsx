import { theme } from "../../theme/Theme";
import FlexContainer from "./FlexContainer";
import StyledText from "./StyledText";
import styled from "styled-components";

interface Props {
	steps: { name: string, disabled: boolean }[]
	currentStep: number
};

const Tabs = ({ steps, currentStep }: Props) => {
	return <FlexContainer margin="20px 0">
		{steps.map((step, i) => {
			const isActive = currentStep === i + 1;
			return <StyledContainer key={i} isDisabled={step.disabled}>
				<StyledText
					fontSize="14px"
					fontWeight="500"
					color={isActive ? theme.colors.colorAqua : theme.colors.colorMischka}
					margin="0 20px 10px 20px"
				>
					{step.name}
				</StyledText>
				<StyledLine isActive={isActive} />
			</StyledContainer>
		})}
	</FlexContainer>
};

export default Tabs;


const StyledContainer = styled.div<{ isDisabled: boolean }>`
	cursor:${props => props.isDisabled ? "default" : "pointer"};
`;

const StyledLine = styled.div<{ isActive: boolean }>`
	background: ${props => props.isActive ? props.theme.colors.colorAqua : props.theme.colors.colorGrey};
	height: 2px;
`;