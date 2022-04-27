import {
    observable,
    ObservableMap,
    computed,
    IObservableValue,
    action,
    runInAction,
} from "mobx";
import productsList from "../data/products.json";
import { Product, Category } from "../models/ProductModel";

export class ProductStore {
    @observable
    private _products: ObservableMap<string, Product> = observable.map();

    @observable
    private _selectedProductId: IObservableValue<string> = observable.box();

    @computed
    get products() {
        return [...this._products.values()];
    }

    @computed
    get selectedProductId() {
        return this._selectedProductId.get();
    }

    @computed
    get selectProduct() {
        return this._products.get(this._selectedProductId.get());
    }

    @action
    setSelectedProduct(id: string) {
        runInAction(() => {
            this._selectedProductId.set(id);
        });
    }

    @action
    clearValues() {
        runInAction(() => {
            this._selectedProductId.set("");
            this._products.clear();
        });
    }

    @action
    loadProducts(categories: Category[], searchTerm: string) {
        runInAction(() => {
            this._products.clear();
        });

        (productsList as Product[]).forEach((product) => {
            runInAction(() => {
                let condition = product.productName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

                if (categories.length > 0)
                    condition =
                        condition && categories.includes(product.category);

                if (condition) {
                    this._products.set(product.id, product);
                }
            });
        });
    }
}
