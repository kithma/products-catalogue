import React from "react";
import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import StyledText from "./StyledText";
import { theme } from "../../theme/Theme";

interface Props {
	values: { name: string, value: string }[],
	onChange: (e: any) => void,
	checkedValue: string,
	disabled?: boolean
}


interface RadioButtonProps extends Omit<Props, "values"> {
	value: { name: string, value: string },
}

const RadioButtonGroup = ({ values, onChange, checkedValue, disabled = false }: Props) => {
	return <>
		{
			values.map((value, i) => {
				return <RadioButton
					key={i}
					value={value}
					onChange={() => onChange(value)}
					checkedValue={checkedValue}
					disabled={disabled}
				/>
			})
		}
	</>
};

const RadioButton = ({ value: { name, value }, checkedValue, onChange, disabled }: RadioButtonProps) => {
	const isChecked = checkedValue === value;

	return <FlexContainer
		margin="20px 20px 20px 0"
		width="auto"
		flexDirection="column"
	>
		<FlexContainer
			margin="0 20px 0 0"
			width="auto"
			gap="10px"
		>
			<StyledRadioButtonContainer
				onClick={() => onChange(value)}
				isChecked={isChecked}
			>
				{isChecked && <StyledRadioButton />}
			</StyledRadioButtonContainer>

			<StyledText
				fontSize="14px"
				fontWeight="500"
				color={isChecked ? theme.colors.colorBlack : theme.colors.colorDarkGrey}
			>
				{value}
			</StyledText>
		</FlexContainer>
		<StyledText
			fontSize="14px"
			fontWeight="400"
			margin="10px 20px 10px 0"
		>
			{name}
		</StyledText>
	</FlexContainer>
}

export default RadioButtonGroup;

interface StyledRadioButtonContainerProps {
	isChecked: boolean
};

const StyledRadioButtonContainer = styled.div<StyledRadioButtonContainerProps>`
	width: 18px;
	height: 18px;
	border: 1px solid ${props => props.isChecked ? props.theme.colors.colorAqua : props.theme.colors.colorMischka};
	border-radius: 100%;;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const StyledRadioButton = styled.div`
	width: 10px;
	height: 10px;
	background: ${props => props.theme.colors.colorAqua};
	border-radius: 100%;
`;

