import React, { useContext } from "react";
import { Product } from "../../../../models/ProductModel";
import FlexContainer from "../../../shared/FlexContainer";
import styled from "styled-components";
import { StoreContext } from "../../../../stores/StoreContext";
import { observer } from "mobx-react";
import StyledText from "../../../shared/StyledText";
import { theme } from "../../../../theme/Theme";

interface Props {
	product: Product
}

const ProductRow = observer(({ product }: Props) => {
	const { productStore } = useContext(StoreContext);
	const { selectedProductId } = productStore;

	const onSelectItem = () => {
		productStore.setSelectedProduct(product.id);
	};

	return <FlexContainer>
		<StyledProductRow
			flexDirection="column"
			padding="10px 20px"
			onClick={onSelectItem}
			isSelected={product.id === selectedProductId}
		>
			<FlexContainer justifyContent="space-between" alignItems="center">
				<FlexContainer gap="20px" flexDirection="column" maxWidth="70%">
					<StyledText
						fontSize="14px"
						fontWeight="500"
					>
						{product.productName}
					</StyledText>
					<FlexContainer gap="20px" flexWrap="wrap">
						{product.tags.map((tag, i) =>
							<StyledTag key={i}>
								{tag}
							</StyledTag>
						)}
					</FlexContainer>
				</FlexContainer>
				<StyledText
					fontSize="14px"
					color={theme.colors.colorDarkGrey}
					fontWeight="400"
				>
					{product.category}
				</StyledText>
			</FlexContainer>
		</StyledProductRow>
	</FlexContainer>
});

export default ProductRow;

interface StyledProductRowProps {
	isSelected: boolean
}

const StyledProductRow = styled(FlexContainer) <StyledProductRowProps>`
	background: ${props => props.theme.colors.colorWhite};
	cursor: pointer;
	border:${props => props.isSelected ? `1px solid ${props.theme.colors.colorAqua}` : "none"};
	border-radius: 4px;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
`

export const StyledTag = styled.div`
	background:  ${props => props.theme.colors.colorAqua};
	background-color: rgba(18,184,255,.15);
	color:${props => props.theme.colors.colorAqua};
	padding: 7px 10px;
	border-radius: 4px;
	font-weight: bold;
	font-size: 12px;
`