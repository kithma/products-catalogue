import React from "react";
import FlexContainer from "./FlexContainer";
import styled from "styled-components";
import StyledText from "../shared/StyledText";
import { theme } from "../../theme/Theme";

interface Props {
	options: string[],
	values: string[],
	onChange: (val: string) => void;
}

const CheckboxGroup = ({ options, values, onChange }: Props) => {

	const onChangeElement = (optionValue: string) => {
		onChange(optionValue);
	}

	return <FlexContainer padding="0 20px 10px 20px">
		{
			options.map(option => {
				return <FlexContainer key={option} gap="5px" alignItems="center">
					<StyledInput
						type="checkbox"
						name={option}
						value={option}
						checked={values.includes(option)}
						onChange={() => onChangeElement(option)}
					/>
					<StyledText
						fontSize="13px"
						color={theme.colors.colorDarkGrey}
						fontWeight="500"
					>
						{option}
					</StyledText>
				</FlexContainer>
			})
		}
	</FlexContainer >
}

export default CheckboxGroup;

const StyledInput = styled.input`
	cursor:pointer
`