import React, { useContext, useEffect, useState, useRef } from "react";
import CheckboxGroup from "../../shared/CheckboxGroup";
import { Category } from "../../../models/ProductModel";
import FlexContainer from "../../shared/FlexContainer";
import styled from "../../../theme/Theme";
import SearchInput from "../../shared/SearchInput";
import { StoreContext } from "../../../stores/StoreContext";
import ProductRow from "./Product/ProductRow";
import ProductDetails from "./Product/ProductDetails";
import { observer } from "mobx-react";
import StyledText from "../../shared/StyledText";

const ProductOptions = [
	Category.SoftwareDevelopment,
	Category.DailyBusiness,
	Category.GraphicEditors,
	Category.Developer,
	Category.ManagementTools
]

const Products = observer(() => {
	const { productStore } = useContext(StoreContext);
	const { products, selectProduct } = productStore;
	const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [showScrollButton, setShowScrollButton] = useState(false);
	const topRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = topRef.current;
		const observer = new IntersectionObserver(
			([entry]) => setShowScrollButton(!entry.isIntersecting)
		);
		observer.observe(node as HTMLDivElement)
		return () => { observer.disconnect() }
	});

	useEffect(() => {
		if (selectedCategories.length > 0 || searchTerm) {
			productStore.loadProducts(selectedCategories, searchTerm);
		} else productStore.clearValues();

	}, [searchTerm, selectedCategories, productStore])

	const onSelectCategory = (category: string) => {
		const selectedValues = [...selectedCategories]
		if (selectedValues.includes(category as Category))
			selectedValues.splice(selectedValues.indexOf(category as Category), 1);
		else
			selectedValues.push(category as Category);

		setSelectedCategories(selectedValues);
	};

	const onSearch = (searchText: string) => {
		setSearchTerm(searchText)
	};

	const scrollToTop = () => {
		const node = topRef.current;
		node?.scrollIntoView();
	};

	return <FlexContainer gap="30px">
		<FlexContainer flexDirection="column" position="relative">
			<div ref={topRef} />
			<StyledOptionContainer flexDirection="column">
				<StyledText
					fontSize="16px"
					fontWeight="500"
					margin="10px 20px"
				>
					I'm looking for...
				</StyledText>
				<StyledLine />
			</StyledOptionContainer>
			<StyledOptionContainer flexDirection="column" padding="20px 0" gap="10px">
				<FlexContainer>
					<CheckboxGroup
						options={ProductOptions}
						onChange={(category) => onSelectCategory(category)}
						values={selectedCategories}
					/>
				</FlexContainer>
				<SearchInput onChange={onSearch} />
			</StyledOptionContainer>

			{products.length === 0 && (searchTerm || selectedCategories.length > 0) &&
				<StyledText
					fontSize="14px"
					fontWeight="500"
					margin="40px 20px"
				>
					No products found for given criteria
				</StyledText>}

			<FlexContainer flexDirection="column" gap="30px" margin="20px 0">
				{products.map(product => {
					return <ProductRow key={product.id} product={product} />
				})}
			</FlexContainer>
			{showScrollButton && <FlexContainer justifyContent="center">
				<Icon src="./icons/scroll-icon.svg" alt="" onClick={scrollToTop} />
			</FlexContainer>}
		</FlexContainer>
		<StyledDetailsContainer isHidden={!selectProduct}>
			<ProductDetails />
		</StyledDetailsContainer>

	</FlexContainer>
});

export default Products;

interface StyledDetailsContainerProps {
	isHidden: boolean
};

const StyledOptionContainer = styled(FlexContainer)`
	background: ${props => props.theme.colors.colorWhite};
`;

const StyledLine = styled.div`
	background: ${props => props.theme.colors.colorGrey};
	height: 0.99px;
	width: 100%;
`;

const StyledDetailsContainer = styled(FlexContainer) <StyledDetailsContainerProps>`
	visibility:${props => props.isHidden ? "hidden" : "visible"};
	max-width: 320px;
`;

const Icon = styled.img`
	position: fixed;
	bottom: 0;
	cursor: pointer;

`