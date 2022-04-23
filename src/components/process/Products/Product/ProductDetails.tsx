import React, { useContext, useState } from "react";
import styled from "styled-components";
import FlexContainer from "../../../shared/FlexContainer";
import { StoreContext } from "../../../../stores/StoreContext";
import { observer } from "mobx-react";
import { StyledTag } from "./ProductRow";
import RadioButtonGroup from "../../../shared/RadioButtonGroup";
import StyledText from "../../../shared/StyledText";
import { theme } from "../../../../theme/Theme";

interface Option {
	name: string,
	value: string
}

const ProductDetails = observer(() => {
	const { productStore } = useContext(StoreContext);
	const { selectProduct } = productStore;
	const options = [
		{ name: selectProduct?.option1, value: "option 1" },
		{ name: selectProduct?.option2, value: "option 2" }
	];
	const [checkedOption, setCheckedOption] = useState(options[0].value);

	const onSelectOption = (option: Option) => {
		setCheckedOption(option.value)
	};

	return <StyledDetailsContainer>
		<StyledText
			fontSize="16px"
			fontWeight="500"
			color={theme.colors.colorBlack}
			margin="10px 20px"
		>
			Product Details
		</StyledText>
		<StyledLine />
		<FlexContainer padding="0 20px" flexDirection="column" width="auto">
			<StyledText
				fontSize="14px"
				fontWeight="500"
				color={theme.colors.colorBlack}
				margin="40px 0 0 0"
			>
				{selectProduct?.productName}
			</StyledText>
			<StyledText
				fontSize="14px"
				fontWeight="500"
				color={theme.colors.colorBlack}
				margin="10px 0 30px 0"
			>
				{selectProduct?.category}
			</StyledText>
			<FlexContainer gap="20px" flexWrap="wrap">
				{selectProduct?.tags.map((tag, i) =>
					<StyledTag key={i}>
						{tag}
					</StyledTag>
				)}
			</FlexContainer>
			<StyledButton>
				Go to Manufacturer
			</StyledButton>
			<StyledText
				fontSize="14px"
				fontWeight="400"
				color={theme.colors.colorBlack}
				margin="0 0 20px 0"
			>
				{selectProduct?.description}
			</StyledText>

			{selectProduct?.option1 && selectProduct?.option2 &&
				<RadioButtonGroup
					values={options as Option[]}
					onChange={(e: Option) => onSelectOption(e)}
					checkedValue={checkedOption}
				/>
			}
		</FlexContainer>
	</StyledDetailsContainer >
});

export default ProductDetails;

const StyledDetailsContainer = styled.div`
	background:${props => props.theme.colors.colorWhite};
	width: 320px;
	height:auto;
`;

const StyledButton = styled.button`
	background:${props => props.theme.colors.colorAqua};
	border-radius: 2px;
	width: 157px;
	height: 32px;
	font-weight: 500;
	font-size: 14px;
	color:${props => props.theme.colors.colorWhite};
	border: none;
	margin: 20px 0;
	cursor: pointer;
`;

const StyledLine = styled.div`
	background: ${props => props.theme.colors.colorGrey};
	height: 0.99px;
	width: 100%;
`