import React, { useState } from "react";
import FlexContainer from "../shared/FlexContainer";
import Products from "./Products/Products";
import StyledText from "../shared/StyledText";
import { theme } from "../../theme/Theme";
import Tabs from "../shared/Tabs";

const steps = [
	{ name: "1 Product", disabled: false },
	{ name: "2 Addresses", disabled: true },
	{ name: "3 Overview", disabled: true }
];

const Process = () => {
	const [step, setStep] = useState(1);

	return <FlexContainer maxWidth="1220px" flexDirection="column">
		<StyledText
			fontSize="18px"
			color={theme.colors.colorBlack}
			fontWeight="400"
			margin="20px 0 10px 0"
		>
			Create Demand
		</StyledText>

		<StyledText
			fontSize="14px"
			color={theme.colors.colorDarkGrey}
			fontWeight="400"
			margin="0 0 30px 0"
		>
			Search the product you need here. Use tags to find any alternative.
		</StyledText>
		<Tabs
			steps={steps}
			currentStep={step}
		/>
		{step === 1 && <Products />}
	</FlexContainer>
}

export default Process;