import React from "react";
import { ProductStore } from "./ProductStore";

interface StoreContextType {
	productStore: ProductStore;
}

const productStore = new ProductStore();

export const StoreContext = React.createContext<StoreContextType>({
	productStore
});